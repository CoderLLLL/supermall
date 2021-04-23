import {debounce} from 'common/utils'

export const itemListenerMxinin = {
  data(){
   return{
    ItemImgListener:null,
    //refresh:null, //保存函数
   }
  },
  mounted(){
    //图片加载完成后的事件监听，解决btter-scroll长度获取的问题和多次调用函数的防抖功能
    const refrech = debounce(this.$refs.scroll.refresh,500)

    /* 方法二：可以用已经写好的debounce来做函数防抖，因为在外面组件直接引用refrech的话会多次调用防抖，
    这个防抖函数是一个闭包，作用域是单独的，所以在外面用无效。解决的方法是在内部保存一个函数，然后再引用，这样就可以确定在同一个作用域下执行 */
    //this.refrech = debounce(this.$refs.scroll.refresh,500)

    this.ItemImgListener = () =>{
      refrech();
      //this.refrech  //引用（方法二）
    }
    this.$bus.$on('itemImgeLoad',this.ItemImgListener)  //开始监听事件总线，后面离开这个页面的时候要取消监听
    //获取tabcontrol组件的offsetTop
    //所有组件都有一个$el:用于获取组件里面的元素（组件中的真实dom，这样才可以引用sffsetTop，因为自己注册的组件是没有这些属性的）
  }


}
