<template>
  <div class="form_submit">
    <div class="text">
      <mt-field label="用户名" placeholder="请输入姓名" v-model="username"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="number" v-model="phone"></mt-field>
      <mt-field label="qq" placeholder="请输入qq" type="number" v-model="qq"></mt-field>
      <mt-radio
        title="请选择试听课程"
        v-model="course"
        :options="['钢琴', '小提琴', '吉他']">
      </mt-radio>
      <mt-button @click="sub" type="danger">提交</mt-button>
      <br>
      {{arry}}
    </div>

  </div>
</template>
<script>
  import { MessageBox } from 'mint-ui';
  export default{
    data(){
      return{
        username:'',
        phone:'',
       qq:'',
        course:'',
        arry:[]
      }
    },
    methods:{
      sub(){
        if(this.username && this.phone && this.qq && this.course){
          this.arry.unshift({ username:this.username,phone:this.phone,qq:this.qq,course:this.course})
          MessageBox.alert('课程申请成功！').then(action => {
            this.$router.push('/home')
        });
        }else{
          MessageBox.alert('请输入正确信息！')
        }

      }
    }
  }
</script>
<style>

</style>
