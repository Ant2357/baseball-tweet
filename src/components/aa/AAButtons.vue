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
        『{{ aa.label }}』を追加
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
  transition: all 235ms ease-in-out;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  cursor: pointer;
}

.aa-button:hover {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
  transform: translate3d(0, 2px, 0);
}

.aa-button:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
}

.aa-pre {
  font-family: "BlinkMacSystemFont";
  background-color: transparent;
}

</style>
