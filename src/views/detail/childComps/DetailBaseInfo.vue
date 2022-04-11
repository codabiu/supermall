<template>
    <div class="base-info" v-if="Object.keys(goods).length!==0">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-service">
            <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailBaseInfo',
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
.base-info {
    padding: 15px 5px 20px;
    border-bottom: 5px solid #f2f5f8;
    color: #999;
}  
.info-title {
    padding-bottom: 10px;
    color: #222;
}
.info-price {
    position: relative;
}
.n-price {
    color: #ff5777;
    font-size: 24px;
}
.old-price{
    margin-left: 5px;
    font-size: 13px;
}
.discount {
    position: absolute;
    top: 0;
    margin-left: 5px;
    padding: 2px 5px;
    border-radius: 8px;
    color: #fff;
    font-size: 12px;
}
.info-other {
    display: flex;
    margin-top: 25px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    justify-content: space-between;
    font-size: 13px;
}
.info-service {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}
.info-service-item img,
.a {
  width: 14px;
  height: 14px;
}
.info-service-item span,
.b {
  color: #333;
  font-size: 13px;
}
</style>