<template>
  <div>
    <div>段落</div>
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  props: ["userName"],
  data(){
    return {
      msg:'我是信息'
    }
  },
  mounted(){
    console.log(this.$attrs)
  }
};
</script>

<style scoped>
</style>