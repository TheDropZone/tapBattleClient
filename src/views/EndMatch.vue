<template>
    <v-container fluid class="Background">
        <div ref="header" style="transform: rotate(-11deg); margin-top: 7vh;">
            <div class="Tap-Header">
                You
            </div>
            <div class="Tap-Header">
                {{wonLost}}
            </div>
        </div>
        <v-row justify="center" style="margin-top: 7vh;">
            <div class="Score-Container">
                <div class="Score-Text">{{oponentTaps}}</div>
                <div class="Score-User" :style="[(wonLost == 'Won!') ? {'color': '#87997D'} : {'color': '#F2EBBF'}]">{{oponentUsername}}</div>
                <div class="Score-Divider" />
                <div class="Score-Text">{{taps}}</div>
                <div class="Score-User" :style="[(wonLost == 'Won!') ? {'color': '#F2EBBF'} : {'color': '#87997D'}]">{{username}}</div>
                <div class="Score-Divider" />
                <div class="Score-Text">{{totalTaps}}</div>
                <div class="Score-User">Total Taps</div>
                <div class="Bar-Container">
                    <div v-for="(bar, index) in bars" :key="index" class="Bar" :style="{'height': bar.h + 'px'}" />
                </div>
            </div>
            <div class="Button-Container">
                <div class="Button-Home" v-ripple @mousedown="goHome">HOME</div>
                <div class="Button-Replay" v-ripple @mousedown="startBattle">
                    <v-icon class="Replay-Icon">mdi-restart</v-icon>
                </div>
            </div>
        </v-row>
    </v-container>
</template>

<script lang="ts">
   import Vue from 'vue';
    import { Component, Watch } from 'vue-property-decorator';
    import { TweenMax, TweenLite } from 'gsap';


    @Component({
        components: {
        },
    })
    export default class EndMatch extends Vue {

        bars = [];

        created() {
            var numBars = 40;
            for (var i = 0; i < numBars; i++) {
                this.bars.push({ h: Math.random() * 25 + 5 });
            }
        }

        animateBars() {
            this.bars.forEach(bar => {
                var tween = TweenMax.to(bar, 0.5, {
                    h: Math.random() * 25 + 5,
                    //@ts-ignore
                    ease: Sine.easeInOut,
                    delay: Math.random()*0.5
                });
            });
        }

        @Watch('$route', { immediate: true, deep: true })
        onRouteChange(to, from) {
            if (to != null) {
                if (to.name == "endMatch") {
                    var radioWords = setInterval(this.animateBars, 500);
                } else {
                    clearInterval(radioWords);
                }
            }
        }

        mounted() {
            var tween = TweenMax.from(this.$refs.header, 1, {
                opacity: 0,
                scale: 4,
				//@ts-ignore
                ease: Bounce.easeOut,
                delay: 0.25
            });
        }

        startBattle() {
            this.$store.commit("startBattle");
            this.$router.push({ path: '/loading/find' });
        }

        goHome() {
            this.$router.push({ path: "/home" });
        }



        get wonLost() {
            if (this.$store.state.battle != null && this.$store.state.battle.winner.id == this.$store.state.user.id) {
                return "Won!";
            }
            return "Lost!";
        }

        get username(): string {
            if (this.$store.state.user != null) {
                return this.$store.state.user.username;
            } else {
                return "Loading..";
            }
        }

        get oponentUsername(): string {
            if (this.$store.state.oponent != null) {
                return this.$store.state.oponent.username;
            } else {
                return "Loading.."
            }
        }

        get oponentTaps(): number {
            if (this.$store.state.battle != null) {
                return (this.$store.state.battle.player1.id == this.$store.state.user.id) ? 
                    this.$store.state.battle.player2Taps :
                    this.$store.state.battle.player1Taps ;
            } else {
                return 0;
            }
        }

        get taps(): number {
            if (this.$store.state.battle != null) {
                return (this.$store.state.battle.player1.id == this.$store.state.user.id) ? 
                    this.$store.state.battle.player1Taps :
                    this.$store.state.battle.player2Taps ;
            } else {
                return 0;
            }
        }

        get totalTaps(): number {
            return this.taps + this.oponentTaps;
        }

	}
</script>

<style scoped>
    .Background{
        background: repeating-linear-gradient( 105deg, #8CBEB2, #8CBEB2 50px, #7EB0A4 50px, #7EB0A4 100px );
        padding: 7px 12px;
        height: calc(100%);
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        overflow:hidden;
    }

        @import url('https://fonts.googleapis.com/css?family=Wendy+One&display=swap');
    .Tap-Header{
        font-family: 'Wendy One', sans-serif;
        font-size: 8em;
        color: #566E6E;
        text-align: center;
        line-height: 0.7em;
        position:relative;
        /*text-shadow: 4px 4px 0px #F2EBBF, 6px 6px 0px #FDCA93; */
        text-shadow: 3px 3px 0px #F2EBBF, 8px 8px 0px #C0F2BF;
    }

        .SignIn-btn{
        width: 100%;
        height: 50px !important;
        border-radius: 200px;
        color: #DD8E6D;
        justify-content:left;
        margin: 15px 0;
        box-shadow: 3px 3px 0px #F2EBBF, 8px 8px 0px #FDCA93 !important;
        transition: all ease-out 100ms;
    }
    .SignIn-btn:active{
        transform: translate(3px, 3px);
         box-shadow: 0px 0px 0px #F2EBBF, 5px 5px 0px #FDCA93 !important;
    }

    @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
    .SignIn-btn-text{
        font-family: 'Bowlby One SC', cursive;
        font-size: 2em;
        color: #7B564F;
    }

    .SignIn-Box{
        padding: 20px;
        max-width: 500px;
        width: 100%;
    }

    .Score-Container{
        background-color: #ADC4A0;
        border-color: #425454;
        border-width: 3px;
        border-style:solid;
        border-radius: 10px;
        padding: 10px;
        width: 100%;
        max-width: 400px;
        margin: 0 30px;
        box-shadow: 5px 5px 0px rgba(85,137,125,0.5);
    }

    .Score-Text{
        display: block;
        margin-top: 30px;
        font-family: 'Wendy One', sans-serif;
        color: #425454;
        font-size: 2em;
        text-align: center;
        line-height: 1em;
    }
    .Score-User{
        display: block;
        font-family: 'Wendy One', sans-serif;
        color: #87997D;
        font-size: 1.5em;
        text-align: center;
        line-height: 1em;
    }

    .Score-Divider{
        margin-right: 10px;
        margin-left: 10px;
        margin-top: 2px;
        display: block;
        height: 3px;
        background-color: #87997D;
        border-radius: 50px;
    }

    .Bar-Container{
        width: 100%;
        height: 30px;
        margin-top: 15px;
        display:flex;
        justify-content:space-evenly;
        align-items:flex-end;
    }
    .Bar{
        width: 3px;
        border-radius: 50px;
        background-color: #87997D;
        margin: 0;
        padding: 0;
        transform-origin:bottom;
        display:inline;
    }
    .Button-Container{
        width: 100%;
        display: flex;
        justify-content:center;
        margin-top: 25px;
    }
    .Button-Home{
        height: 50px;
        padding: 0 15px;
        line-height: 50px;
        text-align: center;
        font-family: 'Bowlby One SC', cursive;
        font-size: 23px;
        color: #87997D;
        background-color: #ADC4A0;
        border-color: #425454;
        border-width: 3px;
        border-style: solid;
        border-radius: 100px;
        margin: 0 15px;
        cursor: pointer;
        box-shadow: 2px 2px 0px #8CBEB2, 5px 5px 0px #55897D ;
        transition: all ease 300ms;
    }
    .Button-Home:active{
        box-shadow: 0px 0px 0px #8CBEB2, 3px 3px 0px #55897D ;
        transform: translate(2px, 2px)
    }
    .Button-Replay{
        cursor: pointer;
        margin: 0 15px;
        height: 50px;
        width: 50px;
        line-height: 50px;
        text-align: center;
        font-family: 'Bowlby One SC', cursive;
        font-size: 23px;
        color: #87997D;
        background-color: #ADC4A0;
        border-color: #425454;
        border-width: 3px;
        border-style: solid;
        border-radius: 100px;
        box-shadow: 2px 2px 0px #8CBEB2, 5px 5px 0px #55897D ;
        transition: all ease 300ms;
    }
    .Button-Replay:active{
        box-shadow: 0px 0px 0px #8CBEB2, 3px 3px 0px #55897D ;
        transform: translate(2px, 2px)
    }
    .Replay-Icon{
        color:  #73826A;
        font-size: 30px;
    }
</style>
