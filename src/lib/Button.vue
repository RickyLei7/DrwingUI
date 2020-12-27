<template>
  <button class="drwing-button" :class="classes">
    <span v-if="loading" class="drwing-loadingIndicator"></span>
    <slot/>
  </button>
</template>
<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {theme, size} = props;
    const classes = computed(() => {
      return {
        [`drwing-theme-${theme}`]: theme,
        [`drwing-size-${size}`]: size,
      };
    });
    return {classes};
  }
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9d;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.drwing-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.drwing-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover,
    &:focus {
      color: lighten($blue, 10%)
    }
  }

  &.drwing-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.drwing-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.drwing-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
}
.drwing-loadingIndicator{
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-right: 4px;
  border-radius: 8px;
  border-color: $blue $blue $blue transparent;
  border-style: solid;
  border-width: 2px;
  animation: drwing-spin 2s infinite linear;
}
@keyframes drwing-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>