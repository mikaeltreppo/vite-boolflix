<template>
    <div>
        {{ title }}
    </div>
   
</template>
<script>
import { store } from '../../store';

export default{
    return:{
        data(){
            store
        }
    },
    props:{
        title:String,
        image:String
    }

}




</script>
<style></style>