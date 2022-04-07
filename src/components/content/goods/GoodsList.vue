<template>
    <div class="goods">
        <goods-list-item 
            v-for="item in goods" 
            :goods-item = "item"
            :key="item.id"/>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
    name:'GoodsList',
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .goods{
        display: flex;
        flex-wrap: wrap;/*指定元素多行显示 */
        padding: 2px;
        justify-content: space-around;/*均匀排列每个元素，每个元素周围分配相同的空间 */
    }
</style>