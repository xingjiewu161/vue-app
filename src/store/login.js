const state = {
  userinfo: {
    UserForm: {
      username: '',
      password: ''
    }
  },
  isLogin: false,
  mutations: {
    logined (state, val) {
      state.isLogin = val
    }
  },
  actions: {
  }
};

export default state;
