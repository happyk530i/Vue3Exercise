<template> 

<p>{{text}}</p>   <!-- 1.1  --> 
<input type="texts" v-model="text"/>  <!-- 1.2  -->

<p v-if="message.show">{{message.name}}</p>  <!-- 2.1  -->

<p>Number: {{number}}</p>  <!-- 3.1  -->

<p>Multiple * 5 : {{multipleNumber}}</p> <!-- 3.4.1  -->

<p>Object Index: {{ indexInObject.index}} </p>  <!-- 3.5.1  -->


<button @click="add">Add</button>  <!-- 3.2.1  -->
<button @click="minus">Minus</button> <!-- 3.3.1  -->
<button @click="addToReadOnly">AddToReadOnly</button>  <!-- 5.1.1  -->
<button @click="changeMessageStatus"> Show/Hide Message </button> <!-- 2.2  -->



<div>

<a href="#"  @click="displayCountryCode">Click to open / close </a> <!-- 4.7  -->

<ul :class="['box',{open:isOpen}]">  <!-- 4.7.0.1   設定style 4.7.0.2 -->


                                             <!-- 4.1   :key4.3 設置原因?  v-show 4.4  :class 4.5 -> 設定style 4.6    -->
<li v-for="(country,index) in countryCodes"     
 :key="country.code"
 v-show="country.show"
 :class="[country.class,{open:isOpen}]">   

 {{index+1}}.{{country.name}} | {{country.code}}
                                            <!-- 4.2  -->
</li>                                        
</ul>
</div>
</template>



<script>

 import { ref, reactive, computed,readonly } from 'vue';

export default {
 
setup () {
    
    const isOpen = ref(true)  // 4.6
    const text = ref('Hello Vue!') // 1
    const message = reactive({ name: 'Steve Jobs', show: true }) // 2
    const changeMessageStatus = () => {message.show ? message.show =false : message.show = true  } // 2.1.1
    const number = ref(0) // 3 ， 3.2.0 ， 3.3.0
    const copyNumber = readonly(number) //5
    const indexInObject = reactive({index:0 })  // 3.5
    const add = () =>{ number.value += 1; indexInObject.index += 2 }   // 3.2 ，   indexInObject.index += 2   3.5.1
    const minus = () => { number.value -=1; indexInObject.index -=2  } // 3.3 ， indexInObject.index += 2   3.5.1
    const addToReadOnly = () => { copyNumber.value +=1 } // 5.1
    const multipleNumber = computed( () =>{return number.value *5 }   ) //3.4
    const displayCountryCode = () =>{ isOpen.value =!isOpen.value}  // 4.8
    const countryCodes = ref([{ name: 'Taiwan', code: '886', show: true, class: 'red' }, // 4
    { name: 'Japan', code: '81', show: true, class: 'red' },
    { name: 'United States', code: '1', show: true, class: 'blue' },
    { name: 'United States', code: '1', show: true, class: 'blue' },
    { name: 'United Kingdom', code: '44', show: true, class: 'blue' }]) 


    return { text, message, number, add,minus,multipleNumber,indexInObject,addToReadOnly,
    changeMessageStatus, displayCountryCode, countryCodes,isOpen}   // 1.1,,,,
  }}

</script>


<style>
.box{
    padding:12px;
    background-color: rgb(218, 214, 214);
    transition: height 0.4s;
    height:0px
}
 /* 利用css的isopen設定是否顯示 設定style 4.7.0.2 */
.box.open{
    height:120px;
}
.box > li{
    display: none;
    justify-content: center;
    align-items: center;
    transition: height 0.4s;
}
.box > li.open{
    display: flex;
}

/* 4.6  可以利用 css的 isopen設定是否顯示，達到開關效果 */
.red{ 
    color:red;
}
.blue{
    color:blue
}
</style>
 