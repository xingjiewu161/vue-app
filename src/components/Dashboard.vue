<template>
  <el-container class="das-container">
    <header class="flex jc-bw p-r0">
      <span @click="goBack()">
        <span class="el-icon-arrow-left"></span>back
      </span>
    </header>
    <el-main class="carousel">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-main>
    <footer>Footer</footer>
    <span></span>
  </el-container>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      id: 123
    };
  },
  methods: {
    details: user => {
      return user;
    },
    goBack() {
      console.log("go back");
    }
  }
};
</script>
<style lang="scss" scoped>
.das-container {
  height: 100%;
  >span {
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
}
.el-footer {
  display: inline-block;
  vertical-align: bottom;
}
.el-header {
  color: #333;
  line-height: 3rem;
}
.carousel {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
