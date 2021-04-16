<!--  -->
<template id='cpn'>
    <div id="home">
      <navbar class="home-nav"><div slot="center">购物街</div></navbar>
      <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentscroll" :pull-up-load="true" ><!-- @pullingUp="loadMore" -->
          <home-swiper :banners="banners"></home-swiper>
          <recommend-view :recommend="recommends"></recommend-view>
          <feature-view></feature-view>
          <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabclick="tabclick"></tab-control>
          <good-list :goods="showGoods"></good-list>
      </scroll>

      <back-top @click.native="backclick" v-show="isShow"></back-top>
    </div>
</template>

<script>
    import {getHomeMultidata,getHomeGoods} from 'network/home'

    import navbar from 'components/common/navbar/NavBar'
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodList from 'components/content/goods/GoodList'
    import Scroll from 'components/common/scroll/Scroll'
    import BackTop from 'components/content/backtop/BackTop'

    import HomeSwiper from 'views/home/childComps/HomeSwiper'
    import RecommendView from 'views/home/childComps/RecommendView'
    import FeatureView from'views/home/childComps/FeatureView'


    export default {
        template:'#cpn',
        //name:'',
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
              isShow : false,
            }
        },
        created(){
          this.getHomeMultidata();
          this.getHomeGoods('pop');
          this.getHomeGoods('new');
          this.getHomeGoods('sell');


        },
        mounted(){
          const refrech = this.debounce(this.$refs.scroll.refresh,500)
          this.$bus.$on('itemImgeLoad',()=>{
            refrech();
          })
        },
        computed:{
          showGoods(){
            return this.goods[this.currentType].list;
          },

        },
        methods:{
          //防抖
          debounce(func,delay){
            let timer = null;
            return function(...args){
              if(timer) clearTimeout(timer);
              timer = setTimeout(()=>{
                func.apply(this,args)
              },delay)
            }

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
          },
          backclick(){
            this.$refs.scroll.scrollTo(0,0,500)
          },
          contentscroll(position){
            this.isShow = (-position.y) > 1000;
          },
         /*  loadMore(){
            this.getHomeGoods(this.currentType);
            this.$refs.scroll.scroll.refresh();
          }, */
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
              //this.$refs.scroll.finishPullUp();
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
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    position: fixed;
    background-color: var(--color-tint);
    color: white;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
  }
  .tab-control{
    position: sticky;
    top: 44px;
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
