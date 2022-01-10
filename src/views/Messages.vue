<template>
  <div class="about">
    <h1>Liste des messages</h1>
    <div>
      <button class="button"><router-link  to="/nouveau-message">Nouveaux message</router-link></button>
    </div><br><br>
    <table>
      <tbody>
      <tr class="souli">
        <td>Titre</td>
        <td>Date de publication</td>
        <td>Message</td>
        <td>Catégorie</td>
        <td>Action</td>
      </tr>
      </tbody>
    </table>
    <ul>
      <li v-for="message in messages" :key="message.id">
          <table>
            <thead>
            <tr>
              <th>{{message.titre}}</th>
              <th>{{moment(message.date_publication).format('LLL') }}</th>
              <th>{{ message.message }}</th>
              <th></th>
              <th></th>
              <th></th>
              <th><input type="reset" value="❌"></th>
            </tr>
            </thead>
          </table>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import {getCategorie, getMessages, deleteMessage} from '../api/categorie'
import moment from "moment";

export default {
  name: 'Messages',
  data () {
    return {
      messages: null
    }
  },
  async mounted () {
    this.messages = await getMessages().then((response) => {
      return response
    })

  },

  methods: {
    moment(date) {
      moment.locale('FR');
      return moment(date);
    },
    async actualiseCategorie () {
      console.log(this.$route.params.id)
      this.categorie = await getCategorie(this.$route.params.id).then((response) => {
        return response.data['hydra:member']
      })
    },
    async deleteMessage() {
      await deleteMessage({
        id: this.id,
      }).then((reponse) => {
        console.log(reponse)
        this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/messages') //redirection
      })
    }
  }
}

</script>