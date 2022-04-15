export default {
    // mutations唯一的目的就是为了修改stare中的状态
    // mutations中的每一个方法尽可能完成的事情比较单一一点
    
    addCounter(state,payload){
        payload.count++
    },
    addTocart(state,payload){
        payload.checked = true
        state.cartList.push(payload)
    }
}