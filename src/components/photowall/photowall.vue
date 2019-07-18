<template>
  <div class="cardContain" v-if="userList[0]">
    <div class="listConn" v-for="(item, index) in  userList" :key="index">
      <div class="bgConn">
        <div class="imgConn">
          <img v-bind:src="item.img" alt="user" class="image heartBeat">
          <div class="loadConn" :class="item.status ? '' : 'isLogin' ">
            <div class="bottom clearfix">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getuserList } from 'api/photowall.js'
export default {
  name: "PhotoWall",
  components: {
  },
  data() {
    return {
      userList: [null]
    };
  },
  created: function() {
    let boo = false;
    this.getUserInfo();
    setTimeout(_ => {
      this.userList[0]['status'] = !!boo;
    }, 3000)
  },
  methods: {
    getUserInfo() {
      return new Promise((resolve, reject) => {
        getuserList().then(res => {
          if (res) {
            this.userList = res.data.items;
          } else {
            this.userList = [];
          }
        })
      }).catch(error => {
        throw error
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.cardContain {
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.listConn {
  padding: 5px 0 0 5px;
  width: 6.125%;
}
.bgConn {
  position: relative;
  color: #fff;
}
.imgConn {
  overflow: hidden;
  position: relative;
}
.loadConn {
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  font-size: .25rem;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  justify-content: flex-end;
}
.isLogin {
  height: 100%;
}
</style>
