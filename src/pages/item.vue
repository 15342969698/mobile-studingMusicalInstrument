<template>
  <div class="item">
    <div @click="back" class="item_goback"></div>
    <img :src="$route.params.item[$route.params.id].path">
    <div class="text">
      <p class="title">{{$route.params.item[$route.params.id].title}}</p>
      <p>地址：{{$route.params.item[$route.params.id].add}}</p>
      <p>联系热线：{{$route.params.item[$route.params.id].tel}}</p>
      <p>联系人：{{$route.params.item[$route.params.id].man}}</p>
      <div class="btn">马上报名</div>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>
<style>

</style>
