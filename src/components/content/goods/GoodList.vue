<!--  -->
<template id='cpn'>
    <div class="goods">
      <good-list-item v-for="(items,index) in goods" :goods-item="items" :key="index"></good-list-item>
    </div>
</template>

<script>
    import GoodListItem from './GoodListItem'
    export default {
        template:'#cpn',
        //name:'',
        props:{
          goods:{
            type:Array,
            default(){
              return [];
            }
          }
        },
        created(){
        },
        data () {
            return {
            }
        },
        methods:{
        },
        components:{
          GoodListItem
        },
    }
</script>

<style  scoped>
.goods{
  z-index: 8;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding:2px;
}
</style>
