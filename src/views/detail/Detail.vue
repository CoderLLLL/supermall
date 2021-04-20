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

    import {getDetail} from 'network/detail'

    export default {
        name:'Detail',
        data () {
            return {
              iid:null,
              topImages:[],
            }
        },
        created(){
          this.iid = this.$route.params.iid;
          getDetail(this.iid).then(res =>{
            console.log(res);
            this.topImages = res.result.itemInfo.topImages;
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
