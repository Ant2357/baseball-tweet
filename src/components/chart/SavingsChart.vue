<template>
  <Bar :data="data" :options="options"/>
</template>

<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js';
import type { BaseballTeam } from '@/@types/NPB';

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
  title: string;
  teams: BaseballTeam[];
}
const props = defineProps<Props>();

const data: ChartData<"bar"> = {
  labels: props.teams.map(team => team.name),
  datasets: [
    {
      label: '貯金',
      data: props.teams.map(team => team.win - team.lose),
      backgroundColor: 'rgb(154,208,245)',
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
      text: props.title
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const label = context.parsed.y >= 0 ? "貯金" : "借金";
          const value = context.parsed.y >= 0 ? context.parsed.y : -context.parsed.y;
          return `${label}: ${value}`;
        }
      }
    }
  }
}

</script>
