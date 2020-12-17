<template>
  <div class="topNav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>Menu#1</li>
      <li>Menu#2</li>
    </ul>
    <span class="toggleAside"></span>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleMenu};
  }
};
</script>
<style lang="scss" scoped>
.topNav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside{}
  @media (max-width: 500px) {
    > .menu{display: none}
    > .logo{margin: 0 auto;}
  }
}
</style>