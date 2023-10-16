<!-- BaseLayout.vue -->
<template>
    <div>
      <header id="head">
            <span id="navbar">
            
                <div class="home"> 🏠 Home</div>

                <div class="log"> 👤 Not yet logged in</div>
            </span>
      </header>
      <main>
        <slot></slot> <!-- Render content passed to the slot -->
      </main>
      <footer class="footer">
        <p>This work is protected by international laws | 2023 | Dieuveille Suthi et Franck</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseLayout',
  };
  </script>
  
  <style>
    #navbar {
        display: flex;
        justify-content: space-between;
        margin:0;
        background-color: green;
        color: black;
        padding: 10px;
    }
    .footer {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
    font-size: 14px;
    margin: 0;
    
  }
  </style>
  