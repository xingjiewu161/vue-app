<template>
  <div class="out-container">
    <div class="das-container">
      <t-top-goback></t-top-goback>
      <el-main class="main">
        <t-arouse></t-arouse>
        <div class="fl-row pd-5">
          <el-button class="bg-gray fl-gold-b mg-r5" icon="el-icon-location">地址</el-button>
          <el-input class="fl-auto" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
        </div>
        <div class="group-item">
          <div class="inner-group">
             <div class="item" v-for="(book, index) in books" :key="book.id" :index="index" :book="book">
              <div class="media">
                <img src="/static/images/shanghai1.jpg" alt="People">
              </div>
              <div class="title">
                <div>{{book.name}}</div>
                <div>{{book.number}}本书</div>
              </div>
            </div>
          </div>
        </div>
        <div class="group-list">
          <md-tabs class="md-transparent" md-alignment="fixed">
            <md-tab id="tab-home" md-label="新上架">
              <p>122</p>
            </md-tab>
            <md-tab id="tab-posts" md-label="高分"></md-tab>
            <md-tab id="tab-favorites" md-label="销量"></md-tab>
          </md-tabs>
          <md-card>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Media card</div>
                <div class="md-subhead">Normal size</div>
              </md-card-header-text>
              <md-card-media>
                <img src="/static/images/shanghai1.jpg" alt="People">
              </md-card-media>
            </md-card-header>
            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
          <md-card>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Media card</div>
                <div class="md-subhead">Normal size</div>
              </md-card-header-text>
              <md-card-media>
                <img src="/static/images/shanghai1.jpg" alt="People">
              </md-card-media>
            </md-card-header>
            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
          <md-card>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Media card</div>
                <div class="md-subhead">Normal size</div>
              </md-card-header-text>
              <md-card-media>
                <img src="/static/images/shanghai1.jpg" alt="People">
              </md-card-media>
            </md-card-header>
            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
        </div>
      </el-main>
    </div>
    <footer>
        <md-bottom-bar md-sync-route>
          <md-bottom-bar-item md-label="Home" md-icon="/static/icons/home1.svg"></md-bottom-bar-item>
          <md-bottom-bar-item md-label="Mine" md-icon="/static/icons/mine1.svg"></md-bottom-bar-item>
        </md-bottom-bar>
    </footer>
  </div>
</template>

<script>
import Home from "./home/Home.vue";
import Carouse from "./common/Carouse.vue";
import TopGoback from "./common/TopGoback.vue";
export default {
  name: "Dashboard",
  components: {
    "t-home": Home,
    "t-arouse": Carouse,
    "t-top-goback": TopGoback
  },
  data() {
    return {
      books: [
        {
          id: 1,
          name: "卡勒德·胡赛尼《追风筝的人》",
          number: 2
        },
        {
          id: 2,
          name: "玛格丽特·米切尔《飘》",
          number: 4
        },
        {
          id: 3,
          name: "莫言《生死疲劳》",
          number: 1
        },
        {
          id: 4,
          name: '全球时尚圣经《VOGUE》第123期',
          number: 1
        },
        {
          id: 5,
          name: "玛格丽特·米切尔《飘》",
          number: 1
        },
        {
          id: 6,
          name: "玛格丽特·米切尔《飘》",
          number: 1
        }
      ]
    };
  },
  methods: {
    details: user => {
      return user;
    },
    getCurrentTab(e) {
      console.log(e, "bar", "123");
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
  justify-content: center;
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
</style>
