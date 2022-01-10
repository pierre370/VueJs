<template>
  <div id="app">
    <div id="nav">
      <header class="header">
        <h1 class="logo"><a href="#">Exercice VueJS</a></h1>
          <ul class="main-nav">
            <li><a><router-link to="/">Accueil</router-link></a></li>
            <li><a><router-link to="/categories">Catégories</router-link></a></li>
            <li><a><router-link to="/messages">Messages</router-link></a></li>
            <li><a><router-link to="/recherche">Recherche</router-link></a></li>
            <li><a><router-link to="/connexion">Connexion</router-link></a></li>
            <li><a><router-link to="/users">Inscription</router-link></a></li>
          </ul>
        </header>
    </div>
    <router-view/>


<!--    <Bonjour />-->
<!--    <Bonjour />-->
<!--    <Bonjour />-->
<!--    <Bonjour />-->
<!--    <Bonjour />-->


<!--    <ul>-->
<!--      <li v-for="(note, matiere) in notes" :key="matiere">-->
<!--        <Note :matiere="matiere" :note="note" />-->
<!--      </li>-->
<!--      <li>Moyenne des notes : {{ moyenneCalculee }}</li>-->
<!--      <li>-->
<!--        <Note matiere="Moyenne" :note="moyenneCalculee" />-->
<!--      </li>-->
<!--      <li v-if="moyenneCalculee > 10">Vous êtes admis</li>-->
<!--      <li v-else>Play again !</li>-->
<!--    </ul>-->

<!--    <input-text name="test" id="test" :required="true" class="form" label="Champ 1" />-->
<!--    <input-select-->
<!--        name="test"-->
<!--        id="test"-->
<!--        :required="false"-->
<!--        class="form"-->
<!--        label="Champ Select"-->
<!--        :donnees="donnees"-->

<!--    />-->

<!--    <input type="text" v-model.number="notes.Symfony">-->

  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {

    }
  },
  computed: {

  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  margin: 0;
  min-height: 100vh;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

h2,
h3,
a {
  color: #34495e;
}

a {
  text-decoration: none;
}
.logo {
  margin: 0;
  font-size: 1.45em;
}

.main-nav {
  margin-top: 5px;

}
.logo a,
.main-nav a {
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
}

.main-nav a {
  color: #34495e;
  font-size: .99em;
}
.main-nav a:hover {
  color: #718daa;
}
.header {
  padding-top: .5em;
  padding-bottom: .5em;
  border: 1px solid #a2a2a2;
  background-color: #9ad5cf;
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

@media (min-width: 769px) {
  .header,
  .main-nav {
    display: flex;
  }
  .header {
    flex-direction: column;
    align-items: center;
  }
  .header{
    width: 80%;
    margin: 0 auto;
    max-width: 1150px;
  }
}
@media (min-width: 1025px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
  }

}




</style>
