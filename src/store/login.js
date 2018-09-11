const state = {
  name: 'weish',
  age: 22,
  login: false,
  message: '123',
  mutations: {
    switch_status (state) {
      state.login = !state.login
    },
    updateMessage (state, message) {
      state.obj.message = message;
      console.log(state.obj.message)
    }
  },
  actions: {
    switch_status (context) {
      context.commit('switch_status');
    }
  }
};

export default state;
