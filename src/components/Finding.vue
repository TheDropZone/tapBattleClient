<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="Header">Finding Oponent</div>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script lang="ts">
import Logo from '../components/Logo.vue';
import Vue from 'vue';
    import { Component, Watch } from 'vue-property-decorator';
    import { TweenMax } from 'gsap';


    @Component({
        components: {
        },
    })
    export default class Finding extends Vue {
        

    }
</script>

<style scoped>

     @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
    .Header{
        font-family: 'Bowlby One SC', cursive;
        font-size: 1.7em;
        color: #425454;
        text-align: center;
        line-height: 0.9em;
    }


</style>