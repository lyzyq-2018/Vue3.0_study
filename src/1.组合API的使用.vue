<template>
  <div>
    <div>{{ count }}</div>
    <button @click="handelClick">按钮</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  props: ["userName"],
  data() {
    return {
      name:'yq'
    }
  },
  methods: {
    fn1(){
      console.log(this.name)
    }
  },
  // 组合API的入口函数
  setup() {
    // 想监听count变化更新UI，这里需要借助vue提供的ref
    // 注意：在组合API定义的变量/方法，要想在外界使用，必须通过return｛xxx.xxx｝暴露出去。
    //ref注意点：ref函数只能监听基本数据类型的变化，不能监听复杂数据类型的变化（数组/对象）
    let list = reactive(["aaa", "bbb", "ccc"]);
    console.log(list[0]);
    let count = ref(0);
    function handelClick() {
      // alert(123)
      console.log(count);
      count.value += 1;
    }
    return { count, handelClick };
  },
};
</script>

<style scoped>
</style>