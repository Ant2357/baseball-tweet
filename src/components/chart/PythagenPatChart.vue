<template>
  <Bar :data="data" :options="options"/>
</template>

<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js';
import type { BaseballTeam } from '@/@types/BaseballTeam';

import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface Props {
  teams: BaseballTeam[];
}
const props = defineProps<Props>();

const data: ChartData<"bar"> = {
  labels: props.teams.map(team => team.name),
  datasets: [
    {
      label: '勝率',
      data: props.teams.map(team => team.pct),
      backgroundColor: 'rgb(154,208,245)',
      borderWidth: 1
    },
    {
      label: 'PythagenPat(ピタゴラス勝率の改善版)',
      data: props.teams.map(team => team.pythagenPat),
      backgroundColor: 'rgb(255,177,193)',
      borderWidth: 1
    }
  ]
} 

const options: ChartOptions<'bar'> = { 
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: '各球団の勝率と PythagenPat(ピタゴラス勝率の改善版)'
    }
  }
}

</script>
