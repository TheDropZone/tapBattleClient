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
        userAccess: null
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
              var isInit = false;
              var isSignIn = false;

              var userAccess = Vu.$cookies.get("Tap-Battle-Cookie-Account");
              console.log(userAccess);
              if (userAccess != null) {
                  commit("setUserAccess", userAccess);
              }

              if (state.userAccess == null) {
                  let checkGauthLoad = setInterval(function () {
                      //@ts-ignore
                      isInit = auth.isInit;
                      //@ts-ignore
                      isSignIn = auth.isAuthorized;
                      if (isInit) {
                          clearInterval(checkGauthLoad);
                          //@ts-ignore
                          auth.signIn()
                              .then(GoogleUser => {
                                  var access = { token: GoogleUser.Zi.access_token, username: GoogleUser.w3.ig };
                                  commit("setUserAccess", access);
                                  dispatch("getUser").then(t => {
                                      resolve(t);
                                  }).catch(error => {
                                      resolve(error);
                                  });
                              });
                          
                      }
                  }, 1000);
              } else {
                  dispatch("getUser").then(t => {
                      resolve(t);
                  }).catch(error => {
                      resolve(error);
                  });
              }
          });
      },
      getUser({ commit, dispatch, state }) {
          return new Promise((reject, resolve) => {
              axios.get("http" + state.server + "/user?username=" + state.userAccess.username, { headers: { Authorization: `Bearer ${state.userAccess.token}` } }).then(data => data.data)
                  .catch(error => {
                      console.log("Server Error");
                      reject("Error");
                      return Promise.reject();
                  })
                  .then(user => {
                      console.log(user);
                      commit("setUser", user);

                      axios.get("http" + state.server + "/user/battles", { headers: { Authorization: `Bearer ${state.userAccess.token}` } }).then(data => data.data)
                          .then(battles => console.log(battles));


                      var socket = atmosphere;
                      var subSocket;
                      var request = {
                          url: 'ws' + state.server + '/battle/connect',
                          contentType: "application/json",
                          logLevel: 'debug',
                          enableProtocol: true,
                          readResponsesHeaders: false,
                          enableXDR: true,
                          transport: 'websocket',
                          fallbackTransport: 'long-polling',
                      };
                      //@ts-ignore
                      request.onOpen = function (response) {
                          var userMessage = {
                              user: state.user,
                              message: "",
                              messageType: "REGISTER",
                              battle: null
                          };
                          console.log(userMessage);
                          subSocket.push(JSON.stringify(userMessage));
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

                      subSocket = socket.subscribe(request);

                      commit("setSocket", subSocket);
                      resolve("Registered");
                  });
          });
      }
  }
})
