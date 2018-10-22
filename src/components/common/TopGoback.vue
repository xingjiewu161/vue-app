<template>
    <header class="flex jc-bw p-row-0 p-10 top-goback">
        <span @click="goBack()">
          <span class="el-icon-arrow-left"></span> back
        </span>
    </header>
</template>

<script>
export default {
  name: "TopGoback",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.back(-1);
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
