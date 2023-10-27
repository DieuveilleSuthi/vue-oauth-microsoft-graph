<template>
    <div>
      <h1>{{ Country }}</h1>
      <button @click="choisirPays">Choose</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ["pays"],
    methods: {
      choisirPays() {
        this.$emit("choose", this.pays);
      },
    },
  };
  </script>
  