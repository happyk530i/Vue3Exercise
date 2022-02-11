<template> 

<input type="text" id="form-name" v-model="name" placeholder="Name" class="form-control">

<input type="text" v-model="desc" placeholder="Descripttion" clas="form-control" v-on:keyup.enter="addItem" >

<button @lick="addItem" class="btn btn-dark"><i class="fas fa-plus"></i></button>


<tr v-for="(item, index) in items" :key="item.name">

 {{index+1}}.{{item.name}}.{{item.desc}}

</tr>


</template>

<script>
import { reactive} from 'vue'

export default {
    setup() {
    
    const item = reactive({name:"",desc:""})
    
     const times  = reactive ([{name:"",desc:"" }]) 

     const addItem = () =>{[times.name =item.name,times.desc=item.desc]}
    



    return{item,times,addItem}

    }}
</script>
