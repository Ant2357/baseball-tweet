<template>
  <button v-if="!appState.isOpen" class="button font-mplus1-bold" @click="appState.isOpen = !appState.isOpen">野球記録表示</button>
  <button v-if="appState.isOpen" class="button font-mplus1-bold" @click="appState.isOpen = !appState.isOpen">野球記録非表示</button>
  <div v-if="appState.isOpen">
    <NPBCharts :npbStandings="npbStandings" />
    <template v-for="teams, index in npbStandings" :key="index">
      <NPBStandings :leagueName="leagueNames[index]" :teams="teams" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

import type { BaseballTeam } from '@/@types/BaseballTeam';

import NPBCharts from '@/components/NPBCharts.vue';
import NPBStandings from "@/components/NPBStandings.vue";

// セ・リーグ
const clRes = await fetch("https://npb-result.ant-npb.workers.dev/api/cl");
const clJson: BaseballTeam[] = await clRes.json();

// パ・リーグ
const pl = await fetch("https://npb-result.ant-npb.workers.dev/api/pl");
const plJson: BaseballTeam[] = await pl.json();

// オープン戦
const op = await fetch("https://npb-result.ant-npb.workers.dev/api/op");
let opJson: BaseballTeam[] = await op.json();
opJson.forEach((team: BaseballTeam) => { delete team.remainingGames; });


const npbStandings  = [clJson, plJson, opJson];
const leagueNames = ["セリーグ", "パリーグ", "オープン戦"];

const appState = reactive<{
  isOpen: boolean;
}>({
  isOpen: false,
});

</script>
