
<template>
    <div v-if="sellbooks[0]">
      <div class="card fl-row" v-for="(item,index) in sellbooks" :key="index">
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
// 高分
import { getSellBook } from 'api/dashboard.js'
export default {
  name: "HeightSellbook",
  data() {
    return {
      sellbooks: [null]
    };
  },
  created() {
    getSellBook().then(res => {
      this.sellbooks = res ? [...res.data.items] : [];
    });
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
