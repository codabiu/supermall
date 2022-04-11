<template>
    <nav-bar>
        <div slot="left" class="back" @click="backclick"><img src="~assets/img/common/back.svg" alt=""></div>
        <div slot="center" class="title">
            <div v-for="(item,index) in titles" 
            :key="index" 
            class="titleitem"
            :class="{active:index === currentIndex}" @click="titleclick(index)">{{item}}</div>
        </div>
        </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name:'DetailNavBar',
    components:{
        NavBar
    },
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        titleclick(index){
            this.currentIndex = index
            this.$emit('titleclick',index)
        },
        backclick(){
            this.$router.back()
        }
    }
}
</script>

<style>
    .title {
        display: flex;
    }
    .titleitem {
        flex: 1;
        text-align: center;
        font-size: 13px;
    }
    .active {
        color:var(--color-high-text);
    }
    .back {
        margin-top: 5px;
    }
</style>