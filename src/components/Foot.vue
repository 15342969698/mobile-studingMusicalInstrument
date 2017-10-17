<template>
  <div class="foot-nav">
    <router-link :to="{path:'/FromSubmit'}">
      <span><img src="../assets/images_home/tab_iocn_62.png">申请试听</span>
    </router-link>
    <span @click="tel"><img src="../assets/images_home/tab_iocn_64.png">联系电话</span>
    <span><img src="../assets/images_home/tab_iocn_66.png">在线客服</span>
</div>

</template>
<script>
  import { MessageBox } from 'mint-ui';
  export default {
    data(){
      return{
        num:'88888888'
      }
    },
    methods:{
      test(){
        MessageBox.alert('Success!')
      },
      tel(){
        MessageBox({
          title: '',
          message:'<div style="color:red">'+this.num+'</div>',
          confirmButtonText:'拨打电话'
        }).then(action => {
          window.location.href='tel://'+this.num
        });
      }
    }
  }
</script>
<style>

</style>
