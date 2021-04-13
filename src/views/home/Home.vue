<!--  -->
<template id='cpn'>
    <div>
      <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    </div>
</template>

<script>
    import navbar from 'components/common/navbar/NavBar'
    import {getHomeMultidata} from 'network/home'

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
        },
    }
</script>

<style  scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>
