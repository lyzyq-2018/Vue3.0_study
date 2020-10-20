<template>
  <div>
    <div>{{ state }}}+++++++{{ refState.age }}</div>
    <button @click="handelClick">按钮</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  data() {
    return {};
  },
  /* 
  1. 什么是ref？
	  ref和reactive一样，同样是用来实现响应式数据的方法
	  reactive必须传一个对象，而ref可以用来监视基本数据类型和引用数据类型。
  2. ref本质：
	  ref底层还是reactive，系统会自动根据我们给ref传入的值转换成ref（xx） reactive({value:xxx})
  3. ref注意点：
	  在Vue中使用的ref的值的时候不用通过value获取
	  在JS中使用ref的值必须通过value获取
 */
  setup() {
    //创建响应式数据，本质：将传入的数据包装成Proxy对象
    let state = reactive("aaaa");
    let refState = ref({ age: new Date() });
    function handelClick() {
      console.log(refState.value.age);
    }
    return { state, handelClick, refState };
  },
};
</script>

<style scoped>
</style>