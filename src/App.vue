<template>
  <div id="app">
   <div>
     <router-link to="/">Login</router-link>
     <router-link to="/fileUserRegistration">Register</router-link>
     <router-link to="/home">Home</router-link>
   </div>
   <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
