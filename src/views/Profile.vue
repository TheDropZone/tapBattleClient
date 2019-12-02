<template>
     <v-container fluid class="Background">
         <div class="Profile-Header">
             <div class="Header-Name">{{userName}}</div>
             <div class="Header-Level">{{userLevel}}</div>
         </div>
         <div class="Home-Header">
             <div class="Home-Text" @mousedown="goHome">Go Home</div>
         </div>

         <!-- Win/Loss Profile Data !-->
         <div style="margin-top: 100px;"/>
         <div class="Profile-Section">
             <div class="Section-Left" />
             <div class="Section-Text">Player Stats</div>
             <div class="Section-Right" />
         </div>
        <Tab tLabel="Wins" :value="userWins"
             style="margin-top: 10px;" />
        <Tab tLabel="W/L" :value="winLossRatio" 
             :left="false" 
             style="margin-top: 50px;"/>
        <Tab tLabel="Losses" :value="userLoss" 
             :good="false"
             style="margin-top: 90px;"/>


        <!-- Taps Profile Data !-->
        <div style="margin-top: 250px;"/>
        <div class="Profile-Section">
             <div class="Section-Left" />
             <div class="Section-Text">Taps</div>
             <div class="Section-Right" />
        </div>
        <Tab tLabel="Total Taps" :value="totalTaps"
             style="margin-top: 10px;" />
        <Tab tLabel="Taps per Second" :value="tapsPerSecond"
             :left="false"
             style="margin-top: 90px;" />

        <!-- List of Battles !-->
        <div style="margin-top: 250px;"/>
        <div class="Profile-Section">
             <div class="Section-Left" />
             <div class="Section-Text">Battles</div>
             <div class="Section-Right" />
        </div>
        
        <Battle v-for="(battle, index) in userBattles" :key="index" :battle="battle" :user="user" />

        <div style="margin-top: 100px;" /> <!-- Bottom Pad -->
     </v-container>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Watch } from 'vue-property-decorator';
    import { TweenMax } from 'gsap';
    import ProfileTab from '../components/ProfileTab.vue';
    import BattleTab from '../components/BattleTab.vue';
    import { Battle } from '../types/Battle';
    import { User } from '../types/User';
    import moment from 'moment';

    @Component({
        components: {
            "Tab": ProfileTab,
            "Battle": BattleTab
        },
    })
    export default class Profile extends Vue {

        get userName(): string{
            if(this.user != null){
                return this.user.username;
            }else{
                return "Loading...";
            }
        }

        get user(): User{
            if(this.$store.state.user != null){
                return this.$store.state.user;
            }else{
                return null;
            }
        }

        get userLevel(): string{
            return "11";
        }

        get userBattles(): Battle[]{
            if(this.$store.state.userBattles != null){
                var battles: Battle[] = this.$store.state.userBattles.slice();
                battles.forEach(battle => battle.date = moment.utc(battle.timestamp.toString().toLowerCase(), "MM-DD-YY H:mma").local().toDate());
                return battles.reverse();
            }else{
                return [];
            }
        }



        get userWins(): number{
            if(this.userBattles != null && this.user != null){
                return this.userBattles.filter(battle => battle.winner.id == this.user.id).length;
            }else{
                return 0;
            }
        }

        get userLoss(): number{
            if(this.userBattles != null && this.user != null){
                return this.userBattles.filter(battle => battle.winner.id != this.user.id).length;
            }else{
                return 0;
            }
        }

        get winLossRatio(){
            if(this.userBattles != null && this.user != null){
                if(this.userLoss != 0){
                    return (this.userWins / this.userLoss).toFixed(1).toString();
                }else{
                    return this.userWins.toString();
                }
            }else{
                return "";
            }
        }

        get totalTaps(): string{
            if(this.$store.state.user != null){
                return this.$store.state.user.taps;
            }else{
                return "0";
            }
        }

        get tapsPerSecond(): string{

            if(this.user != null){
                return this.averageList(
                    this.userBattles
                    .map(battle => { //map battle to the current user's taps per second for that battle
                        //only count a battle if the user actually tapped (taps > 0) and the battle's total time is not 0
                        if(battle.player1.id == this.user.id){ //current user is player1 
                            return (battle.player1Taps == 0 || battle.totalTime == 0) ? null : (battle.player1Taps / battle.totalTime);
                        }else{ //current user is player2
                            return (battle.player2Taps == 0|| battle.totalTime == 0) ? null : (battle.player2Taps / battle.totalTime);
                        }
                    })
                    .filter(tap => (tap != null)) //ignore null entries. When the user didn't tap or the totalTime was 0
                ).toFixed(1);
            }else{
                return "0";
            }
        }

        averageList(list: number[]): number{
            if(list != null && list.length > 0){
                return list.reduce((prev, curr) => prev + curr) / list.length;
            }else{
                return 0;
            }
        }

        goHome() {
            this.$router.push({ path: "/home" });
        }


        @Watch('$route', { immediate: true, deep: true })
        onRouteChange(to, from) {
            if(to != null && to.name === "profile"){
                this.$store.dispatch("getUser");
                this.$store.dispatch("getUserBattles");
            }
        }
    }
</script>

<style scoped>
    .Background{
        background: repeating-linear-gradient( 45deg, #F2EBBF, #F2EBBF 50px, #F2DDA7 50px, #F2DDA7 100px );
        padding: 0;
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
    }

    .Profile-Header{
        height: 60px;
        background-color: #425454;
        border-radius: 0 50px 50px 0;
        position: fixed;
        display: inline-flex;
        left: 0;
        top: 25px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    @import url('https://fonts.googleapis.com/css?family=Wendy+One&display=swap');
    .Header-Name{
        font-family: 'Wendy One', sans-serif;
        font-size: 1.8em;
        color: #8CBEB2;
        align-self: center;
        padding: 0 25px;
    }

    .Home-Header{
        height: 60px;
        background-color: #425454;
        border-radius: 50px 0 0 50px;
        position: fixed;
        display: inline-flex;
        right: 0;
        bottom: 25px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        cursor: pointer;
        transition: all ease-out 300ms;
        transform-origin: right;
    }
    .Home-Header:active{
        transform: scale(0.95);
        
        box-shadow: 0 9px 28px rgba(0,0,0,0.25), 0 6px 10px rgba(0,0,0,0.22);
    }

    .Home-Text{
        font-family: 'Wendy One', sans-serif;
        font-size: 1.8em;
        color: #8CBEB2;
        align-self: center;
        padding: 0 50px 0 25px;
        cursor: pointer;
    }

    .Header-Level{
        font-family: 'Wendy One', sans-serif;
        font-size: 2.5em;
        color: #ADC4A0;
        align-self: center;
        padding-right: 25px;
    }

    .Profile-Section{
        margin: 0 40px;
        text-align: center;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
    .Section-Text{
        font-family: 'Bowlby One SC', cursive;
        color: #DD8E6D;
        font-size: 1.8em;
        padding: 0 15px;
    }
    .Section-Left{
        height: 5px;
        background-color: #DD8E6D;
        border-radius: 10px 0 0 10px;
        flex: 1;
    }
    .Section-Right{
        height: 5px;
        background-color: #DD8E6D;
        border-radius: 0 10px 10px 0;
        flex: 1;
    }



</style>