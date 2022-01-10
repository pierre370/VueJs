<template>
  <div class="login">
    <div v-if="confirm">
       Inscription valider !
    </div>
    <h1>Inscription</h1>
    <form method="post" action="">
      <p><input type="text" name="nom" id="nom" value="" v-model="nom" placeholder="Nom"></p>
      <p><input type="text" name="prenom" id="prenom" value="" v-model="prenom" placeholder="Prénom"></p>
      <p><input type="text" name="email" value="" id="email"  v-model="email" placeholder="Email"></p>
      <p><input type="password" name="password" id="password" v-model="password" value="" placeholder="Mot de passe"></p>
      <p class="submit"><input type="submit"  @click="ajoutUser"  name="commit" value="Inscription"></p>
    </form>
  </div>
</template>

<script>
import {postUser} from '../api/categorie'

export default {
  name: 'users',
  data () {
    return {
      nom: '',
      prenom: '',
      email: '',
      password: '',
      confirm: false
    }
  },
  methods: {
    async ajoutUser() {
      await postUser({
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        password: this.password,
      }).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/') //redirection
      })
    }
  }
}
</script>

<style scoped>
.login {
  position: relative;
  margin: 30px auto;
  padding: 20px 20px 20px;
  width: 310px;
  background: white;
  border-radius: 3px;
}

.login:before {
  content: '';
  position: absolute;
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -8px;
  z-index: -1;
}

.login h1 {
  margin: -20px -20px 21px;
  line-height: 40px;
  font-size: 12px;
  font-weight: bold;
  color: #9EACB2;
  text-align: center;
  text-shadow: 0 1px white;
  border-radius: 3px 3px 0 0;
  background-image: -webkit-linear-gradient(top, whiteffd, #eef2f5);
  background-image: -moz-linear-gradient(top, whiteffd, #eef2f5);
  background-image: -o-linear-gradient(top, whiteffd, #eef2f5);
  background-image: linear-gradient(to bottom, whiteffd, #eef2f5);
  -webkit-box-shadow: 0 1px whitesmoke;
  box-shadow: 0 1px whitesmoke;
}
.login p {
  margin: 20px 0 0;
}

.login p:first-child {
  margin-top: 0;
}

.login input[type=text], .login input[type=password] {
  width: 278px;
}

.login p.remember_me {
  float: left;
  margin-left: 20px;
  line-height: 42px;
}

.login p.remember_me label {
  font-size: 12px;
  color: #9EACB2;
  cursor: pointer;
}

.login p.remember_me input {
  position: relative;
  bottom: 1px;
  margin-right: 4px;
  vertical-align: middle;
}
.login p.submit {
  text-align: right;
}

.login-help {
  margin: 20px 0;
  font-size: 11px;
  color: white;
  text-align: center;
  text-shadow: 0 1px #2a85a1;
}

.login-help a {
  color: #cce7fa;
  text-decoration: none;
}

.login-help a:hover {
  text-decoration: underline;
}
input {
  font-family: 'MONTSERRAT', Tahoma, Verdana, sans-serif;
  font-size: 12px;
}
input[type=text], input[type=password] {
  margin: 4px;
  padding: 0 10px;
  width: 200px;
  height: 46px;
  color: #404040;
  background: white;
  border: 2px solid;
  border-color: #9EACB2;
  border-radius: 4px;

}

input[type=text]:focus, input[type=password]:focus {
  border-color: #6EC3C7;
  outline-color: #6EC3C7;
  outline-offset: 2;
}

input[type=submit] {
  padding: 0 40px;
  height: 46px;
  font-size: 12px;
  color: #fff;
  text-shadow: none;
  background: #00B87F;
  border: 1px solid;
  border-color: #07A06D;
  border-radius: 4px;
}
input[type=submit]:active {
  background: #07A06D;
}

input[type=submit]:hover {
  background: #07A06D;
}


.lt-ie9 input[type=text], .lt-ie9 input[type=password] {
  line-height: 34px;
}

</style>