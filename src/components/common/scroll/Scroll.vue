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
        props:{
          probeType:{
            Type:Number,
            default:0,
          },
          pullUpLoad:{
            Type:Boolean,
            default:false,
          }
        },
        data () {
            return {
              scroll:null,
            }
        },
        methods:{
          scrollTo(x,y,time=500){
            this.scroll && this.scrollTo && this.scroll.scrollTo(x,y,time);
          },
          finishPullUp(){
            this.scroll && this.scroll.finishPullUp();
          },
          refresh(){
           this.scroll && this.scroll.refresh();
          }
        },
        components:{},
        mounted(){
          this.scroll = new Bscroll(this.$refs.homewrapper,{
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,    //这个也会监听scroll
            click:true,
          })

          if(this.probeType === 2 || this.probeTyppe === 3){
            this.scroll.on('scroll',position=>{
            this.$emit('scroll',position);
          })
          }

         if(this.pullUpLoad){
            this.scroll.on("pullingUp",() =>{
              console.log("加载更多")
              this.$emit('pullingUp');
            })
          }
        },
    }
</script>

<style  scoped>

</style>
