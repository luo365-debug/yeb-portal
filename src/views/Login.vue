<template>
  <div>
    <!-- ref表单名 -->
    <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
      <h3 class="loginTitle">系统登陆</h3>

      <!-- prop使其与校验规则rules里的名字对应 -->
      <el-form-item prop="username">
        <!--输入框-->
        <el-input type="text" auto-complete="false" v-model="loginForm.username" aria-placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" auto-complete="false" v-model="loginForm.password" aria-placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input type="text" auto-complete="false" v-model="loginForm.code" aria-placeholder="点击图片更换验证码" style="width: 250px"></el-input>
        <img :src="captchaUrl" alt="验证码显示错误" @click='updateCaptcha'>
      </el-form-item>

      <el-checkbox v-model="checked" class="loginRemember">记住账号密码</el-checkbox>
      <el-button type="primary" style="width: 100%" @click="submitLogin">登录</el-button>

    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data(){
      return{
        //从后端加载验证码，确保与之前的验证码不同
        captchaUrl:'/captcha?time='+new Date(),
        //默认账号密码
        loginForm:{
          username:'admin',
          password:'123',
          code:''
        },
        //默认勾选记住密码
        checked:true,
        //校验不为空
        rules:{
          username: [{required:true,message:'请输入用户名',trigger:'blur'}],
          password: [{required:true,message:'请输入密码',trigger:'blur'}],
          code: [{required:true,message:'请输入验证码',trigger:'blur'}]
        }
      }
    },
    //点击事件
    methods:{
      updateCaptcha(){
        this.captchaUrl='/captcha?time='+new Date();
      },
      submitLogin(){
        this.$refs["loginForm"].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            this.$message.error("请将用户名、密码、验证码输入完整");
            return false;
          }
        });
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
    border: slategray 1px solid;
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

  /*使验证码图片与输入框在同一行*/
  .el-form-item__content{
    display: flex;
    align-items: center;
  }
</style>