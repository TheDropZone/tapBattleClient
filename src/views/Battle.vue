<template>
    <v-container fluid class="Background" @click="battleClick">
        <img src="../assets/radialStripes.svg" class="Stripes" />

        <div class="Timer-Container" style="top: 0;">
            <div class="Timer-Slider" :style="{'width' : timer}" />
        </div>
        <div class="Timer-Container" style="bottom: 0;">
            <div class="Timer-Slider" :style="{'width' : timer}" />
        </div>


        <div class="Player-Container" style="top: 17px;">
            <span class="Player">{{oponentTaps}}</span>
            <span class="Player" style="float:right;">{{oponentUsername}}</span>
        </div>

        <div class="Player-Container" style="bottom: 17px;">
            <span class="Player">{{username}}</span>
            <span class="Player" style="float:right;">{{taps}}</span>
        </div>

        <div class="Slider-Container">
            <div class="Divider" />
            <div class="Slider-Adjustment" :style="{'height': (sliderPercentage.val + '%')}">
                <div class="Slider" />
            </div>
        </div>

        <div class="Countdown-Container">
            <div ref="countdown" class="Countdown-Text" >{{countdown}}</div>
        </div>

    </v-container>
</template>

<script lang="ts">
import Logo from '../components/Logo.vue';
import Vue from 'vue';
    import { Component, Watch } from 'vue-property-decorator';
    import { TweenMax } from 'gsap';
    import { BattleStatus } from '@/types/BattleStatus';

    @Component({
        components: {
        },
    })
    export default class Battle extends Vue {

        beatByTaps = 40.0;

        sliderPercentage = { val: 50.0 };

        timerVal = { val: 0 };

        countdown = "0";

        battleClick() {
            if (this.$store.state.battle != null && this.$store.state.user != null) {
                this.$store.dispatch("battleTap");
            }
        }

        get battleTimer() {
            if (this.$store.state.battle != null) {
                return this.$store.state.battle.timer;
            } else {
                return 0;
            }
        }

        @Watch('$store.state.battle.battleStatus', { immediate: true })
        battleStatus() {
            if (this.$store.state.battle != null && this.$store.state.battle.battleStatus != null && this.$store.state.battle.battleStatus == BattleStatus.COMPLETE) {
                this.$router.push({ path: '/end' });
            }
        }
        

        @Watch('battleTimer', { immediate: true, deep: true })
        animateTimer() {
            if (this.$store.state.battle != null && this.$store.state.battle.battleStatus == BattleStatus.BATTLE) {
                var tween = TweenMax.to(this.timerVal, 1, {
                    val: this.battleTimer,
					//@ts-ignore
                    ease: Power0.easeNone,
                });
                if (this.countdown == "1") {
                    this.countdown = "TAP!";
                    var that = this;
                    var tween = TweenMax.from(this.$refs.countdown, 1, {
                        opacity: 0,
                        scale: 3,
						//@ts-ignore
                        ease: Bounce.easeOut,
                        onComplete: this.fadeCountdown
                    });
                }
            } else if (this.$store.state.battle != null && this.$store.state.battle.battleStatus == BattleStatus.COUNTDOWN) {
                this.countdown = this.$store.state.battle.timer;
                var tween = TweenMax.from(this.$refs.countdown, 1, {
                    opacity: 0,
                    scale: 3,
					//@ts-ignore
                    ease: Bounce.easeOut,
                });
            }
        }

        fadeCountdown() {
            console.log(this.$refs);
            var tween = TweenMax.to(this.$refs.countdown, 0.5, {
                opacity: 0,
				//@ts-ignore
                ease: Power3.easeOut,
            });
        }

        get timer(): string {
            var percentage = 0;
            if (this.$store.state.gameLength != -1) {
                var percentage = (this.$store.state.gameLength - this.timerVal.val) / this.$store.state.gameLength * 100.0;
            }
            return percentage + "%";
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

        get tapsOff(): number {
            if (this.$store.state.battle != null) {
                var player1Taps = this.$store.state.battle.player1Taps;
                var player2Taps = this.$store.state.battle.player2Taps;
                if (this.$store.state.battle.player1.id == this.$store.state.user.id) {
                    return player1Taps - player2Taps;
                } else {
                    return player2Taps - player1Taps;
                }
            } else {
                return 0;
            }
        }

        get inner_sliderPercentage(): number {
            var percentage = (this.tapsOff + this.beatByTaps) / (this.beatByTaps * 2.0) * 100.0;
            return percentage;
        }

        @Watch('inner_sliderPercentage', { immediate: true, deep: true })
        animateSlider() {
            var tween = TweenMax.to(this.sliderPercentage, 0.3, {
                    val: this.inner_sliderPercentage,
					//@ts-ignore
                    ease: Power3.easeOut,
                });
        }
    }
</script>

<style scoped>

    @font-face {
        font-family: "badaboom";
        src: url("../assets/badaboom.regular.otf") format('opentype');
    }
    .Countdown-Container{
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;

    }

    .Countdown-Text{
        font-family: 'badaboom', sans-serif;
        color: #F3B562;
        font-size: 15em;
        text-shadow: 3px 3px 0px #425454, 8px 8px 0px #425454;
        z-index: 10;
        text-align: center;
        -webkit-text-stroke-width: 7px;
        -webkit-text-stroke-color: black;
        transform: rotate(-10deg);

        -webkit-user-select: none;  
        -moz-user-select: none;    
        -ms-user-select: none;      
        user-select: none;
    }

    .Background{
        background-color: #8CBEB2;
        height: 100%;
        overflow: hidden;
        position:relative;
        padding: 0;
    }

    .Stripes{
        height: 325vmax;
        position: absolute;
        left: 0;
        top: 0;
        transform-origin: center center;
        transform: translate(-52.5%, -52.5%);
        z-index: 0;
    }

    .Timer-Container{
        height: 17px;
        width: 100%;
        display: inline-flex;
        justify-content:center;
        justify-items:center;
        padding: 5px;
        position: absolute;
    }
    .Timer-Slider{
        background-color: hsl(98, 66%, 77%);
        height: 100%;
        width: 20%;
        border-radius: 50px;
        z-index: 1;
    }

    .Player-Container{
        height: 45px;
        width: 100%;
        padding: 10px 20px;
        position: absolute;

    }

     @import url('https://fonts.googleapis.com/css?family=Wendy+One&display=swap');
    .Player{
        font-family: 'Wendy One', sans-serif;
        font-size: 1.7em;
        color: #425454;
        line-height: 1em;
    }

    .Slider-Container{
        position:absolute;
        width: 100%;
        height: calc( 100vh - 130px );
        top: 65px;
    }

    .Divider{
        height: 3px;
        top: calc( calc( 100vh - 130px ) / 2 ) ;
        width: 100%;
        background-color: #425454;
        position: absolute;
    }

    .Slider-Adjustment{
        width: 100%;
        height: 50%;
        padding: 0 40px;
        display: inline-flex;
        align-items:flex-end;
    }

    .Slider{
        height: 7px;
        width: 100%;
        border-radius: 50px;
        background-color: #F2EBBF;
        transform: translateY(5px);
    }
</style>