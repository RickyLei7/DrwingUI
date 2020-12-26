<template>
  <div>
    Button Demo
  </div>
  <h1>Demo#1</h1>
  <div>
    <Button>Hello</Button>
    <Button drwing-theme="button">Hello</Button>
    <Button drwing-theme="link">Hello</Button>
    <Button drwing-theme="text">Hello</Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi');
    };
    return {onClick};
  }
};
</script>