<template>
    <div>
        <div class="Tab-Container" v-if="left" :style="{'background-color': backgroundColor}">
            <div class="Tab-Label" :style="{'color': labelColor}">{{tLabel}}</div>
            <div class="Tab-Value" :style="{'padding-right': '25px', 'color': valueColor}">{{value}}</div>
        </div>
        <div class="Tab-Container-Right" v-if="!left" :style="{'background-color': backgroundColor}">
            <div class="Tab-Value" :style="{'padding-left': '25px', 'color': valueColor}">{{value}}</div>
            <div class="Tab-Label" :style="{'color': labelColor}">{{tLabel}}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Watch, Prop } from 'vue-property-decorator';
    import { TweenMax } from 'gsap';

    @Component({
        components: {
            
        },
    })
    export default class ProfileTab extends Vue {

        @Prop({default: ''})
        tLabel;

        @Prop({default: ''})
        value;

        @Prop({default: true})
        left;

        @Prop({default: true})
        good;

        get backgroundColor(): string{
            if(this.good){
                return "#ADC4A0";
            }else{
                return "#C4A0A0";
            }
        }

        get labelColor(): string{
            if(this.good){
                return "#55897D";
            }else{
                return "#895555";
            }
        }

        get valueColor(): string{
            if(this.good){
                return "#87997D";
            }else{
                return "#997D7D";
            }
        }

    }

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Wendy+One&display=swap');

    .Tab-Container{
        height: 60px;
        border-radius: 0 100px 100px 0;
        display: inline-flex;
        align-items: center;
        float: left;
        box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
    }
    .Tab-Container-Right{
        height: 60px;
        border-radius: 100px 0 0 100px;
        display: inline-flex;
        float: right;
        align-items: center;
        box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
    }
    .Tab-Label{
        font-family: 'Wendy One', sans-serif;
        font-size: 1.8em;
        padding: 0 25px;
    }
    .Tab-Value{
        font-family: 'Wendy One', sans-serif;
        font-size: 2.5em;
    }
</style>