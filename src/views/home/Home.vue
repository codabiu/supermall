<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-views :recommends="recommends"/>
    <feature-views/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/homeSwiper'
import RecommendViews from './childComps/RecommendViews'
import FeatureViews from './childComps/FeatureViews'


import {getHomeMultidata} from "network/home"

export default {
    name:"Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendViews,
      FeatureViews,
    },
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    created(){
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
}
</script>

<style>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
  }
</style>