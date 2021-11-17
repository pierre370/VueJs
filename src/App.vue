<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

    <Bonjour />
    <Bonjour />
    <Bonjour />
    <Bonjour />
    <Bonjour />


    <ul>
      <li v-for="(note, matiere) in notes" :key="matiere">
        <Note :matiere="matiere" :note="note" />
      </li>
      <li>Moyenne des notes : {{ moyenneCalculee }}</li>
      <li>
        <Note matiere="Moyenne" :note="moyenneCalculee" />
      </li>
      <li v-if="moyenneCalculee > 10">Vous êtes admis</li>
      <li v-else>Play again !</li>
    </ul>

    <input-text name="test" id="test" :required="true" class="form" label="Champ 1" />
    <input-select
        name="test"
        id="test"
        :required="false"
        class="form"
        label="Champ Select"
        :donnees="donnees"

    />

    <input type="text" v-model.number="notes.Symfony">

  </div>
</template>

<script>
import Bonjour from './components/Bonjour'
import Note from './components/Note'
import InputText from './components/formulaire/InputText'
import InputSelect from './components/formulaire/InputSelect'

export default {
  name: 'App',
  components: {
    InputText,
    InputSelect,
    Bonjour,
    Note
  },
  data: () => {
    return {
      donnees: [
        'Symfony',
        'PHP',
        'HTML',
        'CSS',
        'VueJS'
      ],
      notes: {
        'Symfony': 12,
        'Réseau': 14,
        'Intégration': 8,
        'Maths': 13,
        'Anglais': 12
      }
    }
  },
  computed: {
    moyenneCalculee () {
      let somme = 0
      for (let matiere in this.notes) {
        somme += this.notes[matiere]
      }
      return somme / Object.keys(this.notes).length
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
