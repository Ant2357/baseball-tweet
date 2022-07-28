<template>
  <button
    type="button"
    class="button"
    @click="openModal"
  >
    予告先発
  </button>

  <teleport to="body">
    <div v-if="starterModalState.isOpen" class="modal">
      <div class="modal-content box has-text-centered">

        <div class="columns is-multiline is-mobile">
          <div v-for="starter in starterState.starters" :key="starter.ballpark" class="column">
            {{ starter }}
          </div>
        </div>

        <button
          type="button"
          class="button is-danger"
          aria-label="close"
          @click="closeModal"
        >
          閉じる
        </button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useStarter } from '@/compositions/starter';

export default defineComponent({
  setup() {
    const starterModalState = reactive<{ isOpen: boolean }>({
      isOpen: false
    });
    const openModal = (): void => {
      starterModalState.isOpen = true;
    }
    const closeModal = (): void => {
      starterModalState.isOpen = false;
    }

    // 天気情報
    const { starterState } = useStarter();

    return {
      // State
      starterModalState,
      starterState,
      // Function
      openModal,
      closeModal
    };
  }
});
</script>

<style scoped>
.weather-title {
  white-space: nowrap;
}
</style>