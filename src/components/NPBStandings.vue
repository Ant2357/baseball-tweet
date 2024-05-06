<template>
  <div class="field">
    <label class="label tag">{{ leagueName }}</label>
    <Vue3EasyDataTable
      :headers="headers"
      :items="items"
      multi-sort
      alternating
      border-cell
      class="npb-standings font-mplus1-bold"
    />
  </div>

</template>

<script setup lang="ts">
import 'bulma/css/bulma.css';

import type { BaseballTeam } from '@/@types/BaseballTeam';
import type { Header, Item } from "vue3-easy-data-table";

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


interface Props {
  leagueName: string,
  teams: BaseballTeam[];
}
const props = defineProps<Props>();

const teamKeys = Object.keys(props.teams[0]);

const enToJP: { [key: string]: string } = {
  id: "ID",
  rank: "順位",
  name: "球団名",
  playGameCount: "試合数",
  win: "勝",
  lose: "敗",
  draw: "引分",
  pct: "勝率",
  gamesBehind: "ゲーム差",
  remainingGames: "残り試合数",
  run: "得点",
  ra: "失点",
  hr: "本塁打",
  sb: "盗塁",
  avg: "打率",
  era: "防御率",
  e: "失策",
  pythagenPat: "PythagenPat"
}

const headers: Header[] = teamKeys.reduce((acc: Header[], key) => {
  return [...acc, { text: enToJP[key], value: key, sortable: true }];
}, []);
const items: Item[] = props.teams;

</script>

<style scoped>
.npb-standings {
  white-space: nowrap;
}
</style>