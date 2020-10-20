<template>
  <div>
    <h1>setup的执行时机以及注意点</h1>
    <div>{{ count }}</div>
    <!-- <button @click="handelClick">按钮</button> -->
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
/* 
  setup执行时机：
    setup--
    beforeCreate：组件刚刚创建出来，组件的data和methods没有初始化
    Created:组件刚刚被创建出来，组件的data和methods已经初始化完成
  setup注意点：
    1. 由于执行setup函数的时候，没有执行Created生命周期方法，所以在setup函数中不能使用data和methods
    2. 不能在setup函数中使用this，所以vue为了避免错误使用，直接将setup函数中的this修改成了undefined
    3. setup函数只能是同步的，不能是异步的
*/
export default {
  props: ["userName"],
  data() {
    return {
      name: "yq",
    };
  },
  methods: {
    fn1() {
      console.log(this.name);
    },
  },
  setup() {
    console.log("setup", this);
    onMounted(() => {
      console.log("setup-onmounted", this);
    });
    let count = ref(0);
    return {
      count,
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this.name);
  },
  created() {
    console.log("created", this.name);
  },
  mounted() {
    console.log("mounted");
  },
  beforeMount() {
    console.log("beforMounted");
  },
};
</script>

<style scoped>
</style>