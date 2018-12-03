<template>
    <header class="flex jc-bw p-row-0 p-10 top-goback">
        <span @click="goBack()">
          <span class="el-icon-arrow-left"></span> 返回
        </span>
    </header>
</template>

<script>
export default {
  name: "TopGoback",
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.replace(this.url);
    }
  }
};
</script>

<style lang="scss" scoped>
.top-goback {
  padding: 10px;
  font-size: 0.9rem;
}
</style>
