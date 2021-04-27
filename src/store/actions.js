//import { reject, resolve } from 'core-js/fn/promise'
import {ADD_COUNTER,ADD_TO_CART} from './mutation-type'

export default {
  addCarts(context,payload){
   return new Promise((resolve,reject) =>{
      /* let oldProduct = null;
      for(let item of state.carList){
        if(item.id === payload.iid){
          oldProduct = item;
        }
      } */
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);

      if(oldProduct){
        context.commit(ADD_COUNTER,oldProduct)
        resolve('当前的商品数量+1')
      }
      else{
        payload.count = 1;
        context.commit(ADD_TO_CART,payload)
        resolve('添加了新的商品数量')
      }
    })
  }
}
