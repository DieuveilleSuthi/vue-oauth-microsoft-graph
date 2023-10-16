<template>
  <div>
    <base-header />
    <HomePage />
    <base-footer />
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import baseFooter from './components/base-footer.vue';
import baseHeader from './components/base-header.vue';

export default {
  name: 'App',
  components: {
    baseHeader,
    HomePage,
    baseFooter
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  
}
</style>
