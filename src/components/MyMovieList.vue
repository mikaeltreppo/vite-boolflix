<template>
    <MyFilmCard v-for="(card,index) in store.filmList" :title="card.filmList.title" :key="index"></MyFilmCard> 
</template>
<script>
import { store } from '../../store';
import MyFilmCard from './MyFilmCard.vue'
export default{
    return:{
        data(){
            store
        }
    },
    components:{
        MyFilmCard
    }

}




</script>
<style></style>