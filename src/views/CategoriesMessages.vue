<template>
  <div class="about">
    <h1>Liste des messages de la catégorie : {{  categorie.libelle }}</h1>
    <p>{{ categorie }}</p>
  </div>
</template>

<script>

import {getCategorie} from '../api/categorie'

export default {
  name: 'CategoriesMessages',
  data () {
    return {
      categorie: {}
    }
  },
  watch: {
    $route() {
      this.actualiseCategorie()
    }
  },
  async mounted() {
    this.actualiseCategorie()
  },
  methods: {
    async actualiseCategorie() {
      console.log(this.$route.params.id)
      this.categorie = await getCategorie(this.$route.params.id).then((response) => {
        return response.data
      })
    }
  }
}

</script>
