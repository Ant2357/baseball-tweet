<template>
  <div>TODO: 順位表のレイアウト</div>

  <p class="buttons">
    <button class="button" @click="openTableState.clIsOpen = !openTableState.clIsOpen">セ・リーグ順位表</button>
    <button class="button" @click="openTableState.plIsOpen = !openTableState.plIsOpen">パ・リーグ順位表</button>
    <button class="button" @click="openTableState.cpIsOpen = !openTableState.cpIsOpen">セ・パ交流戦順位表</button>
    <button class="button" @click="openTableState.opIsOpen = !openTableState.opIsOpen">オープン戦順位表</button>
  </p>

  <NpbStandingsTable
    v-if="openTableState.clIsOpen"
    :standings="standingsState.cl"
  />

  <NpbStandingsTable
    v-if="openTableState.plIsOpen"
    :standings="standingsState.pl"
  />

  <NpbStandingsTable
    v-if="openTableState.cpIsOpen"
    :standings="standingsState.cp"
  />

  <NpbStandingsTable
    v-if="openTableState.opIsOpen"
    :standings="standingsState.op"
  />
</template>

<script lang="ts">
import { StandingsState } from '@/compositions/standings'
import NpbStandingsTable from '@/components/NpbStandingsTable.vue'
import { defineComponent, PropType, reactive } from 'vue';

export default defineComponent({
  props: {
    standingsState: Object as PropType<StandingsState>,
  },
  components: {
    NpbStandingsTable
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
