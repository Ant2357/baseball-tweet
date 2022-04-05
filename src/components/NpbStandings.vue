<template>
  <div>TODO: 順位表のレイアウト</div>

  <vue-good-table
    :columns="typeof standings[0] === 'undefined'
      ? []
      : Object.keys(standings[0]).map(labelName => {
          return {
            label: labelName,
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
    columns: Object as PropType<{ [x: string]: string; }[]>
  },
  components: {
    VueGoodTable,
  },
  setup() {
    return {}
  }
});
</script>
