<template>
    <div>
        <div class="character-block__image">
            <img :src="character.image" alt="character.image" @click="detailedInfo">
        </div>
       <div class="character-block__info">
            <span >
            {{ character.name }}
        </span>
           <span>
            {{ character.status }} - {{ character.species }}
        </span>
           <span>
            Last know location: {{ character.location.name}}
        </span>
       </div>
    </div>
</template>

<script>
    export default {
        name: "CharacterBlock",
        props: {
            character: {
                type: Object,
                required: true,
            }
       },
      methods: {
          detailedInfo(){
            this.$router.push({name: 'CharacterDetails', params:{id: this.character.id}})
          }
      }

    }
</script>

<style scoped>

</style>
