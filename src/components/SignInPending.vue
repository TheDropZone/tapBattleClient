<template>
    <v-container>
        <v-row justify="center">
            <div class="SignIn-Box">
                <v-btn depressed class="SignIn-btn" color="#DD8E6D">
                    <v-icon class="SignIn-btn-icon">mdi-google</v-icon>
                    <span class="SignIn-btn-text">Signing In</span>
                </v-btn>
                <v-col style="justify-content: space-around; display: inline-flex; margin-top: 15px;">
                    <v-progress-circular :size="70"
                                         :width="7"
                                         color="#DD8E6D"
                                         indeterminate></v-progress-circular>
                </v-col>
            </div>
        </v-row>
    </v-container>
</template>

<script lang="ts">
   import Vue from 'vue';
    import { Component, Watch } from 'vue-property-decorator';


    @Component({
        components: {
        },
    })
    export default class SignInPending extends Vue {

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
        box-shadow: 5px 5px 0px #FDCA93 !important;
        transform: translate(3px, 3px);
        transition: all ease-out 100ms;
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