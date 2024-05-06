<template>
  <div class="charts">
    <template v-for="league, index in npbStandings" :key="index">
      <SavingsChart :teams="league" class="chart" />
    </template>

    <template v-for="league, index in npbStandings" :key="index">
      <PythagenPatChart :teams="league" class="chart" />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { BaseballTeam } from '@/@types/BaseballTeam';

import SavingsChart from '@/components/chart/SavingsChart.vue';
import PythagenPatChart from '@/components/chart/PythagenPatChart.vue';

interface Props {
  npbStandings: BaseballTeam[][];
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
