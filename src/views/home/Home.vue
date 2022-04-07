<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control" 
      :titles="['流行','新款','精选']" 
      @tabClick = "tabClick" 
      ref="TabControl" v-show="isTabFixed"/>
    <scroll class="content" 
    ref="scroll" 
    :probe-type = "3" 
    @scroll="contentscroll" 
    :pull-up-load="true"
    @pullingUp = "loadMore">
      <home-swiper :banners="banners" @swiperimageLoad = "swiperimageLoad"/>
      <recommend-views :recommends="recommends"/>
      <feature-views/>
      <tab-control 
      :titles="['流行','新款','精选']" 
      @tabClick = "tabClick" 
      ref="TabControl"/>
      <goods-list :goods ="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" /><!-- 监听原生组件加.native -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/homeSwiper'
import RecommendViews from './childComps/RecommendViews'
import FeatureViews from './childComps/FeatureViews'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata,getHomeGoods} from "network/home"


export default {
    name:"Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendViews,
      FeatureViews,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page: 0 ,list: [] },
          'new':{page: 0 ,list: [] },
          'sell':{page: 0 ,list: [] },
        },
        currentType:'pop',
        isShowBackTop:false,
        tabOffsetTop:0,
        isTabFixed:false
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created(){
      // 请求多个数据
      this.getHomeMultidata()

      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted(){

      // 获取tabControl的offsettop
      // 所有组件都有一个属性$el,用于获取组件中的元素
      // console.log(this.$refs.TabControl.$el.offsetTop);
    },
    methods:{
      // 事件监听相关方法
      tabClick(index){
        switch(index){
          case 0 :
            this.currentType = 'pop'
            break
          case 1 :
            this.currentType = 'new'
            break
          case 2 :
            this.currentType = 'sell'
            break
        }
      },
      backClick(){
        this.$refs.scroll.scrollTo(0, 0, 500)//三个参数（x，y，毫秒）
      },
      contentscroll(position){
        // console.log(position);
        // 判断Backtop是否显示
        this.isShowBackTop = -(position.y) > 1000

        // 决定tabControl是否吸顶（position:fixed）
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore(){
        // console.log('滚动到底部');
        this.getHomeGoods(this.currentType)
      },
      swiperimageLoad(){
        // console.log(this.$refs.TabControl.$el.offsetTop);
        this.tabOffsetTop = this.$refs.TabControl.$el.offsetTop
      },

      // 网络请求相关方法
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type , page ).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1

          // 完成上拉加载更多
          this.$refs.scroll.finishPullUp()
      })
    },
  }
}
</script>

<style scoped>
  #home {
    height: 100vh;/* 视口高度 */
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /* position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9; */
  }
/* 
  .tab-control{
    粘性定位
    position: sticky;
    top: 44px;
  } */

  .content {
    /* height:calc(100% - 93px); */
    overflow: hidden;
    /* margin-top: 44px; */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }
  /* .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  } */
</style>