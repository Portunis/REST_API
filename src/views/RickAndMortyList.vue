<template>
  <div class="home">
    <p>Rick and morty</p>
    <CharacterBlock
            v-for="character in characters"
            :key="character.id"
            :character="character"
    />
  </div>
</template>

<script>
// @ is an alias to /src
//import components
import CharacterBlock from "../components/CharacterBlock";
//

export default {
  name: 'rick-and-morty-list',
  components: {
    CharacterBlock
  },
  data(){
    return{
      currentPage: 2,
    }
  },
  created() {
    this.$store.dispatch('fetchCharacters', this.currentPage);
  },
  computed: {
   characters(){
     return this.$store.getters['getCharactersByPage'](this.currentPage);
   },
  },
}
</script>
