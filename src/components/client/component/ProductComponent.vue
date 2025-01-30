<template>
    <RouterLink :to="{name:'ProductDetail', params:{id:product.id}}" @click="handleDetails(product)" class="grid-cols-1 flex flex-col gap-2.5">
        <ProductDetails>
            
        </ProductDetails>
        <div class="max-h-56 max-w-56 rounded-2xl relative"> 
           <img :src="product.img" alt="Product 1" class="aspect-square rounded-2xl">
           <label v-if="product.label != 'null'" class="absolute top-3 left-3 py-1 px-2 rounded-lg leading-snug text-white bg-highlight-red">35% Off</label>
            <button  @click.prevent="product.isFavourite = !product.isFavourite" class="fabourite absolute top-3 right-3 w-7 h-7 z-10 rounded-full bg-white flex justify-center items-center shadow-favourite">
                <i v-if="product.isFavourite==true" class="lab-fill-heart text-negative-red"></i>
                <i v-else class="lab-line-heart-round text-black"></i>
            </button>
        </div>
         <h3 class="text-sm font-medium line-clamp-2 hover:text-primary">{{ product.productname }}</h3>
        <div class="flex items-center gap-2">
            <div class="flex items-center">
                <i class="lab-fill-star text-xs text-warning"></i>
                <i class="lab-fill-star text-xs text-warning"></i>
                <i class="lab-fill-star text-xs text-warning"></i>
                <i class="lab-fill-star text-xs text-warning"></i>
                <i class="lab-fill-star text-xs text-light-white"></i>
            </div>
            <span class="text-xs font-medium text-light-white">{{ product.review }} Reviews</span>
        </div>
        <p class="text-xl font-bold text-primary">${{ product.new_price }} <span class="text-base font-medium text-negative-red line-through">${{product.previous_price}}</span></p>
    </RouterLink>
</template>
<script>
import { RouterLink } from 'vue-router';
import ProductDetails from '../../../pages/client/ProductDetails.vue';
    export default{
        props:{
            product:{type: Object, required:true}
        }, 
    }
</script>