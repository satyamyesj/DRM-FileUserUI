<template>
  <div id="app">
   <div>
     <router-link to="/">Home</router-link>
     <router-link to="/fileUser">File_User</router-link>
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
