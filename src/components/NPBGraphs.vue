<template>
  <button v-if="!appState.isOpen" class="button font-mplus1-bold" @click="appState.isOpen = !appState.isOpen">貯金記録表示</button>
  <button v-if="appState.isOpen" class="button font-mplus1-bold" @click="appState.isOpen = !appState.isOpen">貯金記録非表示</button>
  <div class="charts" v-if="appState.isOpen">
    <template v-for="league, index in npbStandings" :key="index">
      <SavingsChart :teams="league" class="chart" />
    </template>

    <template v-for="league, index in npbStandings" :key="index">
      <PythagenPatChart :teams="league" class="chart" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

import SavingsChart from '@/components/chart/SavingsChart.vue';
import PythagenPatChart from '@/components/chart/PythagenPatChart.vue';

// セ・リーグ
const clRes = await fetch("https://npb-result.ant-npb.workers.dev/api/cl");
const clJson = await clRes.json();

// パ・リーグ
const pl = await fetch("https://npb-result.ant-npb.workers.dev/api/pl");
const plJson = await pl.json();

// オープン戦
const op = await fetch("https://npb-result.ant-npb.workers.dev/api/op");
const opJson = await op.json();

const npbStandings = [clJson, plJson, opJson];

const appState = reactive<{
  isOpen: boolean;
}>({
  isOpen: false,
});

</script>

<style scoped>
.charts {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
}

.chart {
  max-width: 1000px;
  max-height: 600px;
}

</style>
