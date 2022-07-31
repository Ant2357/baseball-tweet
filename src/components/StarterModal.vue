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
      <div class="modal-content box has-text-centered font-mplus1-bold">

        <div class="columns is-multiline is-mobile">
          <div v-if="starterState.starters[0] === undefined" class="column is-full">
            <p>予告先発が公表されておりません。</p>
          </div>

          <div v-for="starter in starterState.starters" :key="starter.ballpark" class="column is-full">
            <div class="card">
              <div class="card-content starter-content">
                <p class="title">
                  {{ starter.ballpark }}
                </p>
                <p class="subtitle">
                  {{ starter.home_team_name }} VS {{ starter.away_team_name }}
                </p>
              </div>
              <div class="card-line"><span>〇</span>{{ starter.ballpark }}</div>
              <footer class="card-footer">
                <div class="card-footer-item footer-item">
                  <p class="footer-label">{{ starter.home_starter_name }}</p>
                </div>
                <div class="card-footer-item footer-item">
                  <p class="footer-label">{{ starter.away_starter_name }}</p>
                </div>
              </footer>
            </div>
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
.starter-content {
  padding: 1rem 1.5rem;;
}

.card-line {
  width: 100%;
  padding: 0;
  background-color: #1D7844;
  color: white;
}

.footer-item {
  padding: 0.5rem 0;
}
</style>