<script setup lang="ts"> 
    import { ref,computed} from 'vue'
    import { useProductStore } from '../Store/Store';
    
    const clicked = ref<boolean>(false)
    const productStore = useProductStore();
    const { cartItems, removeFromCart } = productStore
    
    const cartFill = computed<number>(() => {
        return cartItems.reduce((total:any, item:any) => total + item.quantity, 0);
    })

    

</script>

<template>
    <header class="flex h-[5rem] items-center w-full border-b border-catskwhite justify-between mt-[1.75rem] pb-6">
        <div class="flex gap-[3.3rem] items-center">
            <img src="../assets/sneakers-log.svg"/>
            <div class="flex gap-[2rem] children:text-palesky children:text-[0.94rem] children:font-light  children:cursor-pointer children:h-[6.375rem] children:py-[2.5rem]">
              <div class="hover:border-b-2 hover:border-pumpkin">Collections</div>
              <div class="hover:border-b-2 hover:border-pumpkin">Men</div>
              <div class="hover:border-b-2 hover:border-pumpkin">Women</div>
              <div class="hover:border-b-2 hover:border-pumpkin">About</div>
              <div class="hover:border-b-2 hover:border-pumpkin">Contact</div>
            </div>
        </div>
        <div class="flex gap-[1.5rem] items-center">
            <span v-if="cartFill"  class="relative bottom-[0.3rem] left-[33%] bg-pumpkin text-white text-[0.5rem] font-semibold rounded-full px-[0.2rem] transform  translate-x-1 -translate-y-1 text-[#fff]" > {{ cartFill }} </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 cursor-pointer stroke-palesky hover:stroke-shark" @click="clicked = !clicked">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <img src="../assets/image-avatar.png" class="w-[3.125rem] cursor-pointer hover:border-2 hover:border-pumpkin hover:rounded-full"/>
        </div>
        <div class="bg-[#fff] absolute w-[22.5rem] h-[16rem] grid grid-rows-[25%_75%] inset-0  rounded-[0.625rem] shadow-lg bg-[rgba(29, 32, 38, 0.50)] left-[69%] top-[5.7rem]" :class="clicked ? 'block' : 'hidden'" >
            <div class="p-4 border-b border-catskwhite">
                <h3 class="font-bold">Cart</h3>
            </div>
            <div class="flex flex-col items-center justify-center gap-y-5" v-if="cartItems.length > 0">
                <div class="flex items-center gap-6" v-for="(item,index) in cartItems" :key="index">
                    {{ console.log(item) }}
                    <img src="../assets/image-product-1-thumbnail.jpg" class="w-[3.125rem] rounded-[0.25rem]"/>
                    <div class="text-palesky font-normal text-[1rem]">
                        <h1> Fall Limited Edition </h1>
                        <p class="flex gap-2"> $125 x {{ cartFill }} <span class="font-bold text-shark">${{ 125 * cartFill }}</span></p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-[#C3CAD9] cursor-pointer" @click="removeFromCart(index)">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>
                <button class="rounded-[0.625rem] bg-pumpkin text-[#fff] h-[3.5rem] w-[19.5rem]">checkout</button>
            </div>
            <div class="flex items-center justify-center" v-else>
                <h3 class="text-[1rem] font-bold text-palesky">Your card is empty.</h3>
            </div>
        </div>
    </header>
</template>