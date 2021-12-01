<template>
    <div>
        <h1>{{testTit}}</h1>
         <a-button type="dashed" @click="getNum">Dashed Button {{owns}}</a-button>
         <a-button type="dashed" @click="addCount">count: {{num}} {{sum}}</a-button>
         <a-button type="dashed" @click="addCount">{{testz}}</a-button>
<!--     
        <template #nameslot>
            <div>
                剧名插槽
            </div>
            </template> -->
    </div>
</template>
<script lang="ts">
import { useStore } from "vuex";  // import useStore from "@/store/index";
import { useAttrs, useSlots, ref, watch, reactive, computed, getCurrentInstance, defineEmits  } from "vue";
import { Options } from "vue-class-component";
// import { Component } from "vue-class-component";

// reactive 是接收一个普通对象，返回该对象的响应式代理
// ref也是接受一个参数并返回一个响应式且可改变的ref对象，一般参数是基础类型，比如数值或字符串
// 如果传入的参数是一个对象，将会调用reactive方法进行响应转换
// 若值直接在setup中定义返回， 在模板中使用， 则{{}}直接写该参数，不用.value

// getCurrentInstance 获取路由信息/获取当前组件实例
Options({
    props: {
        title:Object
    }
})
    // Component
export default {
    // props: {
    //     title: {
    //         type: Object
    //     }
    // },

    setup(props:any, context: any) {
        const attr = useAttrs();
        console.log(attr.title, 'attrUseAttrs');
        
        console.log(props, 'props');
        console.log(props.title, 'props');
        
        console.log(context, 'context');
        console.log(context.attrs.titles, 'context');
        
        const num = ref(0); //初始值为-0

        // 通过ctx属性获取当前上下文
        // ctx.$router是路由实例
        // ctx.$router.currentRoute 就包含当前路由信息
        const { ctx } = getCurrentInstance() as any
        console.log(ctx.$router, 'ctx.$router' );
        

        // const owns = ref('hello')
        const stoe = useStore()
        // const stoe = useStore
        console.log(stoe);

        const testz = computed(() => stoe.state.testnum)
        
        // return stoe
        // 函数可以直接定义在setup中， 但是需要return出去
        //  在setup中访问已声明的响应式变量时， 需要使用.value方式访问，包括在watch和computed中
        
        const state = reactive({
            count: 0,

            apply: computed(() => {
                return 20*19
            })
        })

        const addCount = () => {
            num.value ++
            state.count +=1;
            stoe.dispatch('add')
        }

        const getNum =() => {
            alert(num.value)
            context.emit('emitdata', '传给父组件')
        }
        
        // 传给父组件值
        const emit = defineEmits(['change'])
        
        // 定义watch， 需要手动引入watch方法
        watch (
            () => [num.value, state.count],
            ([newVal, oldVal], [newVal1, oldVal1]) => {
                console.log(newVal, '新值', oldVal);
                console.log(newVal1, oldVal1);
            },
        )


        // 添加watch
        return {
            num,
            state,
            owns: ref('hello'),
            sum: computed(() => {
                return state.apply + num.value
            }),
            testTit: props.title,
            testz,
            emit,
            addCount,
            getNum
            
        }
    },

 
}
</script>
<style lang="scss" scoped>
</style>
