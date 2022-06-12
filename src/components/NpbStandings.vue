<template>
  <p class="buttons">
    <button class="button" @click="openTableState.clIsOpen = !openTableState.clIsOpen">セ・リーグ順位表</button>
    <button class="button" @click="openTableState.plIsOpen = !openTableState.plIsOpen">パ・リーグ順位表</button>
    <button class="button" @click="openTableState.cpIsOpen = !openTableState.cpIsOpen">セ・パ交流戦順位表</button>
    <button class="button" @click="openTableState.opIsOpen = !openTableState.opIsOpen">オープン戦順位表</button>
  </p>

  <div v-if="openTableState.clIsOpen">
    <NpbStandingsTable
      :standings="standingsState.cl"
    />
    <NpbStandingsChart
      :datas="standingsState.cl"
    />
  </div>

  <div v-if="openTableState.plIsOpen">
    <NpbStandingsTable
      :standings="standingsState.pl"
    />
    <NpbStandingsChart
      :datas="standingsState.pl"
    />
  </div>

  <div v-if="openTableState.cpIsOpen">
    <NpbStandingsTable
      :standings="standingsState.cp"
    />
    <NpbStandingsChart
      :datas="standingsState.cp"
    />
  </div>

  <div v-if="openTableState.opIsOpen">
    <NpbStandingsTable
      :standings="standingsState.op"
    />
    <NpbStandingsChart
      :datas="standingsState.op"
    />
  </div>

</template>

<script lang="ts">
import { StandingsState } from '@/compositions/standings'
import NpbStandingsTable from '@/components/NpbStandingsTable.vue'
import NpbStandingsChart from '@/components/NpbStandingsChart.vue'
import { defineComponent, PropType, reactive } from 'vue';

export default defineComponent({
  props: {
    standingsState: Object as PropType<StandingsState>,
  },
  components: {
    NpbStandingsTable,
    NpbStandingsChart
  },
  setup() {
    const openTableState = reactive<{
      clIsOpen: boolean,
      plIsOpen: boolean,
      cpIsOpen: boolean,
      opIsOpen: boolean
    }>({
      clIsOpen: false,
      plIsOpen: false,
      cpIsOpen: false,
      opIsOpen: false
    });

    return {
      openTableState
    }
  }
});
</script>
