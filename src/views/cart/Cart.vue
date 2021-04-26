<!--  -->
<template>
    <div class="cart">
      <nav-bar class="nav-bar">
        <div slot="center">购物车({{length}})</div>
      </nav-bar>

      <cart-list></cart-list>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar';
    import CartList from './childComps/CartList'

    import { mapGetters } from 'vuex'

    export default {
        name:'Cart',
        data () {
            return {
            }
        },
        methods:{},
        computed:{
          /* cartLength(){
            //return this.$store.state.cartList.length
            //return this.$store.getters.cartLength
          } */

          //两种语法
          //...mapGetters(['cartLength','carList'])
          ...mapGetters({
            length:'cartLength',
            list:'carList',
          })
        },
        components:{
          NavBar,
          CartList
        },
    }
</script>

<style  scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: white;
  }
</style>
