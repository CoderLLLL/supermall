<!--  -->
<template id='cpn' >
    <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot></slot name="right"></div>
    </div>
</template>

<script>
    export default {
      template:'#cpn',
        //name:'',
        data () {
            return {
            }
        },
        methods:{},
        components:{},
    }
</script>

<style  scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .left,.right{
    width: 60px;
    background-color: blue;
  }
  .center{
    flex: 1;
    background-color: red;
  }
</style>
