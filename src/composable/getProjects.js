import { ref } from "vue"
import {db} from '../firebase/config'

let getProjects = ()=>{
    let projects = ref([]);
    let error = ref("")

    let load = async()=>{
        try{
            let res = await db.collection('projects').get();
            projects.value = res.docs.map((doc)=>{
                return {id:doc.id, ...doc.data()}
            })
        }catch(err){
            error.value = err.message;
        }
    }
    return{projects, error, load};
}

export default getProjects;