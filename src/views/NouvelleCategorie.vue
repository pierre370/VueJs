<template>
  <div class="about">
    <h1>Création d'une catégorie</h1>
    <div v-if="confirm">
      Catégorie ajoutée avec succès !
    </div>
    <div>
      <label for="libelle">Libellé</label>
      <input type="text" name="libelle" v-model="libelle"  id="libelle"/>
    </div>
    <div>
      <label for="couleur">Couleur</label>
      <input type="text" name="couleur" v-model="couleur"  id="couleur"/>
    </div>
    <div><br>
      <button class="button" @click="ajoutCategorie">Ajouter</button>
    </div>

  </div>

</template>

<script>

import {postCategorie} from '../api/categorie'

export default {
  name: 'NouvellesCategorie',
  data () {
    return {
      couleur: '',
      libelle: '',
      confirm: false
    }
  },
  methods: {
    async ajoutCategorie() {
      await postCategorie({
        couleur: this.couleur,
        libelle: this.libelle
      }).then((reponse) => {
        console.log(reponse)
        this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/categories') //redirection
      })
    }
  }
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

