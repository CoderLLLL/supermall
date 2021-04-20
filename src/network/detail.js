import {request} from './request'

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid,
    }
  })
}


export class Goods{
  constructor(itemInfo,columns,serivces){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.serivces = serivces
    this.realPrice = itemInfo.lowNowPrice
  }
}
