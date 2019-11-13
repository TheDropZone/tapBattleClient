<template>
    <v-app style="overflow: hidden;">
        <transition  
            name="fade" 
            class="Transition">
            <router-view name="Main" />
        </transition>
        
    </v-app>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue';
   
    

@Component({
    components: {
        "HelloWorld": HelloWorld,
    },
})
export default class App extends Vue {
    isInit = false;
    isSignIn = false;

    created() {
        //@ts-ignore
        //this.$store.commit("signIn", this.$gAuth);
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
    .fade-enter-to{
        
    }
    .fade-leave{
    }
    .fade-leave-active {
      opacity: 0
    }


</style>
