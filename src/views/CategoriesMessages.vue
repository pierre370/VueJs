<template>
  <div class="about">
    <h4>Liste des messages de la catégorie : {{ categorie.libelle }}</h4>
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
    <article v-for="messages in categorie.message" :key="messages.id">
      <table>
      <tbody>
      <tr>
        <td>{{ messages.titre }}</td>
        <td>{{ moment(messages.date_publication).format('LLL') }}</td>
        <td>{{ messages.message }}</td>
        <td>{{ categorie.libelle}}</td>
        <td><input type="reset" value="❌"></td>
      </tr>
      </tbody>
      </table>
    </article>
  </div>

</template>


<script>

import {getCategorie} from '../api/categorie'
import moment from "moment";

export default {
  name: 'CategoriesMessages',
  data () {
    return {
      categorie: {}
    }
  },
  watch: {
    $route () {
      this.actualiseCategorie()
    }
  },
  async mounted () {
    this.actualiseCategorie()
  },
  methods: {
    moment(date) {
      moment.locale('FR');
      return moment(date);
    },
    async actualiseCategorie () {
      console.log(this.$route.params.id)
      this.categorie = await getCategorie(this.$route.params.id).then((response) => {
        return response.data
      })
    }
  }
}

</script>

<style>
html,
body {
  height: 100%;
}

body {
  margin: 0;
  background: linear-gradient(45deg, #49a09d, #5f2c82);
  font-family: sans-serif;
  font-weight: 100;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title {
  display: block;
  margin-left: auto;
  margin-right: auto
}

table {
  width: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
}
th,
td {
  padding: 15px;
  background-color: rgba(255,255,255,0.2);
  color: #fff;
}

.souli {
  text-decoration: underline whitesmoke;

}

th {
  text-align: left;
}

th {
  background-color: #55608f;
}

tr:hover {
   background-color: rgba(255,255,255,0.3);
 }
td {
  position: relative;
}
td:before {
   content: "";
   position: absolute;
   left: 0;
   right: 0;
   top: -9999px;
   bottom: -9999px;
   background-color: rgba(255,255,255,0.2);
   z-index: -1;
 }


.close.icon {
  color: #000;
  position: absolute;
  margin-top: 0;
  margin-left: 0;
  width: 21px;
  height: 21px;
}

.close.icon:before {
  content: '';
  position: absolute;
  top: 10px;
  width: 21px;
  height: 1px;
  background-color: currentColor;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.close.icon:after {
  content: '';
  position: absolute;
  top: 10px;
  width: 21px;
  height: 1px;
  background-color: currentColor;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}



</style>