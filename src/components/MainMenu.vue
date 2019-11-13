<template>
    <v-container>
        <v-row justify="center">
            <div class="SignIn-Box" style="margin-top: 10vh;">
                <v-btn depressed class="SignIn-btn" color="#DD8E6D">
                    <span class="SignIn-btn-text" @click="startBattle">Start a Battle</span>
                </v-btn>
                <v-btn depressed class="SignIn-btn" color="#DD8E6D">
                    <span class="SignIn-btn-text">View Profile</span>
                </v-btn>
            </div>
        </v-row>
    </v-container>
</template>

<script lang="ts">
   import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({
        components: {
        },
    })
    export default class MainMenu extends Vue {

        startBattle() {
            this.$store.commit("startBattle");
            this.$router.push({ path: '/loading/find' });
        }
	}
</script>

<style scoped>

        .SignIn-Box {
        padding: 20px;
        max-width: 500px;
        width: 100%;
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

    .SignIn-btn-icon{
        background-color: #7B564F;
        border-radius: 100px;
        color: #DD8E6D;
        margin-right: 15px;
        padding: 4px;
        font-size: 20px;
    }

    @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
    .SignIn-btn-text{
        font-family: 'Bowlby One SC', cursive;
        font-size: 1.5em;
        color: #7B564F;
    }
</style>