import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recherche from '../views/Recherche.vue'
import Categories from '../views/Categories.vue'
import Messages from '../views/Messages.vue'
import CategorieMessages from '../views/CategoriesMessages'
import NouvelleCategorie from '../views/NouvelleCategorie'
import NouveauMessage from "../views/NouveauMessage";
import  Login from "../views/Login";
import register from "../views/register";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nouvelle-categorie',
    name: 'nouvelle-categorie',
    component: NouvelleCategorie
  },
  {
    path: '/nouveau-message',
    name: 'nouveau-message',
    component: NouveauMessage
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: Login
  },
  {
    path: '/users',
    name: 'users',
    component: register
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    children: [
      {
        path: ':id',
        name: 'categorie_messages',
        component: CategorieMessages
      }
    ]
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/recherche',
    name: 'Recherche',
    component: Recherche
  },
  {
    path: '/a-propos',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
