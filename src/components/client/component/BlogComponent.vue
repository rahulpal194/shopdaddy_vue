<template>
    <RouterLink to="./blog_details.html" class="group">
        <img :src="blog.coverimg" alt="cover1" class="w-full h-36 rounded-t-xl">
        <div class="p-4">
            <span class="text-xs font-medium text-[#6E7191] flex items-center mb-2"><i class="lab-line-calendar text-base text-primary mr-2"></i>{{ blog.date }}</span>
            <h6 class="t6ext-base font-medium line-clamp-2 mb-4 group-hover:text-primary">{{ blog.label }}</h6>
            <a href="./blog_details.html" class="text-sm font-bold text-primary">Read More</a>
        </div>
    </RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
        props:{
            blog:{type:Object, required:true}
        }
    }
</script>