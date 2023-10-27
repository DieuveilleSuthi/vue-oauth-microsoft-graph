<template>
  <div>
    <base-layout>
        <div>
            <HomePage />
        </div>
    </base-layout>
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue';
//import baseFooter from './components/base-footer.vue';
//import baseHeader from './components/base-header.vue';
import BaseLayout from './components/base-layout.vue';

export default {
  name: 'App',
  components: {
    //baseHeader,
    HomePage,
    //baseFooter,
    BaseLayout
},
computed: {
    user() {
      return this.$store.state.user;
    },
  },
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
