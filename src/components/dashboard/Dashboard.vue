<template>
    <el-main class="main">
      <div class="fix-top">
          <t-carouse></t-carouse>
          <div class="fl-row pd-5">
            <el-button class="bg-gray fl-gold-b mg-r5" icon="el-icon-location" size="small">地址</el-button>
            <el-input class="fl-auto" placeholder="请输入内容" prefix-icon="el-icon-search" size="small"></el-input>
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
      </div>
      <div class="group-list" v-drag="{opacity: '0', zIndex: '0', top: '-4%'}">
           <div class="loader">
            <svg version="1.1" id="loader-one" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              width="40px" height="40px" background="#ffffff" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <path fill="#ffffff" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
              <animateTransform attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
          <t-tabs :options="{ useUrlFragment: false, defaultTabHash: 'newbook' }" v-on:changed="selectedTab" ref="child">
            <t-tab name="上新" id="newbook">
              <t-newbook class="animated slideInLeft faster book-conn"></t-newbook>
            </t-tab>
            <t-tab name="高分" id="heightscroll">
              <t-sellbook class="animated slideInLeft faster book-conn"></t-sellbook>
            </t-tab>
            <t-tab name="销量" id="heightsell">
              <t-scorebook class="animated slideInLeft faster book-conn"></t-scorebook>
            </t-tab>
          </t-tabs>
      </div>
    </el-main>
</template>

<script>
import Carouse from "./../common/Carouse.vue"
import TopGoback from "./../common/TopGoback.vue"
import Tabs from "./../common/tabs/Tabs.vue"
import Tab from "./../common/tabs/Tab.vue"
import Newbook from "./SellList/Newbook.vue"
import HeightSellbook from "./SellList/HeightSellbook.vue"
import HeightScorebook from "./SellList/HeightScorebook.vue"
export default {
  name: "Dashboard",
  components: {
    "t-carouse": Carouse,
    "t-top-goback": TopGoback,
    "t-tabs": Tabs,
    "t-tab": Tab,
    "t-newbook": Newbook,
    't-sellbook': HeightSellbook,
    't-scorebook': HeightScorebook
  },
  data() {
    return {
      tabIndex: 0,
      currentComponent: '#newbook',
      tabList: [
        // 新上架 高分 销量
        {
          index: 0,
          name: '新上架',
          component: 'one'
        },
        {
          index: 1,
          name: '高分',
          component: 'second'
        },
        {
          index: 2,
          name: '销量',
          component: 'third'
        }
      ],
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
          name: "全球时尚圣经《VOGUE》第123期",
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
    }
  },
  mounted() {
  },
  methods: {
    selectedTab (tab) {
      this.currentComponent = tab.tab.hash;
      this.tabIndex = tab.index;
    }
  },
  directives: {
    drag: {
      inserted: function (el, bidding) {
        console.log(el, bidding, bidding.value.opacity, bidding.value.top)
        let oDiv = el;
        oDiv.ontouchstart = function () {
          console.log(oDiv)
          document.ontouchmove = function (ev) {
            console.log('ontouchmove', ev)
            // ev.preventDefault();
            // let disX = ev.clientX - oDiv.offsetLeft;
            // let disY = ev.clientY - oDiv.offsetTop;
            // let l = ev.clientX - disX;
            // let t = ev.clientY - disY;
          };
          document.ontouchend = function () {
            console.log('onmouseup')
            document.onmousemove = null;
            document.onmouseup = null;
          };
        }
      }
    }
  }
}
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
.group-item {
  display: flex;
  overflow: hidden;
  .inner-group {
    width: 60rem;
    overflow-x: auto;
    display: flex;
    flex-flow: row nowrap;
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
.book-conn {
  background: #f8f6f6;
}
.group-list {
  position: relative;
  .loader {
    top: -4%;
    z-index: -1;
    left: 50%;
    opacity: 0;
    width: 100%;
    position: absolute;
    text-align: center;
    transform: translate(-50%,-50%);
    #loader-one {
      background: rgba(255, 106, 0, 1);
      border-radius: 50%;
      width: 33px;
      height: 33px;
    }
  }
}
footer button.md-button /deep/ .md-bottom-bar-label {
  color: #707070;
}
footer button.md-button.md-active /deep/ .md-bottom-bar-label {
  color: #409eff;
}
/deep/ .md-tabs-indicator.md-tabs-indicator-left {
  background-color: #448aff;
  background-color: var(--md-theme-demo-dark-primary-on-background, #448aff);
}
</style>
