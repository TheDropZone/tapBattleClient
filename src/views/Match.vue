<template>
    <v-container fluid class="Background">
        <v-row>
            <v-col style="margin-top: 15vh; position:relative;">
                <v-img contain src="../assets/speaker.svg" class="Speaker-Image" />
                <div class="Opp-Name-Container">
                    <div ref="OpName" class="Opp-Name">{{opponentName}}</div>
                    <canvas id="noiseCanvas" class="Noise-Canvas" />
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col style="display: inline-flex; justify-content: center;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 47" class="Radio-Slider">
                    <g id="Group_35" data-name="Group 35" transform="translate(-34 -273)">
                        <g id="Rectangle_36" data-name="Rectangle 36" transform="translate(34 273)" fill="#adc4a0" stroke="#425454" stroke-width="3">
                            <rect width="292" height="47" rx="10" stroke="none" />
                            <rect x="1.5" y="1.5" width="289" height="44" rx="8.5" fill="none" />
                        </g>
                        <g id="Group_27" data-name="Group 27" transform="translate(1)">
                            <line id="Line_3" data-name="Line 3" y2="8" transform="translate(47.5 301.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-2" data-name="Line 3" y2="15" transform="translate(53.5 294.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-3" data-name="Line 3" y2="27" transform="translate(59.5 282.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-4" data-name="Line 3" y2="4" transform="translate(65.5 305.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-5" data-name="Line 3" y2="8" transform="translate(71.5 301.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-6" data-name="Line 3" y2="7" transform="translate(77.5 302.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-7" data-name="Line 3" y2="12" transform="translate(83.5 297.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-8" data-name="Line 3" y2="10" transform="translate(89.5 299.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-9" data-name="Line 3" y2="25" transform="translate(95.5 284.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-10" data-name="Line 3" y2="5" transform="translate(101.5 304.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-11" data-name="Line 3" y2="3" transform="translate(107.5 306.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-12" data-name="Line 3" y2="5" transform="translate(113.5 304.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-13" data-name="Line 3" y2="7" transform="translate(119.5 302.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-14" data-name="Line 3" y2="17" transform="translate(125.5 292.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-15" data-name="Line 3" y2="4" transform="translate(131.5 305.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-16" data-name="Line 3" y2="6" transform="translate(137.5 303.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-17" data-name="Line 3" y2="5" transform="translate(143.5 304.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-18" data-name="Line 3" y2="12" transform="translate(149.5 297.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-19" data-name="Line 3" y2="25" transform="translate(155.5 284.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-20" data-name="Line 3" y2="17" transform="translate(161.5 292.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-21" data-name="Line 3" y2="5" transform="translate(167.5 304.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-22" data-name="Line 3" y2="12" transform="translate(173.5 297.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-23" data-name="Line 3" y2="8" transform="translate(179.5 301.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-24" data-name="Line 3" y2="5" transform="translate(185.5 304.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-25" data-name="Line 3" y2="15" transform="translate(191.5 294.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-26" data-name="Line 3" y2="10" transform="translate(197.5 299.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-27" data-name="Line 3" y2="7" transform="translate(203.5 302.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-28" data-name="Line 3" y2="4" transform="translate(209.5 305.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-29" data-name="Line 3" y2="12" transform="translate(215.5 297.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-30" data-name="Line 3" y2="5" transform="translate(221.5 304.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-31" data-name="Line 3" y2="3" transform="translate(227.5 306.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-32" data-name="Line 3" y2="10" transform="translate(233.5 299.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-33" data-name="Line 3" y2="12" transform="translate(239.5 297.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-34" data-name="Line 3" y2="6" transform="translate(245.5 303.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-35" data-name="Line 3" y2="22" transform="translate(251.5 287.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-36" data-name="Line 3" y2="6" transform="translate(257.5 303.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-37" data-name="Line 3" y2="11" transform="translate(263.5 298.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-38" data-name="Line 3" y2="17" transform="translate(269.5 292.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-39" data-name="Line 3" y2="5" transform="translate(275.5 304.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-40" data-name="Line 3" y2="7" transform="translate(281.5 302.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-41" data-name="Line 3" y2="10" transform="translate(287.5 299.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-42" data-name="Line 3" y2="5" transform="translate(293.5 304.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-43" data-name="Line 3" y2="7" transform="translate(299.5 302.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-44" data-name="Line 3" y2="17" transform="translate(305.5 292.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                            <line id="Line_3-45" data-name="Line 3" y2="6" transform="translate(311.5 303.5)" fill="none" stroke="#87997d" stroke-linecap="round" stroke-width="3" />
                        </g>
                        <line id="Line_4" data-name="Line 4" y1="20.5" :transform="'translate(' + sliderX.x + ' 296.5)'" fill="none" stroke="#5c4b51" stroke-width="5" />
                    </g>
                </svg>
            </v-col>
        </v-row>
        <transition :name="slide" mode="out-in">
            <router-view name="Content"></router-view>
        </transition>
        <v-row>
            <v-col style="margin-top: 5vh; position: relative;">
                <div style="position: absolute; width: 100%; left:0; top: 0; height: 100%; padding: 12px;">
                    <div class="Dial-Shadow"></div>
                </div>
                <v-img contain src="../assets/dial.svg" class="Dial-Image" :style="getDialRotation" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { TweenMax, TweenLite } from 'gsap';
    import { Component, Watch } from 'vue-property-decorator';
    import { BattleStatus } from '@/types/BattleStatus';
    import { User } from '@/types/User';

    @Component({
        components: {
        },
    })
    export default class Match extends Vue {
        slide: string = "slide-left";
        state: string = "Finding";
        //sliderX: string = "translate(58.5 296.5)";
        sliderX = { x: 60 };
        words = [];

        mounted() {
            this.moveSlider();
            var that = this;
            TweenLite.ticker.addEventListener("tick", this.update);
            var radioWords = setInterval(function () {
                var wds = ["TAP","POP"];
                var word = { x: Math.random() * 150 + 50, y: Math.random() * 80 + 40, text: wds[Math.round(Math.random() * (wds.length - 1))], scale: 0, rotation: Math.random() * 360, opac: 1 };
                that.words.push(word);
                var tween = TweenMax.to(word, 0.4, {
                    scale: Math.random()*2 + 1,
					//@ts-ignore
                    ease: Elastic.easeOut.config(1, 0.3),
                    onComplete: function () {
                        var tween = TweenMax.to(word, 0.2, {
                            opac: 0
                        });
                    }
                });
            }, 300);
        }

        beforeDestroy() {
            TweenLite.ticker.removeEventListener("tick", this.update);
            console.log("Removed Tick Listener");
        }

        update() {
            try {
                var canvas = document.getElementById("noiseCanvas");
                //@ts-ignore
                var ctx = canvas.getContext("2d");
				//@ts-ignore
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                if (this.state == "Finding") {
                    for (var i = 0; i < this.words.length; i++) {
                        if (this.words[i].opac == 0) {
                        }
                        var fontSize = 15.0 * this.words[i].scale;
                        ctx.font = (fontSize | 0) + "px 'Wendy One'";
                        //ctx.fillStyle = "rgba(123, 86, 79, " + this.words[i].opac + ")";
                        ctx.fillStyle = "rgba(242, 235, 191, " + this.words[i].opac + ")";
                        ctx.fillText(this.words[i].text, this.words[i].x, this.words[i].y)
                    }
                    this.words = this.words.filter(word => word.opac != 0);
                }
            } catch (error) {

            }
        }

        get getDialRotation() {
            return "transform: rotate(" + (this.sliderX.x + 150) + "deg)";
        }

        @Watch('$route', { immediate: true, deep: true })
        onRouteChange(to, from) {
            if (to != null) {
                if (to.name == "loadingMatched") {
                    this.state = "Matched";
                } else {
                    this.state = "Finding";
                }
            }
        }

        @Watch('state', { immediate: true })
        stateChanged() {
            if (this.state == "Finding") {
                
            } else {

            }
        }

        @Watch('$store.state.battle.battleStatus', { immediate: true })
        battleStatus() {
            if (this.$store.state.battle != null && this.$store.state.battle.battleStatus != null && this.$store.state.battle.battleStatus == BattleStatus.STARTING) {
                this.$router.push({ path: '/loading/matched' });
                TweenMax.from(this.$refs.OpName, 1, {
                        opacity: 0,
                        scale: 3,
						//@ts-ignore
                        ease: Bounce.easeOut

                    });
            }
            if (this.$store.state.battle != null && this.$store.state.battle.battleStatus != null && this.$store.state.battle.battleStatus == BattleStatus.COUNTDOWN) {
                this.$router.push({ path: '/battle' });
            }
        }

        moveSlider() {
            if (this.state == "Finding") {
                var tween = TweenMax.to(this.sliderX, 0.75, {
                    x: Math.random() * 230 + 50,
                    //@ts-ignore
                    ease: Back.easeOut.config(1.7),
                    onComplete: this.moveSlider
                });
            }
        }

        get opponentName() {
            if (this.state == "Matched") {
                if (this.$store.state.oponent != null) {
                    return this.$store.state.oponent.username;
                }
            } else {
                return "";
            }
        }
    }
</script>

<style scoped>
    .Background{
        background: repeating-linear-gradient( 105deg, #8CBEB2, #8CBEB2 50px, #7EB0A4 50px, #7EB0A4 100px );
        padding: 7px 12px;
        height: 100%;
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
    }
    .Speaker-Image{
        width: 75%;
        margin: auto;
        max-height: 250px;
        display: flex;
        align-items:center;
        overflow:visible;
    }

    @import url('https://fonts.googleapis.com/css?family=Wendy+One&display=swap');
    .Opp-Name{
        font-family: 'Wendy One', sans-serif;
        font-size: 3em;
        white-space:nowrap;
        color: #EB7575;
        content: attr(name);
        width: 100%;
        text-align:center;
        height: 1.5em;
        opacity: 0;
        transform: rotate(-15deg) scale(1);
        text-shadow: 2px 2px 0px #F2EBBF, 6px 6px 0px #425454;
        position: absolute;
        opacity: 1;
    }

    .Opp-Name-Container{
        display: inline-flex;
        align-items:center;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height: 100%;
    }

    .Noise-Canvas{
        margin: auto;
        width: 100%;
        height: 100%;
        max-width: 500px;
    }

    .Radio-Slider{
        width: 75%;
        height: 100%;
        max-height: 75px;
    }

    .Dial-Image{
        width: 100px;
        margin: auto;
        position: relative;
        overflow: visible;
    }
    .Dial-Shadow{
        width: 100px;
        height: 100px;
        margin:auto;
        background-color: #55897D;
        border-radius: 300px;
        transform: translate(5px, 5px);
    }

        .slide-left-enter-active,
    .slide-left-leave-active {
        transition-duration: 300ms;
        transition-property: all;
        transition-timing-function: ease-out;
    }

    .slide-left-enter {
        opacity: 0;
        transform: translateX(25%);
    }

    .slide-left-leave-to {
        opacity: 0;
        transform: translateX(-25%);
    }

    .slide-right-enter-active,
    .slide-right-leave-active {
        transition-duration: 300ms;
        transition-property: all;
        transition-timing-function: ease-out;
    }

    .slide-right-enter {
        opacity: 0;
        transform: translateX(-25%);
    }

    .slide-right-leave-to {
        opacity: 0;
        transform: translateX(25%);
    }



</style>