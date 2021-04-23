import {debounce} from 'common/utils'

export const itemListenerMxinin = {
  mounted(){
    const refrech = debounce(this.$refs.scroll.refresh,500);
    this.ItemImgListener = () =>{
      refresh();
    }
    this.$bus.$on('itemImgLoad',this.ItemImgListener)
    console.log('我混进去了')
  }
}
