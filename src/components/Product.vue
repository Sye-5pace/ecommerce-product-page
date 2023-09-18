<script setup lang="ts">
    import {  reactive, toRef, ref } from 'vue'
    import ProductDetails from './ProductDetails.vue'
    import productImage1 from '../assets/image-product-1.jpg'
    import productImage2 from '../assets/image-product-2.jpg'
    import productImage3 from '../assets/image-product-3.jpg'
    import productImage4 from '../assets/image-product-4.jpg'
    
    /* let imageRef = ref('../assets/image-product-1-thumbnail.jpg')
    const imageUpdater = (imageURL) => {
        imageRef.value = imageURL;
        console.log(imageRef.value);
    } */
    const clicked = ref<boolean>(false)

    const state = reactive({
        imageRef: productImage1
    })

    const imageUpdater = (imageURL: string) => {
        state.imageRef = imageURL;
        console.log(state.imageRef);
    }

    const imageSrc = toRef(state, 'imageRef')

    const imgList = [
        productImage1,
        productImage2,
        productImage3,
        productImage4
    ]

    const currentImageIndex = ref<number>(0);
    const navigateImage = (direction: string) => {
        if(direction === 'prev'){
            currentImageIndex.value = ( currentImageIndex.value -1 + imgList.length) % imgList.length; 
        }else if(direction === 'next'){
            currentImageIndex.value = ( currentImageIndex.value + 1) % imgList.length;
        }
        imageUpdater(imgList[currentImageIndex.value])
    }
</script>

<template>
    <div class="w-full flex justify-between h-[35.3125rem]">
        <div class="flex flex-col items-center gap-y-4">
            <div id="main-img">
                <img ref="mainImage" :src="imageSrc"  class="cursor-pointer w-[27.8125rem] h-[27.8125rem] rounded-[0.9375rem]" :alt="imageSrc" @click="clicked = !clicked">
            </div>
            <div class="flex gap-7 children:cursor-pointer" id="img-list">
                <img src="../assets/image-product-1-thumbnail.jpg" @click='imageUpdater(productImage1)' alt="" class="w-[5.5rem] rounded-[0.625rem] hover:border-2 hover:border-pumpkin">
                <img src="../assets/image-product-2-thumbnail.jpg" @click='imageUpdater(productImage2)' alt="" class="w-[5.5rem] rounded-[0.625rem] hover:border-2 hover:border-pumpkin">
                <img src="../assets/image-product-3-thumbnail.jpg" @click='imageUpdater(productImage3)' alt="" class="w-[5.5rem] rounded-[0.625rem] hover:border-2 hover:border-pumpkin">
                <img src="../assets/image-product-4-thumbnail.jpg" @click='imageUpdater(productImage4)' alt="" class="w-[5.5rem] rounded-[0.625rem] hover:border-2 hover:border-pumpkin">
            </div>
        </div>
        <div class="absolute inset-0 bg-[#000] bg-opacity-75 flex flex-col items-center justify-center gap-y-4" :class=" clicked ? 'block' : 'hidden'">
            <div id="main-img" class="flex flex-col gap-y-8">
                <img src="../assets/icon-close.svg" class="self-end w-4 h-4 cursor-pointer" @click="clicked = !clicked"/>
                <div class="flex items-center">
                    <div id="prev" class="w-10 h-10 bg-[#fff] flex items-center rounded-full justify-center relative left-[1.1rem] cursor-pointer" @click="navigateImage('prev')">
                        <img src="../assets/icon-previous.svg" class="w-3 h-3" />
                    </div>
                    <img :src="imageSrc"  class="cursor-pointer w-[27.8125rem] h-[27.8125rem] rounded-[0.9375rem]" :alt="imageSrc">
                    <div id="next"  class="w-10 h-10 bg-[#fff] flex items-center justify-center rounded-full relative right-[1.1rem] cursor-pointer" @click="navigateImage('next')">
                        <img src="../assets/icon-next.svg" class="w-3 h-3 stroke-[#fff]"/>
                    </div>
                </div>
            </div>
            <div class="flex gap-7 children:cursor-pointer" id="img-list">
                <img src="../assets/image-product-1-thumbnail.jpg" @click='imageUpdater(productImage1)' alt="" class="w-[5.5rem] rounded-[0.625rem] hover:border-2 hover:border-pumpkin">
                <img src="../assets/image-product-2-thumbnail.jpg" @click='imageUpdater(productImage2)' alt="" class="w-[5.5rem] rounded-[0.625rem] hover:border-2 hover:border-pumpkin">
                <img src="../assets/image-product-3-thumbnail.jpg" @click='imageUpdater(productImage3)' alt="" class="w-[5.5rem] rounded-[0.625rem] hover:border-2 hover:border-pumpkin">
                <img src="../assets/image-product-4-thumbnail.jpg" @click='imageUpdater(productImage4)' alt="" class="w-[5.5rem] rounded-[0.625rem] hover:border-2 hover:border-pumpkin">
            </div>
        </div>
        <ProductDetails />
    </div>
</template>

<!-- #E0BA2D -->