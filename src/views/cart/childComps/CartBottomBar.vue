<template>
  <div class="bottom-bar">
      <div class="check-content">
          <check-button :is-checked="isSelectAll" class="check-buttom" @click.native="checkClick()"/>
          <span>全选</span>
      </div>

      <div class="totalPrice">
          合计：{{totalPrice}}
      </div>

      <div class="calculate" @click="calcClick">
          <span>去计算({{checkeLength}})</span>
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'

export default {
    name:'CartBottomBar',
    components:{
        CheckButton
    },
    methods:{
        checkClick(){
            if(this.isSelectAll){
                return this.$store.state.cartList.forEach(item => item.checked = false)
            }else {
                return this.$store.state.cartList.forEach(item => item.checked = true)
            }
        },
        calcClick(){
            if (!this.isSelectAll) {
                
            }
        }
    },
    computed:{
        totalPrice(){
            return this.$store.state.cartList.filter(item => {
                return item.checked
            }).reduce((preValue,item) => {
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        checkeLength(){
            // filter--------过滤
            return this.$store.state.cartList.filter(item => item.checked).length
        },
        isSelectAll(){
            if(this.$store.state.cartList.length ===0) return false
            // 方法1：find--------查找
            return !this.$store.state.cartList.find(item => !item.checked)

            // 方法2：普通遍历
            // for(let item of this.$store.state.cartList){
            //     if(!item.checked){
            //         return false
            //     }
            // }
            // return true

        }
    }
}
</script>

<style scoped>
    .bottom-bar {
        height: 40px;
        background-color: #eee;
        position: relative;
        line-height: 40px;
        display: flex;
    }
    .check-content {
        display: flex;
        align-items: center;
        margin-left: 10px;
        flex: 1;
    }
    .check-buttom {
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin-right: 5px;
    }
    .totalPrice {
        flex: 1;
    }
    .calculate {
        flex: 1;
        text-align: center;
        background-color: orange;
        color: #fff;
    }
</style>