<template>
  <ion-app>
    <div class="out-container">
      <div class="das-container">
        <t-top-goback :url="'/'"></t-top-goback>
        <div class="baseUrl">
          <h6> 请保存该二维码链接地址，入场可直接访问该地址扫码入场或刷脸入场 </h6>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{baseUrl}}
        </div>
        <div>
          <el-button @click="copyUrl2()" type="primary" size="medium">一键复制</el-button>
        </div>
      </div>
    </div>
  </ion-app>
</template>

<script>
import TopGoback from "./common/TopGoback.vue";
export default {
  name: "Basic",
  components: {
    "t-top-goback": TopGoback
  },
  data() {
    return {
      baseUrl: ''
    };
  },
  created() {
  },
  mounted() {
    this.baseUrl = window.localStorage.getItem('baseUrl')
    console.log(this.baseUrl)
    // window.location.href = this.baseUrl;
    // this.$store.dispatch("GetCode", { paramUrl: window.localStorage.getItem('baseUrl') }).then(v => { console.log(v) })
  },
  methods: {
    copyUrl2: function () {
      var oInput = document.createElement('input');
      oInput.value = this.baseUrl;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = 'oInput';
      oInput.style.display = 'none';
      console.log('复制成功');
    }
  }
};
</script>
<style lang="scss" scoped>
.baseUrl {
    padding: 15px;
    text-align: left;
    word-break: break-all;
}
</style>
