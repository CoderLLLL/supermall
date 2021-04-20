<!--  -->
<template>
    <div>
      <nav-bar>
        <div slot="left" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="" class="back">
        </div>
        <div class="titles" slot="center">
          <div v-for="(item,index) in titles" :key="index" class="titles-item" @click="titleClick(index)" :class="{active:currentIndex === index}">{{item}}</div>
        </div>
    </nav-bar>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    export default {
        //name:'',
        data () {
            return {
              titles:['商品','参数','评论','推荐'],
              currentIndex:0,
            }
        },
        methods:{
          titleClick(index){
            this.currentIndex = index;
          },
          backClick(){
            this.$router.back();
          }
        },
        components:{
          NavBar,
        },
    }
</script>

<style  scoped>
  .titles{
    display: flex;
    font-size: 12px;
    line-height: 44px;
  }
  .titles-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .back{
    margin-top: 10px;
  }
</style>
