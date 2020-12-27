<template>
  <div>
    Button Demo
  </div>
  <h1>Demo#1</h1>
  <div>
    <Button>Hello</Button>
    <Button theme="button">Hello</Button>
    <Button theme="link">Hello</Button>
    <Button theme="text">Hello</Button>
  </div>
  <h1>Demo#2</h1>
  <div>
    <Button size="big">BigBig</Button>
    <Button>Normal</Button>
    <Button size="small">SmallSmall</Button>
  </div>
  <div>
    <Button theme="link" size="big">BigBig</Button>
    <Button theme="link">Normal</Button>
    <Button theme="link" size="small">SmallSmall</Button>
  </div>
  <div>
    <Button theme="text" size="big">BigBig</Button>
    <Button theme="text">Normal</Button>
    <Button theme="text" size="small">SmallSmall</Button>
  </div>
  <h1>Demo#3</h1>
  <div>
    <Button loading>Loading</Button>
    <Button>Loaded</Button>
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