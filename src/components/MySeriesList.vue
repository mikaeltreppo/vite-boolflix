<template>
    <div v-if="store.loading == false">
          <MyFilmCard v-for="(card, index) in store.seriesList" :title="card.title" :originalTitle="card.original_title" :language="card.original_language" :vote="card.vote_average"   :key="index"></MyFilmCard>
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
  <style></style>