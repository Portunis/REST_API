import { createRouter, createWebHistory } from 'vue-router'
import RickAndMortyList from '../views/RickAndMortyList.vue'
import RickAndMortyCharacter from '../views/RickAndMortyCharacter.vue'

const routes = [
  {
    path: '/',
    name: 'RickAndMortyList',
    component: RickAndMortyList
  },
  {
    path: '/character/:id',
    name: 'CharacterDetails',
    component: RickAndMortyCharacter
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
