import { createApp } from "vue";

import doApp from "./adoApp.vue";

import Counter from "./aCounter.vue";

import Instruction from "./aInstruction.vue";

import CRUDs from "./aCRUD.vue";

createApp(doApp).mount("#doapp");

createApp(Counter).mount("#counter");

createApp(Instruction).mount("#Instruction");

createApp(CRUDs).mount("#CRUD") ;

