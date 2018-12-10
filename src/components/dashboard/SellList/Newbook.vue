
<template>
    <div v-if="newbooks[0]">
      <div class="card fl-row" v-for="(item,index) in newbooks" :key="index">
        <div class="car-left">
          <div class="car-image">
            <img v-bind:src="item.url" alt="book" />
          </div>
        </div>
        <div class="car-right pd-l10 fl-col">
          <div class="car-title wf flex">{{item.title}}</div>
          <div class="car-author wf flex pd-t5">{{item.author}}</div>
          <div class="car-core wf flex pd-t5">豆瓣：{{item.core}} 分</div>
          <div class="car-right-bot wf flex">
            <div class="bot-price">
              <span>到手价:</span>
              <span class="price">{{item.price}}元</span>
            </div>
            <div class="bot-car" v-bind:data="item.id">
              <img v-bind:src="item.car" alt="car" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { getNewBook } from 'api/dashboard.js'
// 高分
export default {
  name: "Newbook",
  data() {
    return {
      newbooks: [null]
    };
  },
  created: function() {
    this.loadBookList();
  },
  methods: {
    loadBookList() {
      return new Promise((resolve, reject) => {
        getNewBook().then(res => {
          if (res) {
            this.newbooks = this.shuffle(res.data.items);
          } else {
            this.newbooks = [];
          }
          // this.newbooks = res ? [...res.data.items] : [];
          setTimeout(_ => {
            resolve({isLoad: true})
          }, 2000)
        })
      }).catch(error => {
        throw error
      })
    },
    shuffle (arr) {
      let i = arr.length;
      while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
      return arr;
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  margin: 0 0 2px 0;
  padding: 5px 0 5px 5px;
  background-color: #fff;
  .car-right {
    align-items: flex-start;
    flex: auto;
    .car-title {
      color: #000;
      font-size: 1rem;
    }
    .car-author {
      color: #707070;
      font-size: .8rem;
    }
    .car-core {
      color: #cd1717;
      font-size: .8rem;
    }
    .car-right-bot {
      justify-content: space-between;
      padding-top: 3px;
      padding-right: 15px;
      .bot-price {
        .price {
          font-size: 1.2rem;
          color: #448aff;
        }
      }
    }
  }
}
</style>
