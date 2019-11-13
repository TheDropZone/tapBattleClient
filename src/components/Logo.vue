<template>
	<v-container>
        <div class="Tap-Header">
            TAP
        </div>
        <div class="Battles-Header">
            BATTLES
        </div>
    </v-container>
</template>

<script lang="ts">
   import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({
        components: {
        },
    })
    export default class Logo extends Vue {
	}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Wendy+One&display=swap');
    .Tap-Header{
        font-family: 'Wendy One', sans-serif;
        font-size: 10em;
        color: #DD8E6D;
        text-align: center;
        line-height: 0.7em;
        position:relative;
        /*text-shadow: 4px 4px 0px #FDCA93, 6px 6px 0px #F2EBBF; */
        text-shadow: 3px 3px 0px #F2EBBF, 8px 8px 0px #FDCA93;
    }
    @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
    .Battles-Header{
        font-family: 'Bowlby One SC', cursive;
        font-size: 2.8em;
        transform: translateX(-0.4em);
        color: #7B564F;
        text-align: center;
        line-height: 0.9em;
    }

</style>