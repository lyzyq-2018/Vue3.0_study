<template>
  <div>
    <div>{{ state.a }}</div>
    <div>{{ state.b.c.e }}</div>
    <button @click="handelClick">按钮</button>
  </div>
</template>

<script>
import { ref ,shallowReactive} from "vue";
// import { reactive } from "vue";
export default {
  data() {
    return {};
  },
  /* 
  1. 递归监听
    默认情况下，无论是通过ref还是reactive创建的数据都是递归监听,每个对象都是proxy对象
  2. 递归监听存在的问题
    如果数据量比较大，会消耗性能
  3. 非递归监听数据（shallowReactive,shallowRef,triggerRef）
    shallowReactive监视传入对象数据属性为基本数据类型的变化，如果一个属性为引用数据类型，在这个值变化的时候不会去更新页面
    shallowRef监视的ref对象value的变化，value为引用数据类型，其中的值变化时不会更新页面
    triggerRef用来主动触发更新页面，仅仅针对ref数据
 */
  setup() {
    //创建响应式数据，本质：将传入的数据包装成Proxy对象
    let state = ref({a:'a',b:{c:{e:'e'}}})
    function handelClick() {
      console.log(state.value.b);
      console.log(state.value.b.c);
    }
    return { state, handelClick };
  },
};
</script>

<style scoped>
</style>