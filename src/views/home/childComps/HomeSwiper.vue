<!--  -->
<template id='cpn'>
    <div>
      <swiper>
        <SwiperItem v-for="(item,index) in banners" :key="index" >
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imageLoad">
          </a>
        </SwiperItem>
      </swiper>
    </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
    export default {
        props:{
          banners:{
            type:Array,
            default(){
              return[]
            }
          }
        },
        template:'#cpn',
        //name:'',
        data () {
            return {
              isLoad:false,
            }
        },
        methods:{
          imageLoad(){
            if(!this.isLoad){
              this.$emit('swiperImageLoad');
            }
            this.isLoad = true;
          }
        },
        components:{
          Swiper,
          SwiperItem,
        },
    }
</script>

<style  scoped>

</style>
