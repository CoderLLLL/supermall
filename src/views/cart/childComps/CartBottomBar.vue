<!--  -->
<template>
    <div class="bottom-bar">
      <div class="check-content">
        <check-button :is-checked="isSelectAll" @click.native="checkClick(isSelectAll)" class="check-button"></check-button>
        <div class="check-text">全选</div>
      </div>

      <div  class="check-text price">合计:￥{{totalPrice}}</div>

      <div class="calculte" @click="calcClick">去计算({{checkLength}})</div>
    </div>
</template>

<script>
    import CheckButton from 'components/content/checkButton/CheckButton'
    import { mapGetters } from 'vuex'

    export default {
        name:'',
        data () {
            return {
            }
        },
        methods:{
          checkClick(isSelectAll){
            if(isSelectAll){
              /* for(let item of this.cartList){
              item.checked = false
              } */
              this.cartList.forEach(item => item.checked = false)
            }
            else{
              this.cartList.forEach(item => item.checked = true)
            }
          },
          calcClick(){
            if(!this.isSelectAll){
              this.$toast.show('请选择购买的商品',1000)
            }
          }
        },
        computed:{
          ...mapGetters(['cartList']),
          totalPrice(){
            return this.cartList.filter(item => {
              return item.checked
            }).reduce((preValue,item) =>{
              return  preValue + item.price * item.count
            },0).toFixed(2)
          },
          checkLength(){
            return this.cartList.filter(items => items.checked).length
          },
          isSelectAll(){
            //return !(this.cartList.filter(items => !items.checked).length)
            if(this.cartList.length === 0) return false
            return !(this.cartList.find(items => !items.checked))
          },
        },
        components:{
          CheckButton
        },
    }
</script>

<style  scoped>
  .bottom-bar{
    height: 40px;
    background-color: #eee;
    position: relative;
    bottom: 40px;
  }
  .check-content{
    display: flex;
    align-items: center;
    display: block;
    padding-top: 10px;
  }
  .check-button{
    width: 20px;
    height: 20px;
    float: left;
    margin-left: 5px;
  }
  .check-text{
    float: left;
    line-height: 22px;
    margin-left: 5px;
  }
  .price{
    margin-left: 30px;
  }
  .calculte{

    float: right;
    width: 100px;
    height: 40px;
    margin-top: -10px;
    text-align: center;
    line-height: 40px;
    background-color: red;
    color: white;
  }
</style>
