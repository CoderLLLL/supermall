<!--  -->
<template id='cpn'>
    <div>
    <div class="recommend">
      <div v-for="item in recommend" class="recommenditem">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        template:'#cpn',
        //name:'',
        props:{
          recommend:{
            type:Array,
            default(){
              return [];
            }
          }
        },
        data () {
            return {
            }
        },
        methods:{},
        components:{},
    }
</script>

<style  scoped>
 .recommend{
   display: flex;
   width: 100%;
   text-align: center;
   padding: 10px 0 20px;
   font-size: 12px;
   border-bottom: 10px solid #eee;
 }
 .recommenditem{
   flex: 1;
 }
 .recommenditem img{
   width: 70px;
   height: 70px;
  margin-bottom: 10px;
 }
</style>
