<!--  -->
<template>
    <div id="detail">
      <detail-nav-bar class="detail-nav"></detail-nav-bar>
      <scroll class="content" ref="scroll">
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        <detail-param-info :paramInfo="paramInfo"></detail-param-info>
        <detail-comment-info :commentInfo=" commentInfo"></detail-comment-info>
      </scroll>
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailGoodsInfo from './childComps/DetailGoodsInfo'
    import DetailParamInfo from './childComps/DetailParamInfo'
    import DetailCommentInfo from './childComps/DetailCommentInfo'

    import Scroll from 'components/common/scroll/Scroll'

    import {getDetail,Goods,Shop,GoodsParams} from 'network/detail'

    export default {
        name:'Detail',
        data () {
            return {
              iid:null,
              topImages:[],
              goods:{},
              shop:{},
              detailInfo:{},
              paramInfo:{},
              commentInfo:{},
            }
        },
        created(){
          //保存转入的iid
          this.iid = this.$route.params.iid;
          //根据iid请求详情页数据
          getDetail(this.iid).then(res =>{
            console.log(res);
            const data = res.result;
            this.topImages = data.itemInfo.topImages;

            //获取商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
            //获取店铺信息
            this.shop = new Shop(data.shopInfo);
            //保存商品的详情数据
            this.detailInfo = data.detailInfo;
            //获取商品参数信息
            this.paramInfo = new GoodsParams(data.itemParams.info,data.itemParams.rule);
            //获取商品评价信息
            if(data.rate.cRate !== 0){
              this.commonInfo = data.rate.list[0];
            }
          })
        },
        activated(){
          this.$refs.scroll.refresh();
        },
        deactivated(){
          this.iid = null;
          this.topImages = [];
        },
        methods:{
          imageLoad(){
            this.$refs.scroll.refresh();
          }
        },
        components:{
          DetailNavBar,
          DetailSwiper,
          DetailBaseInfo,
          DetailShopInfo,
          DetailGoodsInfo,
          DetailParamInfo,
          DetailCommentInfo,
          Scroll
        },
    }
</script>

<style  scoped>
  #detail{
    position: relative;
    z-index: 10;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav{
    position: relative;
    z-index: 10;
    background-color: white;
  }
  .content{
    height: calc(100% - 44px);
  }
</style>
