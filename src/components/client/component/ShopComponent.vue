<template>
    <RouterLink to="./store-home.html" class="group">
        <img :src="shop.coverimg" alt="cover1" class="w-full h-20 rounded-t-xl rounded-[0_0_90%_90%/100%_100%_25%_25%]">
        <div class="p-3">
            <div class="flex items-center gap-2 mb-3">
                <img :src="shop.logo" alt="logo1" class="w-6 h-6 rounded-full">
                <h3 class="text-sm font-medium line-clamp-1 group-hover:text-primary">{{ shop.shopname }}</h3>
            </div>
            <span class="text-highlight-red">{{shop.stock}} Products</span>
            <div class="flex items-center gap-2">
                <div class="flex items-center">
                    <i class="lab-fill-star text-xs text-warning"></i>
                    <i class="lab-fill-star text-xs text-warning"></i>
                    <i class="lab-fill-star text-xs text-warning"></i>
                    <i class="lab-fill-star text-xs text-warning"></i>
                    <i class="lab-fill-star text-xs text-light-white"></i>
                </div>
                <span class="text-xs font-medium text-light-white">{{shop.review}}Reviews</span>
            </div>
        </div>
    </RouterLink>
</template>
<script>
import { RouterLink } from 'vue-router';

    export default{
        props:{
            shop:{type: Object, required:true}
        },
    }
</script>