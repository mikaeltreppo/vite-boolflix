<template>
 
        <div class="card">
            <img :src="image" alt="">
            <!--info che andranno dietro alla card-->
          <div>{{ title }}</div>  
          <div>{{ originalTitle }}</div>
            <span v-if="this.language == 'it'"><img class="flags"
                    src="https://seekflag.com/app/uploads/2021/12/Flag-of-Italy-01-1.svg" alt=""> </span>
            <span v-if="this.language == 'en'"><img class="flags"
                    src="https://seekflag.com/app/uploads/2021/11/Flag-of-Great-Britain-01-1.svg" alt=""> </span>
            <span v-if="this.language == 'es'"><img class="flags"
                    src="https://seekflag.com/app/uploads/2021/12/Flag-of-Spain-01-2.svg" alt=""> </span>
            <span v-if="this.language == 'de'"><img class="flags"
                    src="https://seekflag.com/app/uploads/2021/11/Flag-of-Germany-01-1.svg" alt=""> </span>
            <span v-else>{{ language }}</span>
            <span v-if="vvote == 1"><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></span> 
            <span v-if="vvote == 2"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></i></span>  
            <span v-if="vvote == 3"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></i></span>  
            <span v-if="vvote == 4"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></span>  
            <span v-if="vvote == 5"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>  
           
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
        image: String

    },
    methods:{
       starVote(){

    
       }
    }  

}




</script>
<style scoped>
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
</style>