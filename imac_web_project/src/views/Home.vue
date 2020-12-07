<template>
  <div class="home">
      <h1>Page d'accueil</h1>
      <button v-on:click="goAuth">Accéder au service</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods:{
    goAuth() {
        this.$router.push({name:'Auth'})
    }
  }
}
</script>

<style scoped>

</style>