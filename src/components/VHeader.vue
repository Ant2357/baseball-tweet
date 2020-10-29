<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="https://ant2357.github.io/baseball-tweet/">野球用画面</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="https://ant2357.github.io/ant-blog/#/posts"><font-awesome-icon :icon="['fas', 'blog']" /> Antのブログらしきもの</b-nav-item>
        <b-nav-item to="https://github.com/Ant2357"><font-awesome-icon :icon="['fab', 'github']" /> GitHub</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VFooter extends Vue {
}
</script>