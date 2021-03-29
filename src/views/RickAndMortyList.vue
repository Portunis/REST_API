<template>
  <div class="home">
    <p>Rick and morty</p>
    <div class="characters-list">
        <CharacterBlock
                v-for="character in characters"
                :key="character.id"
                :character="character"
        />

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
//import components
import CharacterBlock from "../components/CharacterBlock.vue";

//

export default {
  name: 'rick-and-morty-list',
  components: {
    CharacterBlock,

  },
  data(){
    return{
      currentPage: 1,
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
