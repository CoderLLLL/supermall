<!--  -->
<template id='cpn'>
    <div>
      <navbar><div slot="center">购物街</div></navbar>
    </div>
</template>

<script>
    import navbar from 'components/common/navbar/NavBar'

    export default {
        template:'#cpn',
        //name:'',
        data () {
            return {
            }
        },
        methods:{},
        components:{
          navbar,
        },
    }
</script>

<style  scoped>

</style>
