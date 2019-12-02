<template>
    <v-container>
        <v-row justify="center">
            <div class="SignIn-Box">
                <div class="SignIn-Subheader"> Sign In with</div>
                <v-btn depressed class="SignIn-btn" color="#DD8E6D" @touchstart.prevent="googleSignIn" @mousedown="googleSignIn">  
                    <v-icon class="SignIn-btn-icon">mdi-google</v-icon>
                    <span class="SignIn-btn-text" >Google</span>
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
    export default class SignIn extends Vue {
        

        googleSignIn(event) {
            console.log(event);
            //@ts-ignore
            this.$store.dispatch("signIn", this.$gAuth).then(output => {
                console.log(output);
                if (output == "Registered") {
                    this.$router.push({ path: '/home' });
                } else {
                    this.$store.commit("setUserAccess", null);
                    this.$router.push({ path: '/' });
                }
                }).catch(error => {
                    console.log(error);
                    if (error == "Registered") {
                        this.$router.push({ path: '/home' });
                    } else {
                        this.$store.commit("setUserAccess", null);
                        this.$router.push({ path: '/' });
                    }
                });
            this.$router.push({ path: '/SigningIn' });
        }
	}
</script>

<style scoped>
    .SignIn-Box{
        padding: 20px;
        max-width: 500px;
        width: 100%;
    }

    @import url('https://fonts.googleapis.com/css?family=Wendy+One&display=swap');
    .SignIn-Subheader{
        font-family: 'Wendy One', sans-serif;
        font-size: 1.5em;
        color: #F06060;
        text-align: center;
        line-height: 0.7em;
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
        font-size: 2em;
        color: #7B564F;
    }

</style>