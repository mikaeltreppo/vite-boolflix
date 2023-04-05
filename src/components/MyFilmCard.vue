<template>
 
        <div class="card">
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
            <img :src="image" alt="">
            <!--info che andranno dietro alla card-->
            </div>
            <div class="flip-card-back">
        <span class="blue">Titolo:</span>  <div>{{ title }}</div>  
        <span class="blue">Titolo Originale:</span><div>{{ originalTitle }}</div>
            <span v-if="this.language == 'it'"><img class="flags"
                    src="https://seekflag.com/app/uploads/2021/12/Flag-of-Italy-01-1.svg" alt=""> </span>
            <span v-if="this.language == 'en'"><img class="flags"
                    src="https://seekflag.com/app/uploads/2021/11/Flag-of-Great-Britain-01-1.svg" alt=""> </span>
            <span v-if="this.language == 'es'"><img class="flags"
                    src="https://seekflag.com/app/uploads/2021/12/Flag-of-Spain-01-2.svg" alt=""> </span>
            <span v-if="this.language == 'de'"><img class="flags"
                    src="https://seekflag.com/app/uploads/2021/11/Flag-of-Germany-01-1.svg" alt=""> </span>
        <span v-else>   <span class="blue"> Lingua:</span>{{ language }}</span>
            <div v-if="vvote == 1"><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div> 
            <div v-if="vvote == 2"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></i></div>  
            <div v-if="vvote == 3"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></i></div>  
            <div v-if="vvote == 4"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>  
            <div v-if="vvote == 5"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>  
     <div class="trailer"> <span class="blue">  Trailer: </span>   {{ trailer }}</div>
        </div>
        </div>
        </div>
    </div>

</template>
<script>
import { store } from '../../store';

export default {
    name: 'MyFilmCard',
   
    data() {
        return {
            store,
            vvote : Math.floor((this.vote) / 2),
        }
    },
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        image: String,
        trailer: String

    },
    methods:{
       starVote(){

    
       }
    }  

}




</script>
<style scoped>
.blue{

    color: rgb(65, 65, 111);
}
.trailer{
    overflow-y: hidden;
    height: 240px;


}
.flip-card-back div{
    margin: 10px;
 
}
.flags {
    display: inline-block;
    width: 15px;
}

.card{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: calc(100% / 4);
}
.flip-card {
  width: 342px;
  height: 500px;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 90%;
  height: 90%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
 

}


/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  color: black;
}

/* Style the back side */
.flip-card-back {
    background-color: black;
  color: white;
  transform: rotateY(180deg);
}
</style>