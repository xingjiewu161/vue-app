export default {
  isLogin: false,
  userinfo: {
    UserForm: {
      username: '',
      password: ''
    }
  },
  mutations: {
    logined (val) {
      this.isLogin = val
    }
  },
  actions: {
  }
};
