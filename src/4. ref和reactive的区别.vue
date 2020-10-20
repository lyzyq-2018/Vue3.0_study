<template>
  <div>
    <div>{{ state }}}+++++++{{ refState.age }}</div>
    <button @click="handelClick">按钮</button>
  </div>
</template>

<script>
import { ref, reactive,isReactive,isRef } from "vue";
export default {
  data() {
    return {};
  },
  /* 
  ref和reactive的区别：
    如果在template中使用的是ref类型的数据，那么Vue自动添加.value
    如果在template中使用的是reactive类型的数据，那么Vue不会帮我们添加.value
  Vue如何决定是否自动添加.value的？
    Vue在数据解析数据之前，会自动判断这个数据是否是ref数据，
    通过ref数据的__v_isRef来判断，如果这个指是true，代表是ref数据
  Vue提供了isRef,isReactive函数判断数据是否是ref和reactive数据,若reactive传入的是基本数据类型
  isReactive函数返回的是false,判断结果是错误的
 */
  setup() {
    //创建响应式数据，本质：将传入的数据包装成Proxy对象
    let state = reactive({name:18});
    let refState = ref({ age: new Date() });
    function handelClick() {
      //console.log(refState);//对象含有__v_isRef: true
      //console.log(state);
      console.log(isRef(refState),isReactive(refState));//true false
      console.log(isRef(state),isReactive(state));//false false
    }
    return { state, handelClick, refState };
  },
};
</script>

<style scoped>
</style>