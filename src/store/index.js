import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    carList:[],
  },
  getter:{},
  mutations:{
    addCounter(state,payload){
      payload.count++
    },
    addToCart(state,payload){
      state.carList.push(payload)
    },
  },
  actions:{
    addCart(context,payload){
      /* let oldProduct = null;
      for(let item of state.carList){
        if(item.id === payload.iid){
          oldProduct = item;
        }
      } */

      let oldProduct = context.state.carList.find(item => item.iid === payload.iid);

      if(oldProduct){
        //oldProduct.count += 1;
        context.commit('addCounter',oldProduct)
      }
      else{
        state.carList.count = 1;
        //state.carList.push(payload);
        context.commit('addToCart',oldProduct)
      }

    }
  }
})

export default store;
