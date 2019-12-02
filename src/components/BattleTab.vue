<template>
    <div class="Battle-Container" @click="dialog = true">
        <v-dialog
            v-model="dialog"
            width="90vw">
            <div class=Dialog-Background>
                <div class="Dialog-Date">
                    <div class="Dialog-D">{{formatDate(battle.date)}}</div>
                    <div class="Dialog-D">{{formatTime(battle.date)}}</div>
                </div>
                <div class="Dialog-VS">VS</div>
                <div class="Dialog-Opponent">{{opponent(battle).username}}</div>
                <div class="Score-Divider" />
                <div style="margin: 0 20px 10px 20px;">
                    <div class="Dialog-Header">Taps</div>
                    <div>
                        <div class="Dialog-Subheader">You</div>
                        <div class="Dialog-Value">{{taps}}</div>
                    </div>
                    <div>
                        <div class="Dialog-Subheader">Opponent</div>
                        <div class="Dialog-Value">{{opponentTaps}}</div>
                    </div>
                    <div class="Dialog-Header" style="margin-top: 20px;">Taps per Second</div>
                    <div>
                        <div class="Dialog-Subheader">You</div>
                        <div class="Dialog-Value">{{perSecond}}</div>
                    </div>
                    <div>
                        <div class="Dialog-Subheader">Opponent</div>
                        <div class="Dialog-Value">{{opponentPerSecond}}</div>
                    </div>
                </div>
                <div style="margin: 10px; text-align: center;">
                    <div class="Dialog-Close" @mousedown="dialog=false">Close</div>
                </div>
                
            </div>
        </v-dialog>


        <div :class="{'Battle-Background': true, 'Right': !wasWin(battle)}">
            <div style="align-self: center; text-align: center; padding: 0 15px 0 25px;">
                <div class="Battle-Status" v-if="wasWin(battle)" style="color: #55897D">WIN</div>
                <div class="Battle-Status" v-if="!wasWin(battle)" style="color: #895555">LOSS</div>
                <div class="Battle-VS" :style="[wasWin(battle) ? {'color': '#55897D'} : {'color': '#895555'}]">VS</div>
            </div>

            <div class="Battle-Opponent">{{opponent(battle).username}}</div>
            <div class="Battle-Date">{{formatDate(battle.date)}}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Watch, Prop } from 'vue-property-decorator';
    import { TweenMax } from 'gsap';
    import { Battle } from '../types/Battle';
    import moment from 'moment';
import { User } from '../types/User';

    @Component({
        components: {
            
        },
    })
    export default class BattleTab extends Vue {

        @Prop()
        battle: Battle;

        @Prop()
        user: User;

        dialog: boolean = false;

        formatDate(date: Date){
            if(date != null){
                return moment(date).format("MMM DD");
            }else{
                return "";
            }
        }
        formatTime(date: Date){
            if(date != null){
                return moment(date).format("h:mma");
            }else{
                return "";
            }
        }

        opponent(battle: Battle){
            if(this.user != null && battle != null){
                if(battle.player1.id == this.user.id){
                    return battle.player2;
                }else{
                    return battle.player1;
                }
            }else{
                return "";
            }
        }

        wasWin(battle: Battle){
            if(this.user != null && battle != null){
                return battle.winner.id == this.user.id;
            }else{
                return false;
            }
        }

        get taps(){
            if(this.battle != null && this.user != null){
                if(this.battle.player1.id == this.user.id){
                    return this.battle.player1Taps;
                }else{
                    return this.battle.player2Taps;
                }
            }else{
                return "...";
            }
        }

        get opponentTaps(){
            if(this.battle != null && this.user != null){
                if(this.battle.player1.id == this.user.id){
                    return this.battle.player2Taps;
                }else{
                    return this.battle.player1Taps;
                }
            }else{
                return "...";
            }
        }

        get perSecond(){
            if(this.battle != null && this.user != null){
                if(this.battle.player1.id == this.user.id){
                    return (this.battle.totalTime == 0) ? "0" : (this.battle.player1Taps / this.battle.totalTime).toFixed(1);
                }else{
                    return (this.battle.totalTime == 0) ? "0" : (this.battle.player2Taps / this.battle.totalTime).toFixed(1);
                }
            }else{
                return "...";
            }
        }

        get opponentPerSecond(){
            if(this.battle != null && this.user != null){
                if(this.battle.player1.id == this.user.id){
                    return (this.battle.totalTime == 0) ? "0" : (this.battle.player2Taps / this.battle.totalTime).toFixed(1);
                }else{
                    return (this.battle.totalTime == 0) ? "0" : (this.battle.player1Taps / this.battle.totalTime).toFixed(1);
                }
            }else{
                return "...";
            }
        }

    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Wendy+One&display=swap');

    .Dialog-Background{
        background-color: #F2EBBF;
        border-color: #425454;
        border-width: 3px;
        border-style: solid;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(123,86,79,0.5), 0 3px 10px rgba(123,86,79,0.6);
        position: relative;
    }
    .Dialog-Date{
        position: absolute;
        left: 0;
        top: 0;
        padding: 5px;
    }
    .Dialog-D{
        color: #DD8E6D;
        font-family: 'Bowlby One SC', cursive;
        justify-self: right;
        font-size: 0.8em;
        line-height: 1.2em;
    }
    .Dialog-VS{
        font-family: 'Wendy One', sans-serif;
        font-size: 1.5em;
        opacity: 0.75;
        color: #5C4B51;
        text-align: center;
    }
    .Dialog-Opponent{
        font-family: 'Wendy One', sans-serif;
        font-size: 1.8em;
        color: #5C4B51;
        text-align: center;
        line-height: 0.7em;
        transform: rotate(-7deg);
    }
    .Dialog-Header{
        font-family: 'Bowlby One SC', cursive;
        color: #5C4B51;
    }
    .Dialog-Subheader{
        font-family: 'Bowlby One SC', cursive;
        color: #5C4B51;
        opacity: 0.5;
        padding: 0 10px 0 15px;
        display: inline;
    }
    .Dialog-Value{
        font-family: 'Bowlby One SC', cursive;
        color: #7B564F;
        display: inline;
    }
    .Dialog-Close{
        font-family: 'Bowlby One SC', cursive;
        display: block;
        background-color: #DD8E6D;
        border-radius: 50px;
        color: #7B564F;
        height: 30px;
        font-size: 1em;
        line-height: 2em;
        box-shadow: 4px 4px 0 #FDCA93;
        transition: all ease-out 300ms;
    }
    .Dialog-Close:active{
        transform: translate(4px, 4px);
        box-shadow: 0px 0px 0 #FDCA93;
    }


    .Score-Divider{
        margin-right: 20px;
        margin-left: 20px;
        margin-top: 1.5em;
        margin-bottom: 10px;
        display: block;
        height: 3px;
        background-color: #5C4B51;
        border-radius: 50px;
    }

   .Battle-Container{
        display: flex;
        margin: 0 0 15px 0;
        flex-direction: column-reverse;
    }
    .Battle-Background{
        height: 75px;
        background-color: #ADC4A0;
        border-radius: 0 10px 50px 0;
        box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
        display:inline-flex;
        color: #87997D;
        align-self: flex-start;
        transform-origin: left;
        transition: all ease-out 300ms;
    }
    .Battle-Background:active{
        box-shadow: 0 3px 4px rgba(0,0,0,0.16), 0 3px 4px rgba(0,0,0,0.23);
        transform: scale(0.95);
    }
    .Right{
        transform-origin: right;
        border-radius: 10px 0 0 50px;
        align-self: flex-end;
        background-color: #C4A2A0;
        color: #997D7D;
    }



    .Battle-Date{
        padding: 5px;
        color: #657988;
        font-family: 'Bowlby One SC', cursive;
        justify-self: right;
        font-size: 0.8em;
    }
    .Battle-Opponent{
        font-family: 'Wendy One', sans-serif;
        font-size: 1.3em;
        align-self: center;
    }
    .Battle-Status{
        font-family: 'Bowlby One SC', cursive;
        font-size: 0.9em;
    }
    .Battle-VS{
        font-family: 'Wendy One', sans-serif;
        font-size: 1.8em;
        line-height: 0.7em;
    }
</style>