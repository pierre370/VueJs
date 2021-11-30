<template>
  <div class="about">
    <h1>Liste des catégories</h1>
    <ul>
      <li v-for="categorie in categories" :key="categorie.id">{{categorie.libelle}}</li>
    </ul>
  </div>
</template>

<script>
import {getCategories} from '../api/categorie'

export default {
  name: 'Categories',
  data () {
    return {
      categories: null
    }
  },
  async mounted () {
    this.categories = await getCategories().then((response) => {
      return response.data['hydra:member']
    })

  }
}

</script>
