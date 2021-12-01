import { defineStore } from "pinia";

// 创建store
export const useStore = defineStore({
    // id 在所以store中唯一
    id: 'firstStore',
    // state 返回的对象的函数
    state: ()=> ({
        count: 1 
    })

})