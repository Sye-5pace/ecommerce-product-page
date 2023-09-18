<script setup lang="ts">
    import { ref } from  'vue'
    import { useProductStore } from '../Store/Store';
    
    const productStore = useProductStore();
    const { cartItems, addToCart } = productStore
    
    const count = ref<number>(0)

    const addItemToCart = () => {
        const item = {
            image: `../assets/image-product-1-thumbnail.jpg`,
            name: "Fall Limited Edition",
            price: 125.00,
            quantity: count.value
        }
        addToCart(item)
        console.log(cartItems.length)
    }
</script>

<template>
    <section class="flex flex-col self-center gap-y-6">
        <div class="flex flex-col gap-y-3">
            <h5 class="font-bold text-[0.8125rem] text-pumpkin tracking-[0.125rem]">SNEAKER COMPANY</h5>
            <h2 class="text-shark text-[2.75rem] font-bold leading-[3rem]">
                Fall Limited Edition <br>Sneakers
            </h2>
        </div>
        <div class="flex flex-col gap-y-3">
            <p class="text-palesky">
                These low-profile sneakers are your perfect casual wear <br>
                companion. Featuring a durable rubber outer sole, they'll <br>
                withstand everything the weather can offer.
            </p>
            <div class="flex flex-col">
                <div class="flex items-center gap-3"><h2 class="font-bold text-shark text-[1.75rem]">$125.00</h2> <span class="bg-[#ffeee2] rounded-[0.375rem] w-[3.125rem] h-[1.75rem] font-bold text-pumpkin text-center">50%</span></div>
                <h3 class="text-[1rem] font-bold text-[#b6bcc8] line-through">$250.00</h3>
            </div>
        </div>
        <div class="flex children:h-[3.5rem] gap-[1rem]">
            <div class="bg-[#F6F8FD] w-[9.875rem] flex justify-around items-center rounded-[0.625rem]">
                <span class="cursor-pointer hover:text-[#FFAB6A] text-pumpkin font-semibold text-[1.7rem] " @click="count--">-</span> <span class="text-[1rem] font-bold text-shark">{{ count }}</span> <span src="../assets/icon-plus.svg" class="text-pumpkin text-[1.7rem] font-semibold cursor-pointer hover:text-[#FFAB6A]" @click="count++">+</span>
            </div>
            <div class="flex gap-[0.9375rem] bg-pumpkin rounded-[0.625rem] items-center w-[17rem] justify-center cursor-pointer hover:bg-[#FFAB6A]" @click="addItemToCart">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 cursor-pointer stroke-[#fff]" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <h3 class="font-bold text-[#fff] text-[1rem] ">Add to cart</h3>
            </div>
        </div>
    </section>
</template>