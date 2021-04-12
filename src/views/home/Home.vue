<!--  -->
<template id='cpn'>
    <div>
      <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    </div>
</template>

<script>
    import navbar from 'components/common/navbar/NavBar'
    import {getHomeMultidata} from 'network/home'

    export default {
        template:'#cpn',
        //name:'',
        data () {
            return {
            }
        },
        created(){
          getHomeMultidata().then(res =>{
            console.l0g(res);
          })
        },
        methods:{},
        components:{
          navbar,
        },
    }
</script>

<style  scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>
