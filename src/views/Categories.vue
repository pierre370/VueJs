<template>
  <div class="about">
    <h1>Liste des catégories</h1>
    <div>
      <button class="button"><router-link  to="/nouvelle-categorie">Nouvelle catégorie</router-link></button>
    </div><br><br>
    <ul>
      <li v-for="categorie in categories" :key="categorie.id">
        <router-link :to="{name:'categorie_messages', params: {id: categorie.id}}">
            <table>
              <thead>
              <tr>
                <th  v-bind:class="[categorie]"> {{categorie.libelle}}</th>
              </tr>
              </thead>
            </table>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import {getCategories} from '../api/categorie'

export default {
  name: 'Categories',
  data () {
    return {
      couleur: 'red',
      categories: null
    }
  },
  async mounted () {
    this.categories = await getCategories().then((response) => {
      return response
    })
  },
}

</script>

<style>
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  background-color: #c9d2d5;
  border-radius: 8px;
}
.button:hover {
  background-color: #5f7177;
}

table {
  margin-left: auto;
  margin-right: auto;
  width: 6em
}
</style>
