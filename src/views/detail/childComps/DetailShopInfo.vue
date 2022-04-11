<template>
  <div class="shop-info">
      <div class="shop-top">
          <img :src="shop.logo" alt="">
          <span class="title">{{shop.name}}</span>
      </div>
      <div class="shop-middle">
          <div class="shop-middle-item shop-middle-left">
              <div class="info-sells">
                  <div class="sells-count">
                      {{shop.sells}}
                  </div>
                  <div class="sells-text">总销量</div>
              </div>
              <div class="info-goods">
                  <div class="goods-count">
                      {{shop.goodsCount}}
                  </div>
                  <div class="goods-text">全部宝贝</div>
              </div>
          </div>
          <div class="shop-middle-item shop-middle-right">
              <table>
                  <tr v-for="(item,index) in shop.score" :key="index">
                      <td>{{item.name}}</td>
                      <td class="score">{{item.score}}</td>
                      <td class="better">{{item.isBetter ? '高':'低'}}</td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="shop-enter">进店逛逛</div>
  </div>
</template>

<script>
export default {
    name:'DetailShopInfo',
    props:{
        shop:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
.shop-info {
  padding: 25px 5px;
  border-bottom: 5px solid #f2f5f8;
  color: #333;
}
.shop-top {
    display: flex;
}
.shop-top img {
  width: 45px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}
.shop-top .title {
  margin-left: 10px;
  font-size: 14px;
  padding-top: 10px;
}
.shop-middle{
    display: flex;
    padding-top: 15px;
}
.shop-middle-item {
    width: 50%;
    text-align: center;
}
.shop-middle-left {
  display: flex;
  justify-content: space-around;
  margin: 10px 0 35px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sells-count,.goods-count {
  font-size: 18px;
  height: 30px;
}
.sells-text , .goods-text {
  font-size: 12px;
}

.shop-middle-right {
    font-size: 13px;
    color: green;
}
.shop-middle-right table{
    padding-left: 15px;
    padding-top:8px;
    width: 80%;
}
.shop-enter {
  width: 150px;
  height: 30px;
  margin: 0 auto;
  background-color: #f2f5f8;
  border-radius: 10px;
  line-height: 30px;
  text-align: center;
  color: #666;
  font-size: 14px;
}
</style>