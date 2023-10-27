<template>
    <nav class="navbar sticky-top navbar-expand-lg">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">HOME</router-link>
        <button class="navbar-toggler" type="button" @click="toggleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" :class="{ 'show': isNavbarOpen }">
          <ul class="navbar-nav d-flex w-50">
            <li class="nav-item dropdown" v-for="(item, index) in menuItems" :key="index">
              <a class="nav-link dropdown-toggle" @click="toggleDropdown(index)" :class="{ 'show': isDropdownOpen[index] }">{{ item.label }}</a>
              <ul class="dropdown-menu" :class="{ 'show': isDropdownOpen[index] }">
                <li v-for="(action, actionIndex) in item.actions" :key="actionIndex">
                  <a class="dropdown-item" href="#">{{ action }}</a>
                </li>
              </ul>
            </li>
            <li class="nav-item"><router-link to="/conversations">Conversations</router-link></li>
          </ul>
          <ul class="navbar-nav d-flex align-items-center flex-row-reverse w-50">
            <li class="nav-item"><SigninButton>Click Me</SigninButton></li>
            <form class="nav-item d-flex w-50" role="search">
              <input class="form-control me-2" type="search" placeholder="Write here.." aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import SigninButton from '../components/SigninButton.vue';
  
  export default {
    name: 'BaseHeader',
    components: {
      SigninButton
    },
    data() {
      return {
        isNavbarOpen: false,
        isDropdownOpen: new Array(3).fill(false), // Assuming you have 3 dropdowns
        menuItems: [
          {
            label: 'Collections',
            actions: ['Action 1', 'Action 2']
          },
          {
            label: 'Equipment',
            actions: ['Action 1', 'Action 2']
          },
          {
            label: 'Latest news',
            actions: ['Action 1', 'Action 2']
          }
        ]
      }
    },
    methods: {
      toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen;
      },
      toggleDropdown(index) {
        this.isDropdownOpen[index] = !this.isDropdownOpen[index];
      }
    }
  }
  </script>
  
  <style scoped>
  /* Your CSS styles remain the same */
  </style>
  