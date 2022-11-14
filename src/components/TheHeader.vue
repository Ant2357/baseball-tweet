<template>
  <nav class="navbar header has-shadow" role="navigation" aria-label="main navigation">
    <div class="container">

      <div class="navbar-brand">

        <a class="navbar-item" href="https://ant2357.github.io/baseball-tweet/">
          <span class="title is-5 font-nicomoji has-text-white">野球用ツイート画面</span>
        </a>

        <div
          class="navbar-burger header-burger-color"
          data-target="navbar-menu"
          @click="updateIsOpen(!headerState.isOpen)"
          :class="{ 'is-active': headerState.isOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      <div class="navbar-menu" id="navbar-menu" :class="{ 'is-active': headerState.isOpen }">

        <div class="navbar-end">
          <a class="navbar-item header-item font-nicomoji header-color-accent" href="https://ant2357.github.io/ant-blog/#/posts">
            <font-awesome-icon :icon="['fas', 'blog']" /><span class="ml-1">Antのブログらしきもの</span>
          </a>
          <a class="navbar-item header-item font-nicomoji" href="https://github.com/Ant2357">
            <font-awesome-icon :icon="['fab', 'github']" /><span class="ml-1">GitHub</span>
          </a>
        </div>

      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  setup() {
    const headerState = reactive<{ isOpen: boolean }>({ isOpen: false });
    const updateIsOpen = (now: boolean): void => {
      headerState.isOpen = now
    };

    return {
      headerState,
      updateIsOpen
    };
  }
});
</script>

<style scoped>
.header {
  background-color: #252525;
  color: white;
}
.header-burger-color {
  color: white;
}

.header-item  {
  color: white;
}
.header-item:hover, .header-item:active, .header-item:focus {
  background-color: gray;
  color: white;
}

.header-color-accent  {
  color: #ffe08a;
}

@media (max-width:1023px) {
  .header-item  {
    background-color: white;
    color: black;
  }
}
</style>