<!--  -->
<template id='cpn'>
    <div class="tab-control">
      <div v-for="item in titles" class="tab-control-item">
        {{item}}
      </div>
    </div>
</template>

<script>
    export default {
        template:'#cpn',
        //name:'',
        props:{
          titles:{
            type:Array,
            default(){
              return []
            }
          }
        },
        data () {
            return {
            }
        },
        methods:{},
        components:{},
    }
</script>

<style  scoped>
  .tab-control{
    display: flex;
    text-align: center;

  }
  .tab-control-item{
    flex: 1;
  }
</style>
