<template>
  <div class="out-container">12133</div>
</template>

<script>
// import TopGoback from "./common/TopGoback.vue";
export default {
  name: "Carousel",
  components: {
    // "t-top-goback": TopGoback
  },
  data() {
    return {
      dashboard: '/static/icons/svg/home1.svg',
      center: '/static/icons/svg/mine1.svg'
    };
  },
  mounted() {
    this.home(1, '/basic', null)
  },
  methods: {
    details: user => {
      return user;
    },
    home(type, url, el) {
      this.dashboard = `/static/icons/svg/home${type === 2 ? type - 1 : type + 1}.svg`
      this.center = `/static/icons/svg/mine${type}.svg`
      type === 1 ? this.$router.push({ path: "/basic" }) : this.$router.push({ path: "/basic/mine" })
    }
  }
};
</script>
<style lang="scss" scoped>
$height: 6.25rem;
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
  .el-header {
    color: #333;
    line-height: 3rem;
  }
  .main {
    padding: 0;
  }
  .bg-gray {
    background-color: #f3f3f4;
  }
}
footer button.md-button /deep/ .md-bottom-bar-label {
  color: #707070;
}
footer button.md-button.md-active /deep/ .md-bottom-bar-label {
  color: #409eff;
}
.group-item {
  display: flex;
  overflow: hidden;
  .inner-group {
    width: 60rem;
    overflow-x: auto;
    display: flex;
    flex-flow: row nowrap;
    padding: 0 0.25rem;
    display: -webkit-box;
    .item {
      width: 8rem;
      height: 4.5rem;
      position: relative;
      margin-right: 0.25rem;
      .media {
        position: relative;
        overflow: hidden;
        border-radius: 0.35rem;
        &::before {
          width: 100%;
          padding-top: 56.25%;
          display: block;
          content: " ";
        }
        img {
          position: absolute;
          top: 50%;
          right: 0;
          left: 0;
          transform: translateY(-50%);
        }
      }
      .title {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        display: flex;
        flex-direction: column;
        color: #fff;
        font-size: 0.75rem;
        background: rgba(0, 0, 0, 0.4);
        height: 100%;
        width: 100%;
        border-radius: 0.35rem;
        align-items: flex-start;
        text-align: left;
        padding: 5px;
      }
    }
  }
}
.md-bottom-bar.md-type-fixed .md-bottom-bar-item {
  max-width: 50%;
}
</style>
