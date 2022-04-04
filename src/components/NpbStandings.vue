<template>
  <div>TODO: 順位表のレイアウト</div>
  <p>{{ standings }} </p>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    standings: Object as PropType<{ [x: string]: string; }[]>
  },
  setup() {
    return {}
  }
});
</script>
