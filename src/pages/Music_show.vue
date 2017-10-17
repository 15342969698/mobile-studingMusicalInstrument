<template>
  <div class="Music_show">
    <div @click="back" class="goback"><</div>
    <div v-for="(i,a) in $route.params.content[$route.params.id].pic">
      <img  :src="$route.params.content[$route.params.id].pic[a]">
    </div>
  </div>
</template>

<style>

</style>
<script>
  export default{
    methods:{
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>
