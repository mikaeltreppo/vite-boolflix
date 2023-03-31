<script>
import axios from 'axios';
import { store } from '../store.js';
import MyMovieList from './components/MyMovieList.vue';

export default {
  return: {
    data() {
      store
    }
  },
  methods: {
    getMovie() {
      store.loading = true;
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=e5909ae0f4f96e86e199022bd90ac5cf&query=r')
        .then(response => {
          store.filmList = response.data.results;
          //stampato per prova il nome del film con esito positivo
          console.log(store.filmList[0].title);
          console.log(store.filmList[0].release_date);
          console.log(store.filmList[0].popularity);
          //fine stampa di prova
          store.loading = false;
        });
    }
  },
  components:{
    MyMovieList
  },
  created() {
    this.getMovie();
  },
}
</script>

<template>

  <div class="searchPart">
    <input type="text" placeholder="Search In Our Database">

  </div>

 <MyMovieList />


</template>

<style scoped></style>
