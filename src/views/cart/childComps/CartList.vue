<!--  -->
<template>
    <div class="cart-list">
      <scroll class="content" ref="scroll">
        <cart-list-item v-for="(item,index) in cartList" :item-info="item" :key="index"></cart-list-item>
      </scroll>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Scroll from 'components/common/scroll/Scroll'
    import CartListItem from './CartListItem'

    export default {
        name:'CartList',
        data () {
            return {
            }
        },
        methods:{},
        computed:{
          ...mapGetters({
            cartList:'cartList',
          })
        },
        components:{
          Scroll,
          CartListItem
        },
        activated(){
          this.$refs.scroll.refresh()
        }
    }
</script>

<style  scoped>
  .cart-list{
    position: relative;
    height: calc(100vh - 44px - 49px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>
