<!--  -->
<template>
    <div class="toast" v-show="shows">
      <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        name:'Toast',
        props:{
         /*  message:{
            type:String,
            default:'',
          },
          show:{
            type:Boolean,
            default(){
              return false
            }
          } */
        },
        data () {
            return {
              message:'',
              shows:false,
            }
        },
        methods:{
          show(message="默认文字",duration = 1000){
            this.message = message;
            this.shows = true;
            setTimeout(() =>{
              this.shows = false,
              this.message = ''
            },duration)
          }
        },
        components:{},
    }
</script>

<style  scoped>
  .toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    color: white;
    background-color: rgba(0, 0, 0, .75);
    border-radius: 5px;
    z-index: 100;
  }
</style>
