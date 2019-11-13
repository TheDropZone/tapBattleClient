<template>
    <v-container class="Background" fluid>
        <Logo :style="{'margin-top': logoYOffset}" class="Header-Anim"></Logo>
        <transition :name="slide" mode="out-in">
            <router-view name="Login"></router-view>
        </transition>
        <v-snackbar v-model="errorSnack"
                    color="#DD8E6D"
                    :timeout="6000"
                    vertical>
            Error logging in. Please try again
            <v-btn dark
                   text
                   @click="errorSnack = false">
                Close
            </v-btn>
        </v-snackbar>
        <div class="Sheet-Container" :style="'transform: translateY(' + userSheet + 'px)'">
            <div class="User-Sheet" v-ripple @click="sheetClick">
                <div class="User-Name">
                    {{username}}
                </div>
                <div class="User-Out">
                    Sign Out
                </div>
            </div>
        </div>
</v-container>
</template>

<script lang="ts">
import Logo from '../components/Logo.vue';
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';


    @Component({
        components: {
            "Logo": Logo
        },
    })
    export default class MainMenu extends Vue {
        slide: string = "slide-left";
        logoYOffset: string = "25vh";
        errorSnack: boolean = false;
        userSheet: number = 75;

        sheetClick() {
            if (this.userSheet >= 25) {
                this.userSheet = 0;
            } else {
                this.$store.commit("setUserAccess", null);
                this.$router.push({ path: '/' });
                this.userSheet = 75;
            }
        }

        get username(): string {
            if (this.$store.state.user != null) {
                return this.$store.state.user.username;
            } else {
                return "";
            }
        }

        @Watch('$store.state.user', { immediate: false, deep: true })
        userChange(to, from) {
            if (this.$store.state.user != null) {
                this.userSheet = 25;
            }
        }

        @Watch('$route', { immediate: false, deep: true })
        onRouteChange(to, from) {
            if (to != null && from != null) {
                if (to.name == "SignIn" && from.name == "SignInPending") {
                    this.slide = "slide-right";
                    this.errorSnack = true;
                } else {
                    this.slide = "slide-left";
                }

                if (to.name == "home") {
                    this.logoYOffset = "15vh";
                    this.userSheet = 25;
                } else {
                    this.logoYOffset = "25vh";
                }
            }
        }

	}
</script>

<style scoped>
    .Background{
        background: repeating-linear-gradient( 45deg, #F2EBBF, #F2EBBF 50px, #F2DDA7 50px, #F2DDA7 100px );
        padding: 7px 12px;
        height: 100%;
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
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

    .Header-Anim{
        transition: all ease-out 0.4s;
    }

    @import url('https://fonts.googleapis.com/css?family=Wendy+One&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');

    .Sheet-Container{
        position:absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 0 30px;
        display: flex;
        justify-content:center;
        transition: all ease 300ms;
        height: 60px;
    }

    @media screen and (max-width: 400px) {
        .Sheet-Container{
            padding: 0 !important;
        }
    }

    .User-Sheet{
        padding: 5px 0;
        border-radius: 10px 10px 0 0;
        background-color: #ADC4A0;
        min-width: 350px;
        flex: 1;
        box-shadow: 0 8px 28px rgba(0,0,0,0.25), 0 4px 10px rgba(0,0,0,0.22);
    }
    .User-Name{
        font-family: 'Bowlby One SC', cursive;
        text-align: center;
        color: #55897D;
        font-size: 18px;
        margin-top: 3px;
    }
    .User-Out{
        font-family: 'Wendy One', sans-serif;
        text-align: center;
        color: #87997D;
        font-size: 18px;
        line-height: 18px;
        margin-top: 2px;
    }
</style>
