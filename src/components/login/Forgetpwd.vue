<template>
    <div class="container">
        <header class="top-goback">
          <span  @click="goBack()">
            <span class="el-icon-arrow-left"></span>back
          </span>
        </header>
        <t-templateLogo style="padding-top: 20px"></t-templateLogo>
        <div class="login-form">
         <el-form :model="paswordForm" :rules="rules" status-icon ref="loginForm">
            <div class="input-group">
              <el-form-item prop="cellphone">
                <el-input v-model="paswordForm.cellphone" placeholder="cellphone" prefix-icon="el-icon-mobile-phone" auto-complete="off"></el-input>
              </el-form-item>
              <div class="flex ai-fs">
                <el-form-item prop="code" class="wf" id="group">
                  <el-input v-model="paswordForm.code" placeholder="code" prefix-icon="el-icon-news" auto-complete="off"></el-input>
                </el-form-item>
                <div class="gold-scal">
                  <el-button plain class="m-l5" @click="getCode" :disabled="isClick">{{count}}验证码</el-button>
                </div>
              </div>
              <el-form-item prop="password">
                <el-input v-model="paswordForm.password" placeholder="password" prefix-icon="el-icon-goods" type="password" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item prop="rePassword">
                <el-input v-model="paswordForm.rePassword" placeholder="rePassword" prefix-icon="el-icon-goods" type="password" auto-complete="off"></el-input>
              </el-form-item>
            </div>
            <div>
                <el-button @click="resetPaswd()" class="wf" type="primary" size="medium">Confirm</el-button>
            </div>
          </el-form>
        </div>
    </div>
</template>

<script>
import TemplateLogo from "./../common/TempLogo.vue";
export default {
  name: "Forgetpwd",
  components: {
    "t-templateLogo": TemplateLogo
  },
  data () {
    return {
      paswordForm: {
        code: "",
        password: "",
        cellphone: "",
        rePassword: ""
      },
      rules: {},
      timer: null,
      count: "",
      isClick: false
    };
  },
  methods: {
    goBack () {
      this.$router.push({ path: "/" });
    },
    resetPaswd () {
      console.log("find password");
    },
    getCode () {
      const TIME_COUNT = 5;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
            this.isClick = true;
          } else {
            clearInterval(this.timer);
            this.timer = null;
            this.count = '';
            this.isClick = false;
          }
        }, 1000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  min-width: 100%;
  flex-flow: column nowrap;
  .login-form {
    padding: 20px 25px 0;
  }
  .el-form-item {
    margin-bottom: 15px;
  }
  .top-goback {
    flex: 1;
    text-align: left;
    padding: 10px;
    font-size: 0.9rem;
  }
  .gold-scal {
    flex: 0 1 0.618%;
  }
}
#group .el-form-item__content {
  display: flex;
}
</style>
