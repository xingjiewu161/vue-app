<template>
    <div class="container">
      <!-- <header>
         <img src="../../../static/login.png">
      </header> -->
      <t-templateLogo></t-templateLogo>
      <article>
        <div class="title">you can share your courseware here and get paid</div>
        <div class="sub-content text-center">
          <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm" class="login-form">
            <div class="input-group">
              <el-form-item prop="cellphone">
                <el-input v-model="loginForm.cellphone" placeholder="cellphone" prefix-icon="el-icon-mobile-phone" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="loginForm.password" placeholder="password" prefix-icon="el-icon-edit" type="password" auto-complete="off"></el-input>
              </el-form-item>
              <!-- <input v-model="message" > -->
            </div>
            <div>
                <el-button @click="login()" class="wf" type="primary" size="medium">Login</el-button>
            </div>
          </el-form>
            <div class="flex jc-bwt al-bas">
                <el-checkbox-group v-model="loginForm.remeber">
                  <el-checkbox label="remember me"></el-checkbox >
                </el-checkbox-group>
                <el-button type="text" @click="gotoForgetPwd($event)">forget password</el-button>
            </div>
        </div>
      </article>
    </div>
</template>

<script>
import api from "./../../axios/interface.js";
import TemplateLogo from './../common/TempLogo.vue'
export default {
  name: 'Login',
  components: {
    't-templateLogo': TemplateLogo
  },
  created () {
    // this.loginForm = this.$store.state.userinfo.UserForm;
  },
  beforeDestory () {
    // this.$store.state.userinfo.UserForm = this.UserForm;
  },
  data () {
    let validateUsername = (rule, value, callback) => {
      !/^\d+$/.test(value)
        ? callback(new Error("手机号只能输入数字！"))
        : callback();
    };
    let validatorPassword = (rule, value, callback) => {
      !/^.{0,12}$/.test(value)
        ? callback(new Error("密码最大长度 不超过12个字符"))
        : callback();
    };
    return {
      loginForm: {
        cellphone: '',
        password: '',
        remeber: false
      },
      rules: {
        cellphone: [
          { required: true, message: "请输入电话号码登录", trigger: "change" },
          { validator: validateUsername, trigger: "change" }
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "change" },
          { validator: validatorPassword, trigger: "change" }
        ]
      },
      newsListShow: []
    };
  },
  methods: {
    login () {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          // this.setNewsApi();
          api.Moke_Data("/news/index", "type=top&key=123456").then(res => {
            console.log(res);
            this.$router.push({ path: "/dashboard" })
            this.$store.commit("logined", true);
            this.newsListShow = res.articles
          });
        } else {
          return false;
        }
      });
    },
    gotoForgetPwd ($event) {
      event.preventDefault();
      this.$router.push({ path: "/forgetpwd" });
    },
    setNewsApi: function () {
      api.Moke_Data("/news/index", "type=top&key=123456").then(res => {
        console.log(res);
        this.$router.push({ path: "/dashboard" })
        this.$store.commit("switch_status")
        this.newsListShow = res.articles
      });
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  background: #f6f6f6;
}
.content,
.title,
.text-center {
  text-align: center;
}
.wf {
  width: 100%;
}
.flex {
  display: flex;
}
.jc-bwt {
  justify-content: space-between;
}
.al-bas {
  align-items: baseline;
}
article {
  padding: 0 25px 25px;
}
.title {
  padding: 0 40px 10px 40px;
}
.sub-content {
  margin: 10px 0;
}
.el-form-item {
  margin-bottom: 20px;
}
.input-group {
  margin-bottom: 25px;
}
.el-input__inner {
  background-color: #f6f6f6;
}
</style>
