import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
    cartList:[]
}

const store = new Vuex.Store({
    state,
    mutations,
    // {
    // mutations唯一的目的就是为了修改stare中的状态
    // mutations中的每一个方法尽可能完成的事情比较单一一点
        // addCounter(state,payload){
        //     payload.count++
        // },
        // addTocart(state,payload){
        //     state.cartList.push(payload)
        // }
    // },
    actions,
    // {
    //     addCart(context, payload){
    //         // 1.查找之前数组中是否有该商品
    //         let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    //         // 2.判断oldProduct
    //         if(oldProduct){
    //             // oldProduct.count += 1
    //             context.commit('addCounter',oldProduct)
    //         }else{
    //             payload.count =1
    //             // context.state.cartList.push(payload)
    //             context.commit('addTocart',payload)
    //         }
            
    //     }
    // }
    getters,
})

export default store