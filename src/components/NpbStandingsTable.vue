<template>
  <vue-good-table
    :columns="typeof standings[0] === 'undefined'
      ? []
      : Object.keys(standings[0]).map(labelName => {
          return {
            label: labelToJp[labelName],
            field: labelName,
            type: Number.isFinite(standings[0][labelName]) ? 'number' : 'string'
          }
        })"
    :rows="standings"
    theme="polar-bear"
  />
</template>

<script lang="ts">
// @ts-ignore
import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    standings: Object as PropType<{ [x: string]: string; }[]>,
  },
  components: {
    VueGoodTable,
  },
  setup() {
    const labelToJp = {
      rank: "順位",
      name: "球団名",
      play_game_count: "試合",
      win: "勝利",
      lose: "敗北",
      draw: "引分",
      pct: "勝率",
      games_behind: "勝差",
      remaining_games: "残試合",
      run: "得点",
      ra: "失点",
      hr: "本塁打",
      sb: "盗塁",
      avg: "打率",
      era: "防御率",
      pythagorean_expectation: "ピタゴラス勝率"
    };
    return {
      labelToJp
    }
  }
});
</script>
