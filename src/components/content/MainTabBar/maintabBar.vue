<!--  -->
<template id='cpn'>
    <div>
      <tab-bar>
        <tab-bar-item path="/home" barcolor="blue">
          <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/classt" barcolor="green">
          <img slot="item-icon" src="~assets/img/tabbar/classification.png" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/classification_active.png" alt="">
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/shop"  barcolor="yellow">
          <img slot="item-icon" src="~assets/img/tabbar/shoppingcart.png" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/shoppingcart_active.png" alt="">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/user"  barcolor="skyblue">
          <img slot="item-icon" src="~assets/img/tabbar/user.png" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/user_active.png" alt="">
          <div slot="item-text">用户</div>
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>
    import tabBar from '~components/common/tabbar/TabBar'
    import tabBarItem from '~components/common/tabbar/TabBarItem'
    export default {
        template:'#cpn',
        name:'maintabBar',
        data () {
            return {
            }
        },
        methods:{},
        components:{
          tabBar,
          tabBarItem,
        },
    }
</script>

<style  scoped>

</style>
