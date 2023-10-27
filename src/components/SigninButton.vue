<template>
    <div>
      <button @click="signIn">Sign In</button>
      <div v-if="user">
        <p>Welcome {{ user.name }}!</p>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue'; // Import ref and onMounted
  
  import { signInAndGetUser } from '../lib/microsoftGraph';
  
  export default {
    setup() {
      const user = ref(null); // Define a reactive user variable
  
      const signIn = async () => {
        try {
          const userData = await signInAndGetUser();
          user.value = userData;
        } catch (error) {
          console.error('Sign-in error:', error);
        }
      };
  
      onMounted(() => {
        // You can perform any setup or initialization here
      });
  
      return {
        user,
        signIn,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles here */
  </style>
  