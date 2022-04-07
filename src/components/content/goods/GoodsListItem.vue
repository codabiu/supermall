<template>
  <div class="goodslistitem">
    <img :src="goodsItem.show.img" alt="" >
    <div class="goods_info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
    </div>  
  </div>
</template>

<script>
export default {
    name:'GoodsListItem',
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
    .goodslistitem {
        font-size: 12px;
        width: 48%;
    }
    .goodslistitem img{
        width: 100%;
        border-radius: 5px;
    }
    .goods_info {
        text-align: center;
        margin-bottom: 5px;
    }
    .goods_info p {
        margin-bottom: 3px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .goods_info .price {
        color: #ff5777;
}
    .goods_item .collect {
        font-size: 13px;
        margin: 0 2px 0 10px;
}
</style>