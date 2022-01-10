<template>
  <div class="about">
    <h1>Création d'un message</h1>
    <div v-if="confirm">
      Message ajoutée avec succès !
    </div>
    <div>
      <label for="titre">Titre</label>
      <input type="text" name="titre" v-model="titre"  id="titre"/>
    </div>
    <div>
      <label for="message">Message</label>
      <input type="text" name="message" v-model="message"  id="message"/>
    </div>
    <div>
      <label for="categorie">Categorie</label>
      <input type="textarea" name="categorie" v-model="categorie"  id="categorie"/>
    </div>
    <div><br>
      <button class="button" @click="ajoutMessage">Ajouter</button>
    </div>

  </div>

</template>

<script>

import {postMessage} from '../api/categorie'

export default {
  name: 'NouveauMessage',
  data () {
    return {
      titre: '',
      message: '',
      categories_id: 1,
      confirm: false
    }
  },
  methods: {
    async ajoutMessage() {
      await postMessage({
        titre: this.titre,
        message: this.message,
        categories_id: this.categories_id,
      }).then((reponse) => {
        console.log(reponse)
        this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/messages') //redirection
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

</style>
