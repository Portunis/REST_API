import { createStore } from 'vuex'
import axiosInstance from '../api/index'; // api
import { CHARACTERS_BY_PAGE } from "../api/routers"; //{} - импорт const

export default createStore({
  state: {
    characters: {}, // объявили characters (объект)
    pages: 0
  },
  mutations: {
    setCharacters(state, {page, characters}){
      state.characters[page] = characters;
    },
    setPages(state, pages){
      state.pages = pages;
    }
  },
  actions: {
    fetchCharacters({ commit },page){ // получаем номер страницы
      return axiosInstance.get(CHARACTERS_BY_PAGE(page))
          .then(({data}) => {
            const {info, result} = data;
            commit('setCharacters', {page, characters: result});
            commit('setPages', info.pages);
          })
          .catch(err => console.log(err));
    }
  },
  getters:{
    getCharacterById: (state) => ({id, page}) =>{
      console.log(state, 'state');
      const pageCharacters = state.characters[page];
      if(pageCharacters){
        return pageCharacters.find(character => character.id === id)
      } return null
    },
    getCharactersByPage: (state) => (page) =>{
      const pageCharacters = state.characters[page];
      return pageCharacters;
    },
  },

})
