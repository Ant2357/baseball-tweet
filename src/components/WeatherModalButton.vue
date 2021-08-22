<template>
  <button
    type="button"
    class="button"
    @click="openModal"
  >
    現在の天気
  </button>

  <teleport to="body">
    <div v-if="weatherModalState.isOpen" class="modal">
      <div class="modal-content box w-30 h-50">

        <div class="is-flex">
          <div v-for="area in weatherState" :key="area.title" class="has-text-centered p-2">
            <h3 class="subtitle">{{ area.title.split(" ").slice(1).join("") }}</h3>
            <p>{{ area.forecasts[0].telop }}</p>
            <p><img :src="area.forecasts[0].image.url"></p>
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
import { useWeather } from '@/compositions/weather';

export default defineComponent({
  setup() {
    const weatherModalState = reactive<{ isOpen: boolean }>({
      isOpen: false
    });
    const openModal = (): void => {
      weatherModalState.isOpen = true;
    }
    const closeModal = (): void => {
      weatherModalState.isOpen = false;
    }

    // 天気情報
    const { weatherState } = useWeather();

    return {
      // State
      weatherModalState,
      weatherState,
      // Function
      openModal,
      closeModal
    };
  }
});
</script>