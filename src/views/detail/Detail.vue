<!--  -->
<template id='cpn'>
    <div>
      <detail-nav-bar>
      </detail-nav-bar>
    </div>
</template>

<script>
    import DetailNavBar from './detailComps/DetailNavBar'

    import {getDetail} from 'network/detail'

    export default {
        template:'#cpn',
        //name:'',
        data () {
            return {
              iid:null,
            }
        },
        created(){
          this.iid = this.$route.params.iid;
          getDetail(this.iid).then(res =>{
            console.log(res);
          })
        },
        methods:{},
        components:{
          DetailNavBar
        },
    }
</script>

<style  scoped>

</style>
