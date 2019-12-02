<template>
    <v-app style="user-select: none; touch-action: manipulation;" id="app">
        <transition  
            name="fade" 
            class="Transition">
            <router-view name="Main" />
        </transition>
        
    </v-app>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Watch } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue';
    import $ from 'jquery'

    

@Component({
    components: {
        "HelloWorld": HelloWorld,
    }
})
export default class App extends Vue {
    isInit = false;
    isSignIn = false;

    created() {

        //@ts-ignore
        if(window.webpackHotUpdate){
            this.$store.commit("setServer","://localhost:5000");
        }
    }

    @Watch('$store.state.serverStatus', { immediate: false, deep: true })
        serverStatusChange(to, from) {
            if (this.$store.state.serverStatus == false) {
                console.log("Sending to error page");
                this.$router.push("error");
            }else{
                if(this.$router.currentRoute.name == "error"){
                    this.$router.push("/");
                }
            }
        }
}

</script>

<style>
    .Transition{
        height: 100%;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition-duration: 400ms;
      transition-property: all;
      transition-timing-function: ease;
    }

    .fade-enter {
        opacity:0;
        transform: scale(2);
    }
    .fade-leave-active {
      opacity: 0
    }


</style>
