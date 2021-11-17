<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

    <ul>
      <li v-for="(note, matiere) in notes" :key="matiere">Note sur {{matiere}} : {{ note }}</li>
    <li>Moyenne des notes : {{ moyenneCalculee }}</li>
      <li v-if="moyenneCalculee >10">Vous êtes admis</li>
      <li v-else>Play again !</li>
    </ul>

  <input type="text" v-model.number="notes.Symfony">

  </div>
</template>

<script>
  export default {
    name: 'App',
    data: () => {
      return {
        notes: {
          "Symfony": 12,
          "Réseau": 14,
          "Intégration": 8,
          "Maths": 13,
          "Anglais": 12
        }
      }
    },
    computed: {
      moyenneCalculee() {
        let somme = 0;
        for (let matiere in this.notes) {
          somme += this.notes[matiere];
        }
        return somme / Object.keys(this.notes).length;
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
