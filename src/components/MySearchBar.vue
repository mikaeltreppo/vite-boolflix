<template>

     <div class="searchPart">
        <input type="text" v-model="this.store.search" placeholder="Search character"  >
        <button @click="$emit('doSearch')" class="btn btn-primary">Search</button>
        <button @click="doReset" class="btn btn-warning">Reset</button>
  </div>
</template>
<script>
 import { store } from '../../store.js';

export default{
    name: 'MySearchBar',
    data(){
        return{
            store
        }
    },
    methods:{
        doReset() {
                this.store.search = '';
                this.$emit('doSearch');
            }
    }
}
</script>
<style>
input{
    height: 30px;

}
.searchPart{
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
    height: 30px;
}
</style>