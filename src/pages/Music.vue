<template>
  <div class="music">
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">

        <div class="title">乐谱</div>
        <router-link :to="{ name:'Music_show', params:{id:item%5,content} }" v-for="(item,index) in list">
          <div class="product">
            {{index+1}}.{{content[item%5].title}}
          </div>
        </router-link>


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
        content:[
          {
            title:'帕赫贝尔 Pachelbel D大调卡农原版',
            pic:[
              require('../assets/music/Pachelbel D/Pachelbel D_p0.jpg'),
              require('../assets/music/Pachelbel D/Pachelbel D_p1.jpg'),
              require('../assets/music/Pachelbel D/Pachelbel D_p2.jpg'),
              require('../assets/music/Pachelbel D/Pachelbel D_p3.jpg'),
              require('../assets/music/Pachelbel D/Pachelbel D_p4.jpg')
            ]
          },
          {
            title:'(奥)莫扎特:《费加罗婚礼》主题',
            pic:[
              require('../assets/music/(奥)莫扎特《费加罗婚礼》/(奥)莫扎特《费加罗婚礼》_p0.jpg'),
              require('../assets/music/(奥)莫扎特《费加罗婚礼》/(奥)莫扎特《费加罗婚礼》_p1.jpg')
            ]
          },
          {
            title:'帕赫贝尔 Pachelbel 天空之城卡农',
            pic:[
              require('../assets/music/帕赫贝尔 Pachelbel 天空之城卡农/帕赫贝尔 Pachelbel 天空之城卡农_p0.jpg'),
              require('../assets/music/帕赫贝尔 Pachelbel 天空之城卡农/帕赫贝尔 Pachelbel 天空之城卡农_p1.jpg'),
              require('../assets/music/帕赫贝尔 Pachelbel 天空之城卡农/帕赫贝尔 Pachelbel 天空之城卡农_p2.jpg'),
              require('../assets/music/帕赫贝尔 Pachelbel 天空之城卡农/帕赫贝尔 Pachelbel 天空之城卡农_p3.jpg'),
              require('../assets/music/帕赫贝尔 Pachelbel 天空之城卡农/帕赫贝尔 Pachelbel 天空之城卡农_p4.jpg'),
              require('../assets/music/帕赫贝尔 Pachelbel 天空之城卡农/帕赫贝尔 Pachelbel 天空之城卡农_p5.jpg')
            ]
          },
          {
            title:'莫扎特 D大调奏鸣曲K.311第二乐章',
            pic:[
              require('../assets/music/莫扎特 D大调奏鸣曲K.311第二乐章/莫扎特 D大调奏鸣曲K.311第二乐章_p0.jpg'),
              require('../assets/music/莫扎特 D大调奏鸣曲K.311第二乐章/莫扎特 D大调奏鸣曲K.311第二乐章_p1.jpg'),
              require('../assets/music/莫扎特 D大调奏鸣曲K.311第二乐章/莫扎特 D大调奏鸣曲K.311第二乐章_p2.jpg'),
              require('../assets/music/莫扎特 D大调奏鸣曲K.311第二乐章/莫扎特 D大调奏鸣曲K.311第二乐章_p3.jpg')
            ]
          },
          {
            title:'莫扎特 小星星变奏曲',
            pic:[
              require('../assets/music/莫扎特 小星星变奏曲/莫扎特 小星星变奏曲_p0.jpg'),
              require('../assets/music/莫扎特 小星星变奏曲/莫扎特 小星星变奏曲_p1.jpg'),
              require('../assets/music/莫扎特 小星星变奏曲/莫扎特 小星星变奏曲_p2.jpg'),
              require('../assets/music/莫扎特 小星星变奏曲/莫扎特 小星星变奏曲_p3.jpg'),
              require('../assets/music/莫扎特 小星星变奏曲/莫扎特 小星星变奏曲_p4.jpg'),
              require('../assets/music/莫扎特 小星星变奏曲/莫扎特 小星星变奏曲_p5.jpg'),
              require('../assets/music/莫扎特 小星星变奏曲/莫扎特 小星星变奏曲_p6.jpg'),
              require('../assets/music/莫扎特 小星星变奏曲/莫扎特 小星星变奏曲_p7.jpg')
            ]
          }
        ]
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
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
</script>
