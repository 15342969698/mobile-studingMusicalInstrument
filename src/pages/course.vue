<template>
  <div class="page-loadmore">
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">

        <div class="product" v-for="(item,index) in list">
          <img :src="content[item%5].url">
          <div class="text">
            <p class="title">{{list[index]}}{{content[item%5].title}}</p>
            <p>培训地址：{{content[item%5].add}}</p>
            <p>联系老师：{{content[item%5].teacher}}</p>
            <p>联系方式：{{content[item%5].tel}}</p>
            <div class="price">{{content[item%5].price}}</div>
          </div>
        </div>
        <!--<li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>-->
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
            url:require('../assets/img_01.jpg'),
            title:'专业吉他培训 古筝培训 钢琴 电子琴 架子鼓 葫芦丝培训 艺翔琴行',
            teacher:'木子老师',
            tel:'18571467XXX',
            price:'40元/课',
            add:'武汉纸坊文体培训'
          },
          {
            url:require('../assets/img_02.jpg'),
            title:'北京海淀西城仟知鑫钢琴学习馆',
            teacher:'陈老师',
            tel:'15864298XXX',
            price:'100元/课',
            add:'城阳大北曲家佳源东一百米艺翔琴行'
          },
          {
            url:require('../assets/img_03.jpg'),
            title:'美洛迪艺术培训中心',
            teacher:'钱老师',
            tel:'13907XX',
            price:'45元/课',
            add:'广电培训中心影视城'
          },
          {
            url:require('../assets/img_04.jpg'),
            title:'山东大雨文化传播有限公司乐器培训中心',
            teacher:'王老师',
            tel:'18571467XXX',
            price:'80元/课',
            add:'周边_唐冶新区鲁商凤凰城'
          },
          {
            url:require('../assets/img_05.jpg'),
            title:'专业乐器培训，开设一对一小课，一对二大课',
            teacher:'孙老师',
            tel:'13646486XXX',
            price:'39元/课',
            add:'区巨峰路上王埠二区'
          }
        ]
      };
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
      },
      loadTop() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue + i);
          }
          this.$refs.loadmore.onTopLoaded();
        }, this.WaiteTime);
      },
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
