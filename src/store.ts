import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import atmosphere from 'atmosphere.js';
import { Battle } from './types/Battle';
import { BattleStatus } from './types/BattleStatus';
import { User } from './types/User';
import { Vu } from '@/main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        socket: null,
        user: null,
        oponent: null,
        server: "://tapbattledeploy-env.vfkyw9rmik.us-east-1.elasticbeanstalk.com",
        battle: null,
        gameLength: -1,
        userAccess: null,
        serverStatus: true,
        userBattles: []
  },
  mutations: {
      startBattle(state) {
          if (state.user != null && state.socket != null) {
              var battleMessage = {
                  user: state.user,
                  message: "",
                  messageType: "BATTLE",
                  battle: null
              };
              state.socket.push(JSON.stringify(battleMessage));
          }
      },
      setUserAccess(state, access) {
          Vue.set(state, "userAccess", access);
          if (access != null) {
              Vu.$cookies.set("Tap-Battle-Cookie-Account", access, "1d");
          } else {
              Vu.$cookies.remove("Tap-Battle-Cookie-Account");
          }
      },
      setBattle(state, battle: Battle) {
          try {
              if (battle.battleStatus == BattleStatus.STARTING) {
                  var player1: User = battle.player1;
                  var player2: User = battle.player2;
                  if (player1.id == state.user.id) {
                      Vue.set(state, "oponent", player2);
                  } else {
                      Vue.set(state, "oponent", player1);
                  }
              } else if (battle.battleStatus == BattleStatus.BATTLE) {
                  if (state.gameLength == -1) {
                      Vue.set(state, "gameLength", battle.timer);
                  }
              } else if (battle.battleStatus == BattleStatus.COMPLETE) {
                  Vue.set(state, "gameLength", -1);
              }
              Vue.set(state, "battle", battle);
          } catch (error) {
              console.log(error);
          }
      },
      setSocket(state, socket) {
          Vue.set(state, "socket", socket);
      },
      setUser(state, user) {
          Vue.set(state, "user", user);
      },
      setServerStatus(state, status) {
        Vue.set(state, "serverStatus", status);
      },   
      setServer(state, server) {
        Vue.set(state, "server", server);
      },
      setUserBattles(state, battles: Battle[]){
          Vue.set(state, "userBattles",battles);
      }
  },
  actions: {
      battleTap({ commit, dispatch, state }) {
          var battleMessage = {
              user: state.user,
              message: "",
              messageType: "TAP",
              battle: state.battle
          };
          state.socket.push(JSON.stringify(battleMessage))
      },
      signIn({ commit, dispatch, state }, auth) {
          return new Promise((reject, resolve) => {

              var userAccess = Vu.$cookies.get("Tap-Battle-Cookie-Account");
              console.log(userAccess);
              if (userAccess != null) {
                  commit("setUserAccess", userAccess);
              }

              if (state.userAccess == null) {
                  signInWithGoogle(auth,commit)
                    .then(() => {
                        dispatch("getUser").then(t => {
                            console.log("No Cookie: Google sign In: getUser" + t);
                            registerSocket(state, commit);
                            resolve(t);
                        }).catch(error => {
                            console.log("No Cookie: Google sign In: getUser " + error);
                            reject(new Error("User Sign In Failed"));
                        })
                    })
                    .catch(error => {
                        console.log("No Cookie: Google sign In: " + error);
                        reject(new Error("Google Sign In Failed"));
                    });
              } else {
                  dispatch("getUser")
                    .then(t => {
                            console.log("Cookie: Google sign In: " + t);
                            registerSocket(state, commit);
                            resolve(t);
                    })
                    .catch(error => {
                        console.log(error);
                        if(error instanceof Error){
                            console.log("Cookie: Google sign In: " + error);
                            console.log(error);
                            signInWithGoogle(auth,commit).then(() => {
                                dispatch("getUser").then(t => {
                                    console.log("Cookie: Failed: Google Sign in: " + t);
                                    registerSocket(state, commit);
                                    resolve(t);
                                }).catch(error => {
                                    console.log("Cookie: Failed: Google Sign in: " + error);
                                    reject(new Error("User Sign In Failed"));
                                });
                            });
                        }
                    });
              }
          });
      },
      getUser({ commit, dispatch, state }) {
          return new Promise((resolve, reject) => {
              axios.get("http" + state.server + "/user?username=" + state.userAccess.username, { headers: { Authorization: `Bearer ${state.userAccess.token}` } }).then(data => data.data)
                  .catch(error => {
                    console.log("Server Error");
                    reject(new Error(error));
                    return Promise.reject();
                  })
                  .then(user => {
                    console.log(user);
                    commit("setUser", user);
                    resolve("Registered");
                  });
          });
      },
      getUserBattles({commit, dispatch,state}){
        return new Promise((resolve, reject) => {
            axios.get("http" + state.server + "/user/battles", { headers: { Authorization: `Bearer ${state.userAccess.token}` } })
                 .then(data => data.data)
                 .then(battles => {
                    commit("setUserBattles", battles);
                 })
                 .catch(error => reject(error));
        });
      }
  }
})

function signInWithGoogle(auth, commit){
    return new Promise(function(resolve,reject){
        let checkGauthLoad = setInterval(function () {
            //@ts-ignore
            var isInit = auth.isInit;
            console.log(auth);
            //@ts-ignore
            var isSignIn = auth.isAuthorized;
            if (isInit) {
                clearInterval(checkGauthLoad);
                //@ts-ignore
                auth.signIn()
                    .then(GoogleUser => {
                        var authResponse = GoogleUser.getAuthResponse();
                        var basicProfile = GoogleUser.getBasicProfile();
                        var access = { token: authResponse.access_token, username: basicProfile.getName() };
                        commit("setUserAccess", access);
                        resolve();
                    }).catch(error => {
                        reject(error);
                    });
            }
        }, 1000);
    });
}

function registerSocket(state,commit){
    var socket = atmosphere;
    var subSocket;
    var request = {
        url: 'ws' + state.server + '/battle/connect',
        contentType: "application/json",
        logLevel: 'debug',
        enableProtocol: true,
        reconnectInterval: 5000,
        maxReconnectOnClose: 10000000000,
        readResponsesHeaders: false,
        enableXDR: true,
        transport: 'websocket',
        fallbackTransport: 'websocket',
    };
    //@ts-ignore
    request.onOpen = function (response) {
        var userMessage = {
            user: state.user,
            message: "",
            messageType: "REGISTER",
            battle: null
        };
        subSocket.push(JSON.stringify(userMessage));
        commit("setServerStatus", true);

        console.log(socket);
        console.log(subSocket);
    };
    //@ts-ignore
    request.onMessage = function (response) {
        var message = response.responseBody;
        console.log(message);
        var json;
        try {
            var battle: Battle = JSON.parse(message);
            console.log(battle);
            commit("setBattle", battle);
        } catch (e) {
            console.log('Error: ', message.data);
            return;
        }
    }
    //@ts-ignore
    request.onReconnect = function(response){
    }
    //@ts-ignore
    request.onReopen = function(response){
        var userMessage = {
            user: state.user,
            message: "",
            messageType: "REGISTER",
            battle: null
        };
        subSocket.push(JSON.stringify(userMessage));
        commit("setServerStatus", true);
    }

    //@ts-ignore
    request.onRec = function(response){
    }

    //@ts-ignore
    request.onClose = function(response){
        
        commit("setServerStatus", false);
        console.log("registerSocket: Lost Connection: Trying again in 5 seconds");
    }

    subSocket = socket.subscribe(request);
    
    commit("setSocket", subSocket);
}
