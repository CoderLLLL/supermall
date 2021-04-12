<!--  -->
<template id='cpn'>
    <div>
      <tab-bar>
        <tab-bar-item path="/home" barcolor="blue">
          <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="">
          <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" barcolor="green">
          <img slot="item-icon" src="../../../assets/img/tabbar/category.svg" alt="">
          <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="">
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cate"  barcolor="yellow">
          <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg" alt="">
          <img slot="item-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/Profile"  barcolor="skyblue">
          <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg" alt="">
          <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
          <div slot="item-text">用户</div>
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>
    import tabBar from '../../common/tabbar/TabBar'
    import tabBarItem from '../../common/tabbar/TabBarItem'
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
