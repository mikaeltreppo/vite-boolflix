<script>
import axios from 'axios';
import { store } from '../store.js';
import MyMovieList from './components/MyMovieList.vue';
import MySearchBar from './components/MySearchBar.vue';
import MySeriesList from './components/MySeriesList.vue';

export default {
  data() {
    return {
      store
    }
  },

  methods: {
    //Film
    getMovie() {
      store.loading = true;

      let urlApi = "https://api.themoviedb.org/3/search/movie?api_key=e5909ae0f4f96e86e199022bd90ac5cf"
      if (store.search.length > 0) {
        urlApi += `&query=${store.search}`;
      }

      axios.get(urlApi)
        .then(response => {
          store.filmList = response.data.results;
       
        })
    },
    //serie Tv
    getSeries() {
 


      let urlApi = "https://api.themoviedb.org/3/search/tv?api_key=e5909ae0f4f96e86e199022bd90ac5cf"
      if (store.search.length > 0) {
        urlApi += `&query=${store.search}`;
      }


      axios.get(urlApi)
        .then(response => {
          console.log(response)
          store.seriesList = response.results;
          store.loading = false;
        })
    }
  },
  components: {
    MyMovieList,
    MySeriesList,
    MySearchBar
  },
  created() {
    this.getMovie();
    this.getSeries();
  }
}
</script>

<template>
  <MySearchBar @doSearch="getMovie" />

  <h2>Film</h2>
  <MyMovieList />
  <h2>Serie Tv</h2>
  <MySeriesList />
</template>

<style scoped></style>
