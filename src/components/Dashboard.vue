<template>
  <div id="title-info" class='hello'>
    <h1>{{ msg }}</h1>
    <h2>hello {{user}} this is dashboard</h2>
    <h1>{{details(user)}}</h1>
    <h1>{{$route.params.id}}</h1>
    <router-link to='/'>退出</router-link>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data () {
    return {
      msg: "sometimes never sometimes ever",
      user: "hengji",
      id: 123
    };
  },
  methods: {
    details: user => {
      return user + "世界那么大。你还是老老实实工作吧！出去浪烧钱！";
    }
  },
  reverseName: name => {
    return name.reverse();
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->

<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  >li {
    display: inline-block;
    margin: 0 10px;
  }
}
a {
  color: #42b983;
}
</style>
