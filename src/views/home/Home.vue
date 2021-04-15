<!--  -->
<template id='cpn'>
    <div id="home">
      <navbar class="home-nav"><div slot="center">购物街</div></navbar>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommend="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabclick="tabclick"></tab-control>
      <good-list :goods="showGoods"></good-list>

    </div>
</template>

<script>
    import {getHomeMultidata,getHomeGoods} from 'network/home'

    import navbar from 'components/common/navbar/NavBar'
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodList from 'components/content/goods/GoodList'

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
            }
        },
        created(){
          this.getHomeMultidata();
          this.getHomeGoods('pop');
          this.getHomeGoods('new');
          this.getHomeGoods('sell');
        },
        computed:{
          showGoods(){
            return this.goods[this.currentType].list;
          }
        },
        methods:{
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
              //this.goods[type].list.push(res.data.list[0])
              for(let n of res.data.list){
                this.goods[type].list.push(n)
              }
              this.goods[type].page++;
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

        },
    }
</script>

<style  scoped>
  #home{
    padding-top: 44px;
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
</style>
