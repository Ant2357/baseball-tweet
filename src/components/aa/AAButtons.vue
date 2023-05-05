<template>
  <div class="buttons">
    <button
      v-for="aa in aas" :key="aa.label"
      type="button"
      class="button is-small aa-button has-text-left"
      v-scroll-to="'#tweet-textarea'"
      @click="emit('addAA', aa.msg)"
    >
      <pre class="aa-pre">
        {{ aa.label }}
        {{ aa.msg }}
      </pre>
    </button>
  </div>
</template>

<script setup lang="ts">
import 'bulma/css/bulma.css';

interface Props {
  aas: { [x: string]: string; }[];
}

interface Emits {
  (event: "addAA", aa: string): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<style scoped>
.aa-button {
  white-space: pre-line;
  height: 100%;
  width: 100%;
}

.aa-pre {
  font-family: "BlinkMacSystemFont";
  background-color: transparent;
}

</style>
