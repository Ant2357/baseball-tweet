<template>
  <button v-if="!appState.isOpen" class="button font-mplus1-bold" @click="appState.isOpen = !appState.isOpen">野球記録表示</button>
  <button v-if="appState.isOpen" class="button font-mplus1-bold" @click="appState.isOpen = !appState.isOpen">野球記録非表示</button>
  <div v-if="appState.isOpen">
    <NPBCharts :leagues="npbLeagues" />
    <template v-for="league, index in npbLeagues" :key="index">
      <NPBStandings :league="league" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

import type { BaseballTeam, League } from '@/@types/NPB';

import NPBCharts from '@/components/NPBCharts.vue';
import NPBStandings from "@/components/NPBStandings.vue";

// セ・リーグ
const clRes = await fetch("https://npb-result.ant-npb.workers.dev/api/cl");
const clJson: BaseballTeam[] = await clRes.json();

// パ・リーグ
const pl = await fetch("https://npb-result.ant-npb.workers.dev/api/pl");
const plJson: BaseballTeam[] = await pl.json();

// セ・パ交流戦
const cp = await fetch("https://npb-result.ant-npb.workers.dev/api/cp");
const cpJson: BaseballTeam[] = await cp.json();

// オープン戦
const op = await fetch("https://npb-result.ant-npb.workers.dev/api/op");
let opJson: BaseballTeam[] = await op.json();
opJson.forEach((team: BaseballTeam) => { delete team.remainingGames; });

// NPB全リーグ
const npbLeagues: League[] = [
  {
    name: "セリーグ",
    standings : clJson
  },
  {
    name: "パリーグ",
    standings : plJson
  },
  {
    name: "セ・パ交流戦",
    standings : cpJson
  },
  {
    name: "オープン戦",
    standings : opJson
  }
];

const appState = reactive<{
  isOpen: boolean;
}>({
  isOpen: false,
});

</script>
