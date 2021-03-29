<template>
    <div>
        <div>
            <img :src="character.image" alt="character.image">
        </div>
       <div>
            <span>
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
       }

    }
</script>

<style scoped>

</style>