<template>
  <div class="charts">
    <template v-for="league, index in leagues" :key="index">
      <SavingsChart :title="`${league.name}の各球団の貯金(勝利数 - 敗北数)`" :teams="league.standings" class="chart" />
    </template>

    <template v-for="league, index in leagues" :key="index">
      <PythagenPatChart :title="`${league.name}の PythagenPat(ピタゴラス勝率の改善版)`" :teams="league.standings" class="chart" />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { League } from '@/@types/NPB';

import SavingsChart from '@/components/chart/SavingsChart.vue';
import PythagenPatChart from '@/components/chart/PythagenPatChart.vue';

interface Props {
  leagues: League[];
}
defineProps<Props>();
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
