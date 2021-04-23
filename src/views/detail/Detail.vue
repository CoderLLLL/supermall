<!--  -->
<template>
    <div id="detail">
      <detail-nav-bar class="detail-nav" @titleClick="titleClick"></detail-nav-bar>
      <scroll class="content" ref="scroll">
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        <detail-param-info ref="params" :paramInfo="paramInfo"></detail-param-info>
        <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
        <goods-list ref="recommend" :goods="recommend"></goods-list>
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
    import GoodsList from 'components/content/goods/GoodList'

    import Scroll from 'components/common/scroll/Scroll'

    import {getDetail,getRecommend,Goods,Shop,GoodsParams} from 'network/detail'
    import {debounce} from 'common/utils'
    import {itemListenerMxinin} from 'common/mixin'

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
              recommend:[],
              themeTopYs:[],
              getthemeTopY:null,
            }
        },
        mixins:[itemListenerMxinin],
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
              this.commentInfo = data.rate.list[0];
            }

            getRecommend().then(res =>{
              this.recommend = res.data.list;
            })

            /* //下一帧,就是当当前函数传给子组件的值DOM加载完毕后（不包括），再执行的函数
            this.$nextTick(()=>{
              this.themeTopYs = []
              this.themeTopYs.push(0)
              this.themeTopYs.push(this.$refs.params.$el.offsetTop)
              this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
              this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
              console.log(this.themeTopYs);
            }) */
          })
        },

        mounted(){

        },
        activated(){
          this.$refs.scroll.refresh();
        },
        destroyed(){
          this.$bus.$off('itemImgeLoad',this.ItemImgListener)
        },
        /* updated(){
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
          console.log(this.themeTopYs);
        }, */
        methods:{
          imageLoad(){
            this.$refs.scroll.refresh();

            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.params.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
            console.log(this.themeTopYs);
            //this.refresh; //方法二

            //因为方法一已经做过函数防抖了，所以不需要再做一次函数防抖了
            /*this.getthemeTopY = debounce(()=>{
              this.themeTopYs = []
              this.themeTopYs.push(0)
              this.themeTopYs.push(this.$refs.params.$el.offsetTop)
              this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
              this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
              console.log(this.themeTopYs);
            })*/
          },
          titleClick(index){
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500)
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
          Scroll,
          GoodsList,
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
