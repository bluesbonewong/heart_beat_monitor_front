<template>
  <div class="login">
    <div class="login-header vh-center">分布式机群<i class="el-icon-s-marketing"></i>监管系统</div>
    <div class="login-main vh-center">
      <div class="login-box">
        <div class="login-box-header">登录账号</div>
        <div class="login-box-form">
          <div class="form-group">
            <input type="text" placeholder="请输入用户名" v-model="username">
          </div>
          <div class="form-group">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
        </div>
        <el-button type="primary" @click="sessionSet">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    sessionSet() { // 设置session
      if (this.username === '123456' && this.password === '123456') {
        sessionStorage.setItem('sessiontoken', '1')
        this.$router.push('/')
      } else {
        this.$message.error('用户名或密码不正确');
      }
    }
  }
}
</script>

<style lang="scss">
.login {
  > .login-header {
    margin-top: 2.25rem;
    margin-bottom: 1.5rem;
    font-size: 22px;

    > .el-icon-s-marketing {
      color: #409EFF;
      margin: 0 4px;
      font-size: 30px;
    }
  }

  > .login-main .login-box {
    box-shadow: 2px 2px 3px 0 rgba(117, 124, 129, 0.12);
    width: 380px;
    max-width: 480px;
    border: 1px solid #dbe2e8;
    text-align: center;
    background: #fff;
    padding: 24px 48px 32px;

    > .login-box-header {
      font-size: 32px;
      margin: 12px 0;
      text-align: center;
      font-weight: normal;
      color: #2e3d49;
    }

    .form-group {
      margin: 20px 0;

      input {
        width: 100%;
        height: 44px;
        box-sizing: border-box;
        padding-left: 15px;
        padding-right: 15px;
        border: 1px solid #dbe2e8;
        font-size: 14px;
        box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);
        border-radius: 2px;
        color: #2e3d49;

        &:focus {
          outline: none;
          border-color: #02b3e4;
        }

        &::placeholder {
          color: #b5b5b5;
        }
      }
    }

    > .el-button {
      width: 100%;
      display: block;
      font-size: 16px;
    }
  }
}
</style>
