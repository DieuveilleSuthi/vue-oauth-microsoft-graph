<!-- Navbar.vue -->
<template>
    <header id="head">
      
        <span id="navbar">
        
            <div class="home"> 🏠 Home</div>

            <div class="log"> 👤 Not yet logged in</div>
          

        </span>
      
  </header>
  </template>

export default {
    name: 'base-header',
  };
  
  <style scoped>
  /* Styles pour la barre de navigation */
  #navbar {
    display: flex;
    justify-content: space-between;
    margin:0;
    background-color: green;
    color: black;
    padding: 10px;
  }


  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: green;
    color: black;
    padding: 10px 0;
  }

  #head{
    margin:none;
  }
  </style>
  