<template>
  <div class="layout">
    <TopNav class="nav"/>
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
      <main>
        <router-view/>
      </main>
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
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 180px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    background: lightgreen;
  }
}

aside {
  background: lightblue;
  width: 180px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 16px 16px;
  height: 100%;

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 4px 0;
    }
  }

  main {
    overflow: auto;
  }
}
</style>

