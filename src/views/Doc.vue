<template>
  <div>
    <TopNav/>
    <div class="content">
      <aside>Aside</aside>
      <main>Content</main>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from "../components/TopNav.vue"

export default {
  components: {TopNav}
}
</script>