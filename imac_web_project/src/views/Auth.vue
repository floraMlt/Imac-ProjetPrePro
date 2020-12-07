<template>
  <div class="Auth">
      <router-link to="/" id="home">Accueil</router-link>
      <h1>Page d'authentification</h1>
      <div id="authForms">
        <SignUp class="sign"/>
        <SignIn class="sign"/>
      </div>
  </div>
</template>

<script>

import SignUp from '@/components/SignUp.vue'
import SignIn from '@/components/SignIn.vue'

export default {
  name: 'Auth',
  components: {
    SignUp,
    SignIn
  }
}
</script>

<style scoped>
h1 {
  margin-top: 7vh;
}
#authForms {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 15vh;
}
#home {
  display: flex;
  justify-self: self-start;
  margin-top: 3vh;
}
.sign {
  margin: 0 5vw;
}
</style>