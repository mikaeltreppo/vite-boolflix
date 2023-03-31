<script>
import axios from 'axios';
import { store } from '../store.js';
import MyMovieList from './components/MyMovieList.vue';
import MySearchBar from './components/MySearchBar.vue'

export default {
  data() {
    return {
      store
    }
  },

  methods: {
    getMovie() {
      store.loading = true;


      let urlApi = "https://api.themoviedb.org/3/search/movie?api_key=e5909ae0f4f96e86e199022bd90ac5cf"
      if (store.search.length > 0) {
          urlApi += `&query=${store.search}`;
        }


      axios.get(urlApi)
        .then(response => {
          store.filmList = response.data.results;
          store.loading = false;
        })
    }
  },
  components: {
    MyMovieList,
    MySearchBar
  },
  created() {
    this.getMovie();
  }
}
</script>

<template>
  <MySearchBar @doSearch="getMovie"/>


  <MyMovieList />
</template>

<style scoped></style>
