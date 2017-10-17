<template>
  <div class="music">
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">

        <div class="title">{{$route.params.title}}</div>
        <router-link :to="{ name:'Message_show', params:{index:item%7,Data} }" v-for="(item,index) in list"><div class="product">{{index+1}}.{{Data[item%7].title}}</div></router-link>

      </mt-loadmore>
    </div>
  </div>
</template>

<style>
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        list: [],
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0,
        topStatus: '',
        translate: 0,
        moveTranslate: 0,
        timer:'',
        WaiteTime:800,
        Data:[]
      }
    },
    methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue > 0) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue - i);
            }
          } else {
            this.list.push('全部加载完成');
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, this.WaiteTime);
      },
      handleTopChange(status) {
        this.moveTranslate = 1;
        this.topStatus = status;
      }
    },
    created() {
      for (let i = 80; i >= 60; i--) {
        this.list.push(i);
      }
      if( this.$route.params.news ){
        this.Data = this.$route.params.news
      }else if( this.$route.params.musician ){
        this.Data = this.$route.params.musician
      }
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
</script>
