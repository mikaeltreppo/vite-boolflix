<template>
    <div class="cardContainer" v-if="store.loading == false">
          <MyFilmCard v-for="(card, index) in store.seriesList" :title="card.title" :originalTitle="card.original_name" :language="card.original_language" :trailer="card.overview" :vote="card.vote_average"  :image="'https://image.tmdb.org/t/p/w300' + card.poster_path"  :key="index"></MyFilmCard>
      </div>
      <div v-else>La pagina sta caricando</div>
     
  </template>
  <script>
  import { store } from '../../store.js';
  import MyFilmCard from './MyFilmCard.vue';
  export default {
      name: 'MySeriesList',
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
    background-color: rgb(67, 67, 67);
display: flex;
flex-wrap: wrap;
justify-content: space-between;
} 
</style>