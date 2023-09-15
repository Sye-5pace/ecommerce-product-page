import { defineStore } from 'pinia'

export const useProductStore = defineStore('cart' ,{
    state: () => ({
        cartItems:[]
    }),
    actions: {
        addToCart(product) {
            this.cartItems.push(product)
        },
        removeFromCart(index) {
            this.cartItems.splice(index,1)
        }
    }
})