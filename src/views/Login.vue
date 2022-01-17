<template>
  <div>
    <el-form ref="form" :model="loginForm" class="loginContainer">
      <h3 class="loginTitle">系统登陆</h3>

      <el-form-item>
        <!--输入框-->
        <el-input type="text" auto-complete="false" v-model="loginForm.username" aria-placeholder="请输入用户名"></el-input>
        <el-input type="password" auto-complete="false" v-model="loginForm.password" aria-placeholder="请输入密码"></el-input>
        <el-input type="text" auto-complete="false" v-model="loginForm.code" aria-placeholder="点击图片更换验证码" style="width: 250px"></el-input>
        <img :src="captchaUrl" alt="验证码显示错误">
      </el-form-item>

      <el-checkbox v-model="checked" class="loginRemember">记住账号密码</el-checkbox>
      <el-button type="primary" style="width: 100%">登录</el-button>

    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data(){
      return{
        //加载验证码
        captchaUrl:'',
        //默认账号密码
        loginForm:{
          username:'admin',
          password:'123',
          code:''
        },
        //默认勾选记住密码
        checked:true
      }
    }
  }
</script>

<style>
  .loginContainer{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background-color: antiquewhite;
    border: black 1px solid;
    box-shadow: 0 0 25px #cac6c6;
  }

  .loginTitle{
    margin: 0px auto 40px auto;
    text-align: center;
  }

  .loginRemember{
    text-align: left;
    margin: 0px 0px 15px 0px;
  }

</style>