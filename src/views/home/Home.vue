<!--  -->
<template id='cpn'>
    <div>
      <navbar class="home-nav"><div slot="center">购物街</div></navbar>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
    </div>
</template>

<script>
    import navbar from 'components/common/navbar/NavBar'

    import {getHomeMultidata} from 'network/home'
    import HomeSwiper from 'views/home/childComps/HomeSwiper'
    import RecommendView from 'views/home/childComps/RecommendView'

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
          HomeSwiper,
          RecommendView,
        },
    }
</script>

<style  scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>
