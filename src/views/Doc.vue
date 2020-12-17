<template>
  <div>
    <TopNav/>
    <div class="content">
      <aside v-if="asideVisible">
        <h3>Components List</h3>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch Component</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button Component</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog Component</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs Component</router-link>
          </li>
        </ol>
      </aside>
      <main>Content</main>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {TopNav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  }
};
</script>

<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 180px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 16px 16px;

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>