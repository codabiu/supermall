<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav" @titleclick="titleclick" ref="nav"/>
        <scroll class="content" ref="scroll" :probe-type = "3" @scroll="contentScroll">
            <detail-swiper :top-images = "topImages"/>
            <detail-base-info :goods = "goods"/>
            <detail-shop-info :shop = "shop"/>
            <detail-good-info :detail-info = "detailInfo"/>
            <detail-param-info :param-info="paramInfo" ref="params"/>
            <detail-comment-info :comment-info="commentInfo" ref="comment"/>
            <goods-list :goods = "recommends" ref="recommend"/>
        </scroll>
        <detail-bottom-bar/>
        <back-top @click.native="backClick" v-show="isShowBackTop" />
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodInfo from './childComps/DetailGoodInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BackTop from 'components/content/backTop/BackTop'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'

export default {
    name:'Detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodInfo,
        DetailParamInfo,
        DetailCommentInfo,
        DetailBottomBar,
        GoodsList,
        BackTop,
        Scroll 
    },    
    data(){
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommends:[],
            themeTopYs:[],
            currentIndex:0,
            isShowBackTop:false,
        }
    },
    created(){
        // 保存传入的id
        this.iid = this.$route.params.iid

        // 获取推荐数据
        getRecommend().then(res => {
            this.recommends = res.data.list
        })

        // 根据id请求详细数据
        getDetail(this.iid).then(res => {
            // 1.获取顶部轮播图数据
            // console.log(res);
            const data = res.result
            this.topImages = data.itemInfo.topImages

            // 2.获取商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            // console.log(this.goods);

            // 3.获取商家信息
            this.shop = new Shop (data.shopInfo)
            // console.log(this.shop);

            // 4.获取商品详细信息
            this.detailInfo = data.detailInfo

            // 5.获取商品参数信息
            this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
            // console.log(this.paramInfo);

            // 6.取出评论信息
            if (data.rate.cRate !== 0) {
                this.commentInfo = data.rate.list[0]
            }

            // nextTick 下一帧，等渲染完后执行
            this.$nextTick(() => {
                this.themeTopYs = []
                this.themeTopYs.push(0)
                this.themeTopYs.push(this.$refs.params.$el.offsetTop-44)
                this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
                this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)
                console.log(this.themeTopYs);
            })

        })
    },
    methods:{
        contentScroll(position){
            // 获取Y值
            const positionY = -position.y
            // positionY和主题值进行对比
            let length = this.themeTopYs.length
            for(let i = 0; i < length ; i++){
                // if (positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) {
                //     console.log(i);
                // }
                if (this.currentIndex !== i && ((i < length - 1 && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1])
                || (i === length -1 && positionY > this.themeTopYs[i]))) {
                    this.currentIndex = i
                    this.$refs.nav.currentIndex = this.currentIndex
                }
            }

            this.isShowBackTop = -(position.y) > 1000
        },
        backClick(){
        this.$refs.scroll.scrollTo(0, 0, 500)//三个参数（x，y，毫秒）
      },
        titleclick(index){
            // console.log(index);
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],1000)
        }
    }  
}
</script>

<style scoped>
    #detail {
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }
    .content{
        height: calc(100% - 93px);
        overflow: hidden;
    }
    /* .detail-nav {
        position: relative;
        z-index: 9;
    } */
</style>