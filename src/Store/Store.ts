import { defineStore } from 'pinia'

interface ProductType{
    image: string,
    name: string,
    price: number
    quantity: number
}

export const useProductStore = defineStore('cart' ,{
    state: (): { cartItems: ProductType[]} => ({
        cartItems:[]
    }),
    actions: {
        addToCart(product : ProductType) : void{
            this.cartItems.push(product)
        },
        removeFromCart(index: number):void {
            this.cartItems.splice(index,1)
        }
    }
})