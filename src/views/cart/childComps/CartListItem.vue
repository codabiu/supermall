<template>
    <div id="shop-item">
        <div class="item-selector">
            <check-button :is-checked="product.checked" @click.native="checkClick"/>
        </div>
        <div class="item-img">
            <img :src="product.image" alt="">
        </div>
        <div class="item-info">
            <div class="item-title">{{product.title}}</div>
            <div class="item-desc">{{product.desc}}</div>
            <div class="info-button">
            <div class="item-price left">${{product.price}}</div>
            <div class="item-count right">X{{product.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
    name:'CartListItem',
    components:{
        CheckButton
    },
    methods:{
        checkClick(){
            this.product.checked = !this.product.checked
        }
    },
    props:{
        product:{
            type:Object,
            default(){
                return []
            } 
        }
    }
}
</script>

<style scoped>
    #shop-item {
        width: 100%;
        display: flex;
        font-size: 0;
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }
    .item-selector{
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .item-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .item-desc {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .item-img {
        padding: 5px;
    }
    .item-img img {
        width: 80px;
        height: 100px;
        display: block;
        border-radius: 5px;
    } 
    .item-info {
        font-size: 17px;
        color: #333;
        padding: 6px 10px;
        position: relative;
        overflow: hidden;
    }
    .item-info ,.item-desc {
        font-size: 14px;
        color: #666;
        margin-top: 15px;
    }
    .info-botton {
        margin-top: 10px;
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
    }
    .info-botton ,.item-price {
        color: orangered;
    }
    .item-price ,.item-count {
        margin-top: 20px;
    }
</style>