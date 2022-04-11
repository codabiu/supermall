<template>
    <div  id="goods-info" v-if="Object.keys(detailInfo).length !== 0">
        <div class="info-desc clear-fix">
            <div class="start"></div>
            <div class="desc">{{detailInfo.desc}}</div>
            <div class="end"></div>

            <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
            <div class="info-list">
                <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="ImageLoad">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailGoodInfo',
    methods:{
      ImageLoad() {
      this.$emit("detailImageLoad");
    },
    },
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
#goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
}
.info-desc {
    padding: 0 15px;
}
.info-desc .start,
.info-desc .end {
  position: relative;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
}
.info-desc .end {
  float: right;
}
.info-desc .start::before,
.info-desc .end::after {
  position: absolute;
  content: "";
  width: 5px;
  height: 5px;
  background-color: #333;
}
.info-desc .end::after {
  top: -5px;
  right: 0;
}
.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
  color: #666;
}
.info-key {
  padding: 10px 15px;
}
.info-list{
  margin-bottom: 5px;
}
.info-list img {
  width: 100%;
}
</style>