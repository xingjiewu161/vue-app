<template>
    <div class="container">
      <t-templateLogo></t-templateLogo>
      <article>
        <div class="title">研发中心2018年度大会报名</div>
        <div class="sub-content text-center">
          <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm" class="login-form">
            <div class="input-group">
              <el-form-item prop="password">
                <el-input v-model="loginForm.password" placeholder="姓名" prefix-icon="el-icon-edit" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item prop="cellphone">
                <el-input v-model="loginForm.cellphone" placeholder="电话号码" prefix-icon="el-icon-mobile-phone" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item prop="department">
                  <el-select v-model="loginForm.department" placeholder="请选择部门">
                  <el-option label="部门一" value="shanghai"></el-option>
                  <el-option label="部门二" value="beijing"></el-option>
                  </el-select>
              </el-form-item>
            </div>
            <div>
                <el-button @click="login()" class="wf" type="primary" size="medium" :loading="loading">注 &nbsp;册</el-button>
            </div>
          </el-form>
        </div>
      </article>
    </div>
</template>

<script>
import TemplateLogo from "./../common/TempLogo.vue";
export default {
  name: "Logins",
  components: {
    "t-templateLogo": TemplateLogo
  },
  created() {},
  beforeDestory() {},
  data() {
    let validateUsername = (rule, value, callback) => {
      !/^\d+$/.test(value)
        ? callback(new Error("手机号只能输入数字！"))
        : callback();
    };
    let validatorPassword = (rule, value, callback) => {
      !/^.{0,12}$/.test(value)
        ? callback(new Error("姓名最大长度 不超过12个字符"))
        : callback();
    };
    return {
      loading: false,
      loginForm: {
        cellphone: '',
        password: '',
        department: '',
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
        ],
        department: [
          { required: true, message: '请选择部门', trigger: 'change' }
        ]
      },
      newsListShow: []
    };
  },
  methods: {
    login() {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("Login", this.loginForm)
            .then(v => {
              this.loading = false;
              console.log(this.$store.state);
              // this.$router.push({ path: "basic" });
              this.$store.state.login.token
                ? this.$router.push({ path: "basic" })
                : this.$message("Current user infomation exception ");
            })
            .catch(e => {
              this.loading = false;
            });
        } else return false;
      });
    },
    gotoForgetPwd($event) {
      event.preventDefault();
      this.$router.push({ path: "/forgetpwd" });
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
.title {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px 40px 3px 40px;
}
.el-select {
  width: 100%;
}
.wf {
  width: 100%;
  background-color: #ec1b2e;
  border-color: #ec1b2e;
}
.flex {
  display: flex;
}
.jc-bwt {
  justify-content: space-between;
}
.al-cen {
  align-items: center;
}
article {
  padding: 0 25px 25px;
}
.sub-content {
  margin-top: 10px;
  margin-bottom: 0;
}
.el-form-item {
  margin-bottom: 20px;
}
.el-input__inner {
  background-color: #f6f6f6;
}
</style>
