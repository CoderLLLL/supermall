<!--  -->
<template>
    <div class="back-top">
      <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name:'BackTop',
        data () {
            return {
            }
        },
        methods:{},
        components:{},
    }
</script>

<style  scoped>
  .back-top{
    position: absolute;
    z-index: 10;
    right: 8px;
    bottom: 55px;
  }
  .back-top img{
    width: 43px;
    height: 43px;
  }
</style>
