import {request} from './request'

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid,
    }
  })
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

//将详情页信息从一大堆数据抽离出来
export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
    this.discountBgColor = itemInfo.discountBgColor
  }
}

//将商品参数信息从一大堆数据抽离出来
export class GoodsParams{
  constructor(info,rule){
    this.image = info.image ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}

//将店铺信息从一大堆数据抽离出来
export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSell
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
    this.realPrice = shopInfo.lowNowPrice;
  }
}
