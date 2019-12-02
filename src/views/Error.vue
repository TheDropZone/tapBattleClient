<template>
    <v-container fluid class="Background">
        <div>
            <div class="Battles-Header" style="margin-top: 20vh;">
                Oh
            </div>
            <div class="Tap-Header">
                SNAP!
            </div>
        </div>
        <v-row justify="center" style="margin-top: 7vh;">
            <div class="Score-Container">
                <div class="Score-Text">Something went wrong!</div>
            </div>
            <div class="Button-Container">
                <div class="Button-Home" v-ripple @click="goHome">Back</div>
            </div>
        </v-row>
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
    export default class Error extends Vue {


        goHome() {
            this.$router.push({ path: "/" });
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
        overflow:hidden;
    }

    @import url('https://fonts.googleapis.com/css?family=Wendy+One&display=swap');
    .Tap-Header{
        font-family: 'Wendy One', sans-serif;
        font-size: 7em;
        color: #DD8E6D;
        text-align: center;
        line-height: 0.7em;
        position:relative;
        transform: rotate(10deg);
        /*text-shadow: 4px 4px 0px #FDCA93, 6px 6px 0px #F2EBBF; */
        text-shadow: 3px 3px 0px #F2EBBF, 8px 8px 0px #FDCA93;
    }
    @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
    .Battles-Header{
        font-family: 'Bowlby One SC', cursive;
        font-size: 3em;
        color: #7B564F;
        text-align: center;
        line-height: 1.3em;
        transform: rotate(-5deg) translateX(1em);
    }

    .Score-Container{
        background-color: #F2EBBF;
        border-color: #425454;
        border-width: 3px;
        border-style:solid;
        border-radius: 10px;
        padding: 10px;
        width: 100%;
        max-width: 400px;
        margin: 0 30px;
        box-shadow: 5px 5px 0px rgba(123,86,79,0.5);
    }

    .Score-Text{
        display: block;
        margin: 30px 0 ;
        font-family: 'Wendy One', sans-serif;
        color: #5C4B51;
        font-size: 2em;
        text-align: center;
        transform: rotate(-9deg);
        line-height: 1em;
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
        color: #5C4B51;
        background-color: #F2EBBF;
        border-color: #425454;
        border-width: 3px;
        border-style: solid;
        border-radius: 100px;
        margin: 0 15px;
        cursor: pointer;
        box-shadow: 2px 2px 0px #DD8E6D, 5px 5px 0px #7B564F ;
        transition: all ease 300ms;
    }
    .Button-Home:active{
        box-shadow: 0px 0px 0px #DD8E6D, 3px 3px 0px #7B564F ;
        transform: translate(2px, 2px)
    }
</style>

