<template>

  <router-view/>
</template>

<style>
#app {
  text-align: center;
  color: #525558;
  scroll-behavior: smooth;
  
}
*{
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #525558;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #728ab9;
}
</style>
