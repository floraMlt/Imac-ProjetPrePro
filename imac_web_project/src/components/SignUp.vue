<template>
  <div class="signUp">
      <h2>Inscription</h2>
      <Input title="Nom" type="text" name="nom" v-model:value="m_valueLastName" :verifInput="checkInput"/>
      <Input title="Prénom" type="text" name="prenom" v-model:value="m_valueFirstName" :verifInput="checkInput"/>
      <Input title="Email" type="email" name="email" v-model:value="m_valueEmail" :verifInput="checkInput"/>
      <Input title="Mot de passe" type="password" name="password" v-model:value="m_valuePassword" :verifInput="checkInput"/>
      <button v-on:click="goFormSignUp" id="button">S'inscrire</button>
  </div>
</template>

<script>

import Input from '@/components/Input.vue'

export default {
  name: 'SignUp',
  components:{
    Input
  },
  data() {
    return {
      m_valueLastName : "",
      m_valueFirstName : "",
      m_valueEmail : "",
      m_valuePassword : ""
    }
  },
  methods:{
    goFormSignUp() {
      this.checkInput(this.m_valueEmail)
      this.checkInput(this.m_valuePassword)
      this.checkInput(this.m_valueLastName)
      this.checkInput(this.m_valueFirstName)
      this.$router.push({name:'Dashboard'})
    },
    checkInput(value) {
      if(value != null && value != undefined && value != "") {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
h2 {
    margin-bottom: 2vh;
}
.signUp {
    display: flex;
    flex-direction: column;
    align-items: center;
}
#button {
    background-color: white;
    border: 1px solid rgba(119, 119, 119, 0.966);
    border-radius: 6px;
    margin-top: 1vh;
}
</style>