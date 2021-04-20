<!--  -->
<template>
    <div>
      <detail-nav-bar></detail-nav-bar>
      <detail-swiper :top-images="topImages"></detail-swiper>
    </div>
</template>

<script>
    import DetailNavBar from './detailComps/DetailNavBar'
    import DetailSwiper from './detailComps/DetailSwiper'

    import {getDetail,Goods} from 'network/detail'

    export default {
        name:'Detail',
        data () {
            return {
              iid:null,
              topImages:[],
              Goods:null,
            }
        },
        created(){
          this.iid = this.$route.params.iid;
          getDetail(this.iid).then(res =>{
            console.log(res);

            const data = res.result;
            this.topImages = data.itemInfo.topImages;
            this.Goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

          })
        },
        activated(){

        },
        deactivated(){
          this.iid = null;
          this.topImages = [];
        },
        methods:{},
        components:{
          DetailNavBar,
          DetailSwiper,
        },
    }
</script>

<style  scoped>

</style>
