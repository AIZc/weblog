<template>
  <div id="footerContainer">
    <div :class="{active: $route.path === '/msite'}" @click="goPath('/msite')" class="guideItem">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </div>
    <div :class="{active: $route.path === '/search'}" @click="goPath('/search')" class="guideItem">
      <i class="iconfont icon-chaxun"></i>

      <span>搜索</span>
    </div>
    <div :class="{active: $route.path === '/order'}" @click="goPath('/order')" class="guideItem">
      <i class="iconfont icon-dingdanxiangqing_icon"></i>

      <span>订单</span>
    </div>
    <div :class="{active: $route.path === '/profile'}" @click="goPath('/profile')" class="guideItem">
      <i class="iconfont icon-touxiang"></i>

      <span>我的</span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goPath(path){
        // 跳转至指定的路由路径
        /*编程式导航： $router */
        /*
        * $route 和 $router 的区别
        *   1. $router 是路由器对象，里边包含路由跳转的方法
        *   2. $route 是路由对象，里边包含当前路径下所有路由信息(path， params， meta， query)
        * */

        path !== this.$route.path && this.$router.push(path)

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #footerContainer
    display flex
    top-border-1px(#eee)
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    box-sizing border-box
    background #fff
    .guideItem
      width 25%
      height 50px
      text-align center
      display flex
      flex-direction column
      &.active
        color $green
      .iconfont
        font-size 25px
        line-height 33px
</style>
