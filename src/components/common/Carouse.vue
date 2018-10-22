<template>
  <el-carousel  v-if="carouse[0]" :interval="5000" arrow="always" height="125px">
        <el-carousel-item v-for="(item,index) in carouse" :key="index">
            <h3><img v-bind:src="item.url" alt="carouse" /></h3>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import { getCarouse } from "api/dashboard.js";
export default {
  name: "Carouse",
  data() {
    return {
      carouse: [null]
    };
  },
  created: function() {
    getCarouse().then(res => {
      this.carouse = res ? [...res.data.items] : [];
    });
  }
};
</script>

<style lang="scss" scoped>
$height: 125px;
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
</style>
