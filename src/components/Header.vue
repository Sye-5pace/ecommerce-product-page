<script setup lang="ts"> 

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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer stroke-palesky hover:stroke-shark">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <img src="../assets/image-avatar.png" class="w-[3.125rem] cursor-pointer hover:border-2 hover:border-pumpkin hover:rounded-full"/>
        </div>
    </header>
</template>