<template>
  <div id="app">
    <HeadTop></HeadTop>
    <transition name="animate"><router-view class="content"></router-view></transition>
    <FootEnd></FootEnd>
  </div>
</template>

<script>
import HeadTop from './components/HeadTop'
import FootEnd from './components/Foot'
import '../static/style.css'
export default {
  components:{HeadTop,FootEnd}
}

</script>

<style>
  .content{
    transition: 0.3s;
    position: fixed;
    overflow-y: auto;
    top:89px;
    bottom: 50px;
    left: 0;
    right: 0;
  }
  .animate-enter{transform:translate(100%,0);opacity: 0}
  .animate-leave-active{transform:translate(-100%,0);opacity: 0}
  body{ margin:0px; padding: 0px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
