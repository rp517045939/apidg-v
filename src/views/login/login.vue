<template>
 <div class="login-container">
        <el-form :model="ruleForm2" :rules="rules2"
         status-icon
         ref="ruleForm2"
         label-position="left"
         label-width="0px"
         class="demo-ruleForm login-page">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text"
                    v-model="input_username"
                    auto-complete="off"
                    placeholder="用户名"
                ></el-input>
            </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password"
                        v-model="input_password"
                        auto-complete="off"
                        placeholder="密码"
                    ></el-input>
                </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="commit_login()" :loading="logining">登录</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
import service from '@/api'
import { serializeData } from '@/utils/common'
export default{
  data () {
    return {
      uid: '',
      username: '',
      token: '',
      input_username: '',
      input_password: ''
    }
  },
  methods: {
    // if (this.input_username == ""){
    //   this.$toast("请输入用户名");
    //   return;
    // }else if(this.input_password == ""){
    //   this.$toast("请输入密码")
    // }
    commit_login (obj) {
      let re = {
        username: this.input_username,
        password: this.input_password
      }
      console.log(re)
      service.login(serializeData(re))
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            // 添加用户信息到本地
            this.$storage.sessionSet('web_token', 'JWT ' + res.token)
            this.$storage.localSet('uid', res.uid)
            this.$storage.sessionSet('uid', res.uid)
            this.$storage.localSet('username', res.username)
            this.$storage.sessionSet('username', res.username)
            this.$router.replace({
              path: '/'
            })
          } else {
            alert.log('账号或者密码错误')
            console.log('账号或者密码错误')
          }
        })
    }
  }
}
</script>

<style>
login-container {
    width: 100%;
    height: 100%;
}
.login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
}

</style>
