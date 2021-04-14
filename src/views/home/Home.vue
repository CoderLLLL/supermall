<!--  -->
<template id='cpn'>
    <div id="home">
      <navbar class="home-nav"><div slot="center">购物街</div></navbar>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommend="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']"></tab-control>
      <ul>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
      </ul>
    </div>
</template>

<script>
    import {getHomeMultidata} from 'network/home'

    import navbar from 'components/common/navbar/NavBar'
    import TabControl from 'components/content/tabControl/TabControl'

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
              dKeyword:[],
              Keywords:[],
            }
        },
        created(){
          getHomeMultidata().then(res =>{
            console.log(res);
            const datas = res.data;
            this.banners = datas.banner.list;
            this.recommends = datas.recommend.list;
            this.dKeyword = datas.dKeyword;
            this.Keywords = datas.keywords;
          })
        },
        methods:{},
        components:{
          navbar,
          TabControl,

          HomeSwiper,
          RecommendView,
          FeatureView,

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
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
  }
</style>
