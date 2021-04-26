<!--  -->
<template >
    <div id="home">
      <navbar class="home-nav"><div slot="center">购物街</div></navbar>
      <tab-control v-show="isTabFixed" class="tab-control" :titles="['流行','新款','精选']" @tabclick="tabclick" ref="tabControl1"></tab-control>
      <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentscroll" @pullingUp="loadMore" :pull-up-load="true">
          <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
          <recommend-view :recommend="recommends"></recommend-view>
          <feature-view></feature-view>
          <tab-control  :titles="['流行','新款','精选']" @tabclick="tabclick" ref="tabControl2"></tab-control>
          <good-list :goods="showGoods"></good-list>
      </scroll>

      <back-top @click.native="backclick" v-show="isShow"></back-top>
    </div>
</template>

<script>
    import {getHomeMultidata,getHomeGoods} from 'network/home'
    import {debounce} from 'common/utils'
    import {itemListenerMxinin,BackTopMixin} from 'common/mixin'

    import navbar from 'components/common/navbar/NavBar'
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodList from 'components/content/goods/GoodList'
    import Scroll from 'components/common/scroll/Scroll'
    import BackTop from 'components/content/backtop/BackTop'

    import HomeSwiper from 'views/home/childComps/HomeSwiper'
    import RecommendView from 'views/home/childComps/RecommendView'
    import FeatureView from'views/home/childComps/FeatureView'


    export default {
        name:'Home',
        data () {
            return {
              banners:[],
              recommends:[],
              //dKeyword:[],
              //Keywords:[],
              goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]},
              },
              currentType:'pop',
              //isShow : false,
              taboffsetTop:0,
              isTabFixed:false,
              saveY:0,
            }
        },
        mixins:[itemListenerMxinin,BackTopMixin],
        created(){
          this.getHomeMultidata();
          this.getHomeGoods('pop');
          this.getHomeGoods('new');
          this.getHomeGoods('sell');
        },
        activated(){
          this.$refs.scroll.refresh();
        },
        mounted(){
        },
        activated(){
          this.$refs.scroll.scrollTo(0,this.saveY,0);
          this.$refs.scroll.refresh();
        },
        deactivated(){
          this.saveY = this.$refs.scroll.getScrollY();  //在视频中bs有无法保存当前位置的bug，但是现在修复了
          this.$bus.$off('itemImgeLoad',this.ItemImgListener) //因为已经离开了home页面，不需要detail组件里面的刷新事件做监听了
        },
        computed:{
          showGoods(){
            return this.goods[this.currentType].list;
          },
        },
        methods:{
          swiperImageLoad(){
            this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop;
          },
          //事件监听
          tabclick(index){
            switch(index){
              case 0:
                this.currentType = 'pop';
                break
              case 1:
                this.currentType = 'new';
                break
              case 2:
                this.currentType = 'sell';
                break
            }
            this.$refs.tabControl1.currentIndex = index;
            this.$refs.tabControl2.currentIndex = index;
          },
          /* backclick(){
            this.$refs.scroll.scrollTo(0,0,500)
          }, */
          contentscroll(position){
            //this.isShow = (-position.y) > 1000;
            this.listenShowBackTop(position)
            this.isTabFixed = (-position.y) > this.taboffsetTop;
          },
          loadMore(){
            this.getHomeGoods(this.currentType);
            this.$refs.scroll.scroll.refresh();
          },
          //网络请求
          getHomeMultidata(){
            getHomeMultidata().then(res =>{
              const datas = res.data;
              this.banners = datas.banner.list;
              this.recommends = datas.recommend.list;
              //this.dKeyword = res.data.dKeyword;
              //this.Keywords = res.data.keywords;
            });
          },
          getHomeGoods(type){
            const page = this.goods[type].page + 1;
            getHomeGoods(type,page).then(res =>{
              this.goods[type].list.push(...res.data.list)
              /* for(let n of res.data.list){
                this.goods[type].list.push(n)
              } */
              this.goods[type].page++;
              this.$refs.scroll.finishPullUp();
            })
          }
        },
        components:{
          navbar,
          TabControl,

          HomeSwiper,
          RecommendView,
          FeatureView,
          GoodList,
          Scroll,
          BackTop,
        },
    }
</script>

<style  scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .home-nav{

    background-color: var(--color-tint);
    color: white;
/*     position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0; */
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
  /* .content{
    height: 100%;
    overflow: hidden;
  } */
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>
