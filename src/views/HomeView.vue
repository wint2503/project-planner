<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import { ref } from 'vue';
// import db from '../firebase/config'

export default {
  name: 'HomeView',
  components: {},
  setup (){
    let projects = ref([]);
    let load = async()=>{
      try{
        let res = await fetch("http://localhost:3000/project")
        if(res.status===404){
          throw new Error('not found url')
        }
        console.log(res)

        
      }catch(err){
        console.log(err.message);
      }
      
    }
    load();
    return {load, projects}
}
}
</script>
