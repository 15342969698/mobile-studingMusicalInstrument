<template>
  <div class="Message_show">
    <div class="title">{{Data[$route.params.index].title}}</div>
    <div class="more">更新时间：{{Data[$route.params.index].time}},作者/编辑：{{Data[$route.params.index].autor}}</div>
    <div v-html="Data[$route.params.index].text"></div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        Data:[]
      }
    },
    created(){
      if( this.$route.params.Data ){//来自Message_list.vue的数据
        this.Data = this.$route.params.Data
      }else if( this.$route.params.news ){//来自Message.vue的数据
        this.Data = this.$route.params.news
      }else if( this.$route.params.musician ){//来自Message.vue的数据
        this.Data = this.$route.params.musician
      }else if( this.$route.params.news1 ){
        this.Data = this.$route.params.news1
      }else if( this.$route.params.news2 ){
        this.Data = this.$route.params.news2
      }else if( this.$route.params.news3 ){
        this.Data = this.$route.params.news3
      }
    }
  }

</script>
<style>

</style>
