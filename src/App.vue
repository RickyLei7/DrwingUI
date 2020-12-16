<template>
  <div>Nav |
    <router-link to="/">Ricky</router-link> |
    <router-link to="/ricky2">Ricky2</router-link>
  </div>
  <hr>
  <router-view/>

</template>

<script>
import Ricky from './components/Ricky.vue'

export default {
  name: 'App',
}
</script>
