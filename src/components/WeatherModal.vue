<template>
  <button
    type="button"
    class="button font-nicomoji"
    @click="openModal"
  >
    現在の天気
  </button>

  <teleport to="body">
    <div v-if="weatherModalState.isOpen" class="modal">
      <div class="modal-content box has-text-centered">

        <div class="columns is-multiline is-mobile">
          <div v-for="area in weatherState" :key="area.title" class="column">

            <div class="area-box font-nicomoji">
              <img :src="areaBaseballTeamLogo(area.title)" alt="球団ロゴ" class="is-inline-block image is-48x48" >
              <h3 class="subtitle">{{ area.title }}の天気</h3>
              <p>{{ area.forecasts[0].telop }}</p>
              <p><img :src="area.forecasts[0].image.url"></p>
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

<script setup lang="ts">
import { reactive } from 'vue';
import { useWeather } from '@/compositions/weather';

const areaBaseballTeamLogo = (areaName: string) => {
  switch (areaName) {
    case "東京":
      return require("@/assets/imgs/logo/npb/S.png");
    case "横浜":
      return require("@/assets/imgs/logo/npb/DB.png");
    case "千葉":
      return require("@/assets/imgs/logo/npb/M.png");
    case "さいたま":
      return require("@/assets/imgs/logo/npb/L.png");
    case "名古屋":
      return require("@/assets/imgs/logo/npb/D.png");
    case "大阪":
      return require("@/assets/imgs/logo/npb/Bs.png");
    case "広島":
      return require("@/assets/imgs/logo/npb/C.png");
    case "福岡":
      return require("@/assets/imgs/logo/npb/H.png");
    case "仙台":
      return require("@/assets/imgs/logo/npb/E.png");
    case "北広島":
      return require("@/assets/imgs/logo/npb/F.png");
    default:
      return require("@/assets/imgs/logo/npb/G.png");
  }
}

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
</script>

<style scoped>
.area-box {
  position: relative;
  white-space: nowrap;
  padding: 0.25em 1em;
}

.area-box:before,.area-box:after{ 
  content: '';
  width: 80%;
  height: 80%;
  position: absolute;
  display: inline-block;
}

.area-box:before{
  border-right: solid 1px #DBDBDB;
  border-top: solid 1px #DBDBDB;
  top: 0;
  right: 0;
}

.area-box:after{
  border-left: solid 1px #DBDBDB;
  border-bottom: solid 1px #DBDBDB;
  bottom: 0;
  left: 0;
}

</style>
