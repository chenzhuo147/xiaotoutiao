<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单 -->
      <el-form style="margin-top:15px">
        <!-- 表单域 -->
        <el-form-item>
          <!-- 表单组件   手机号 -->
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <!-- 表单组件  验证码-->
          <el-input style="width:220px"></el-input>
          <el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <!-- 表单组件  用户协议 -->
        <el-form-item>
          <el-checkbox>我以及阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <!-- 登录按钮 -->
          <el-button style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.login {
  // 背景图片自适应大小
  background-size: cover;
  background-image: url("../../assets/img/login_bg.jpg");
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 400px;
    height: 340px;
    .title {
      text-align: center;
      img {
        height: 40px;
      }
    }
  }
}
</style>
