<template>
  <div class="out-container">
    <div class="das-container">
      <header class="flex jc-bw p-row-0 p-10">
        <span @click="goBack()">
          <span class="el-icon-arrow-left"></span> Back
        </span>
      </header>
      <el-main class="carousel">
        <el-carousel  v-if="carouse[0]" :interval="5000" arrow="always" height="125px">
            <el-carousel-item v-for="(item,index) in carouse" :key="index">
              <h3><img v-bind:src="item.url" alt="carouse" /></h3>
            </el-carousel-item>
        </el-carousel>
        <md-button class="md-raised md-primary" v-md-theme="'green'">绿色</md-button>
      </el-main>
    </div>
    <footer>
      <md-bottom-bar>
        <!-- <md-bottom-bar-item md-icon-src="static/icons/home.svg">Recents</md-bottom-bar-item>
        <md-bottom-bar-item md-icon-src="/static/icons/tab_personal.svg">Nearby</md-bottom-bar-item> -->
        <md-bottom-bar-item md-icon="history">最近</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="favorite" md-active>喜欢</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="near_me">附近</md-bottom-bar-item>
      </md-bottom-bar>
    </footer>
  </div>
</template>

<script>
import { getCarouse } from "api/dashboard.js";

export default {
  name: "Dashboard",
  data() {
    return {
      carouse: [null]
    };
  },
  created: function() {
    getCarouse().then(res => {
      console.log(res.data.items);
      this.carouse = res ? [...res.data.items] : [];
    });
  },
  methods: {
    details: user => {
      return user;
    },
    goBack() {
      this.$router.back(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
$height: 125px;
.out-container {
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  .das-container {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    > span {
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
    padding: 0;
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      height: $height;
      margin: 0;
      img {
        height: 100%;
      }
    }
  }
}
</style>
