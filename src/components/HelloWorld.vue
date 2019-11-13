<template>
  <v-container>
      <v-layout text-center
                wrap>
          <v-flex xs12 style="margin-bottom: 10px;">
              <v-btn @click="startBattle()">Start a Battle</v-btn>
          </v-flex>
          <v-flex xs12 v-if="battle != null">
              <v-btn @click="tap()">TAP</v-btn>
          </v-flex>
          <v-row no-gutters style="margin-top: 25px;">
              <v-col>
                  <h1 v-if="battle != null && battle.player1 != null">Player 1: {{battle.player1.username}}</h1>
                  <h1 v-if="battle != null && battle.player1 != null">Taps: {{battle.player1Taps}}</h1>
              </v-col>
              <v-col>
                  <h1 v-if="battle != null && battle.player2 != null">Player 2: {{battle.player2.username}}</h1>
                  <h1 v-if="battle != null && battle.player2 != null">Taps: {{battle.player2Taps}}</h1>
              </v-col>
          </v-row>
      </v-layout>
  </v-container>
</template>

<script lang="ts">
   import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue';
    import { Battle } from '@/types/Battle';
    import axios from 'axios';
    import atmosphere from 'atmosphere.js';

    @Component({
        components: {
            "HelloWorld": HelloWorld,
        },
    })
    export default class HellowWorld extends Vue {

        get battle(): Battle {
            if (this.$store.state.battle == null) {
                return null;
            } else {
                return this.$store.state.battle;
            }
        }

        startBattle() {
            this.$store.commit("startBattle");
        }
        tap() {
            this.$store.dispatch("battleTap");
        }
    }
</script>
