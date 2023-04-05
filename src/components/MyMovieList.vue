<template>
  <div class="cardContainer" v-if="store.loading == false">
        <MyFilmCard v-for="(card, index) in store.filmList" :title="card.title" :originalTitle="card.original_title" :language="card.original_language" :vote="card.vote_average" :trailer="card.overview" :image="'https://image.tmdb.org/t/p/w300' + card.poster_path"   :key="index"></MyFilmCard>
    </div>
    <div v-else>La pagina sta caricando</div>
   
</template>
<script>
import { store } from '../../store.js';
import MyFilmCard from './MyFilmCard.vue';
export default {
    name: 'MyMovieList',
    data() {
        return {
            store
        }
    },
    components: {
        MyFilmCard
    }

}




</script>
<style>
.cardContainer{
    display: flex;
flex-wrap: wrap;
justify-content: space-around;
}

</style>