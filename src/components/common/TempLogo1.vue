<template>
    <header>
        <img :src="src">
    </header>
</template>

<script>
export default {
  name: 'TempLogo1',
  props: {
    src: String
  },
  computed: {
    imageUrl() {
      return this.src ? this.src : './../../../static/images/login.png';
    }
  }
}
</script>

<style lang="scss" scoped>
img {
    width: 200px;
    height: 200px;
}

header {
    padding-top: 40px;
}
</style>
