<template>
  <div>
    <div class="dialog-overlay"></div>
    <div class="dialog-wrapper">
      <header>Title</header>
      <main>
        <p>First line text</p>
        <p>Second line text</p>
      </main>
      <footer>
        <Button>Ok</Button>
        <Button>Cancel</Button>
      </footer>
    </div>
  </div>
</template>
<script lang="ts">
import Button from './Button.vue';

export default {
  components: {Button}
};
</script>