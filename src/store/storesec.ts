import { defineStore } from "pinia";
import {useStore} from './store'
// 创建store
export const oneStore = defineStore({
    // id 在所以store中唯一
    id: 'oneStore',
    // state 返回的对象的函数
    state: ()=> ({
        count: 111
    }),
    getters: {
        // 使用参数（state）/也可使用this（this.count）/简单的getters也可以使用箭头函数（countPwi： state => state.count**2）
        countPwi(state) {
            return state.count ** 2 // 求一个数 的平方
        },
        // 获取其他getter，可直接通过this
        countPow(){
            return this.countPwi
        }
    },
    actions: {
        
    }

})