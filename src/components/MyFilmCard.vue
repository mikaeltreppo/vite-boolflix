<template>
    <div>
      <img :src="image" alt="">
        {{ title }}
        {{ originalTitle }}
        <span v-if="this.language == 'it'"><img class="flags"
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Italy-01-1.svg" alt=""> </span>
        <span v-if="this.language == 'en'"><img class="flags"
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Great-Britain-01-1.svg" alt=""> </span>
        <span v-if="this.language == 'es'"><img class="flags"
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Spain-01-2.svg" alt=""> </span>
        <span v-if="this.language == 'de'"><img class="flags"
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Germany-01-1.svg" alt=""> </span>
        <span v-else>{{ language }}</span>
        {{ vote }}
    </div>
</template>
<script>
import { store } from '../../store';

export default {
    name: 'MyFilmCard',
    data() {
        return {
            store,
            
        }
    },
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        image:String
    }

}




</script>
<style>
.flags {
    display: inline-block;
    width: 15px;
}
</style>