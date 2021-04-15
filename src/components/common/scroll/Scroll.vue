<!--  -->
<template id='cpn'>
    <div class="wrapper" ref="homewrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import Bscroll from 'better-scroll'
    export default {
        template:'#cpn',
        //name:'',
        data () {
            return {
              scrol:null,
            }
        },
        methods:{},
        components:{
          Scroll,
        },
        mounted(){
          this.scroll = new Bscroll(this.$refs.homewrapper,{
            probeType:3,
            pullUpLoad:true,
          })

          this.scroll.on('scroll',position=>{
            //console.log(position);
          })

          this.scroll.on("pullingUp",() =>{
            console.log("加载更多")

            this.scroll.finishPullUp()
          })
        },
    }
</script>

<style  scoped>

</style>
