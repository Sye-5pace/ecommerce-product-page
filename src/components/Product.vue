<script setup lang="ts">
    import ProductDetails from './ProductDetails.vue'
</script>

<template>
    <div class="w-full flex justify-between h-[35.3125rem]">
        <div class="flex flex-col items-center gap-y-4">
            <div>
                <img src="../assets/image-product-1-thumbnail.jpg" class="cursor-pointer w-[27.8125rem] h-[27.8125rem] rounded-[0.9375rem]" alt="">
            </div>
            <div class="flex gap-7 children:cursor-pointer">
                <img src="../assets/image-product-1-thumbnail.jpg" alt="" class="w-[5.5rem] rounded-[0.625rem] hover:border-2 hover:border-pumpkin">
                <img src="../assets/image-product-2-thumbnail.jpg" alt="" class="w-[5.5rem] rounded-[0.625rem] hover:border-2 hover:border-pumpkin">
                <img src="../assets/image-product-3-thumbnail.jpg" alt="" class="w-[5.5rem] rounded-[0.625rem] hover:border-2 hover:border-pumpkin">
                <img src="../assets/image-product-4-thumbnail.jpg" alt="" class="w-[5.5rem] rounded-[0.625rem] hover:border-2 hover:border-pumpkin">
            </div>
        </div>
        <ProductDetails />
    </div>
</template>

<!-- #E0BA2D -->