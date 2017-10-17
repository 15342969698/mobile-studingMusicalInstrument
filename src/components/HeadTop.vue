<template>
  <div class="headertop">

    <div class="header">
      <!--<img src="../assets/images_home/header_02.png">-->
      <p>乐器兴趣班</p>
    </div>
      <div class="nav">
        <span><router-link :to="{path:'/home'}"><img src="../assets/images_home/nav_home_05.png"></router-link></span>
        <span><router-link :to="{path:'/Message'}">简讯</router-link></span>
        <span><router-link :to="{path:'/Music'}">乐谱</router-link></span>
        <span><router-link :to="{path:'/course'}">课程</router-link></span>
        <span><router-link :to="{path:'/about'}">我们</router-link></span>
    </div>
  </div>
</template>

<script>
  import '../assets/head.css'

</script>
<style>


</style>
