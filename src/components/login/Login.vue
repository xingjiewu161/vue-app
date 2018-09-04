<template>
    <div class="container">
      <header>
         <img src="../../../static/logo.png">
      </header>
      <article>
        <div class="title">you can share your courseware here and get paid</div>
        <div class="sub-content text-center">
            <div>
              <el-input v-model="cellphone" placeholder="cellphone" prefix-icon="el-icon-mobile-phone" auto-complete="off"></el-input>
              <el-input v-model="password" placeholder="password" prefix-icon="el-icon-edit"></el-input>
            </div>
            <div>
              <el-form-item label="特殊资源" prop="resource">
                <el-button v-model="ruleForm.resource" class="wf" type="primary" size="medium">Login</el-button>
              </el-form-item>
            </div>
            <div class="flex jc-bwt al-bas">
                <el-radio label="remember me"></el-radio>
                <el-button type="text">forget password</el-button>
            </div>
        </div>
      </article>
    </div>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      cellphone: "",
      password: "",
      resource: "",
      ruleForm: {
        resource: ''
      }
    };
  }
};
</script>

<style lang="scss" scoped>
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
.el-input {
  margin-bottom: 15px;
}
</style>
