<template>
    <div>
        {{ title }}
        {{ originalTitle }}
        {{ language }}
        {{ vote }}
    </div>
</template>
<script>
import { store } from '../../store';

export default {
    name: 'MyFilmCard',
    data() {
        return {
            store
        }
    },
    props: {
        title: String,
        originalTitle: String,
        language:String,
        vote:String
    }

}




</script>
<style></style>