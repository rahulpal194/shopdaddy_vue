<template>
    <ClientLayout>
        <!--===============================
                BANNER PART START       
        =================================-->
        <section class="mb-8 sm:mb-20">
            <div class="container">
                
            </div>
        </section>
        <!--===============================
                BANNER PART END       
        =================================-->


        <!--===============================
                CATEGORY PART START       
        =================================-->
        <section class="sm:mb-10">
            <div class="container">
                <h2 class="text-xl sm:text-4xl font-bold -mb-6 sm:-mb-10">
                   Browser title
                </h2>
            </div>
        </section>
        <!--===============================
                CATEGORY PART END       
        =================================-->


        <!--===============================
                PROMOTIONAL PART START       
        =================================-->
        <section class="mb-8 sm:mb-20">
            <div class="container">
            </div>
        </section>
        <!--===============================
                PROMOTIONAL PART END       
        =================================-->


        <!--===============================
                POPULAR PART START       
        =================================-->
        <section class="mb-8 sm:mb-20">
            <div class="container">
                <div class="flex items-center justify-between gap-4 mb-5 sm:mb-7">
                    <h2 class="text-xl sm:text-4xl font-bold capitalize">
                        {{ $t('Popular Items') }}
                    </h2>
                    <RouterLink to="/products" class="h-8 !leading-8 sm:h-11 sm:!leading-11 px-3 sm:px-4 rounded-3xl capitalize text-xs sm:text-base font-semibold whitespace-nowrap bg-primary/5 text-primary transition-all duration-300 hover:bg-primary hover:text-white">
                        {{ $t('view all') }}
                    </RouterLink>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                    <ProductCardComponent 
                        v-for="product in products.filter(item => item.isPopular)" 
                        :data="product"
                    />
                </div>
            </div>
        </section>
        <!--===============================
                  POPULAR PART END       
        =================================-->


        <!--===============================
                PROMOTIONAL PART START       
        =================================-->
        <section class="mb-8 sm:mb-20">
            <div class="container">
                <RouterLink to="#" class="block">
                    <img 
                        class="w-full rounded-lg sm:rounded-3xl" 
                        src="#" 
                        alt="banners"
                    >
                </RouterLink>
            </div>
        </section>
        <!--===============================
                PROMOTIONAL PART END       
        =================================-->


        <!--===============================
                TRENDING PART START       
        =================================-->
        <section class="sm:mb-10">
            <div class="container">
                <h2 class="text-xl sm:text-4xl font-bold -mb-6 sm:-mb-10">
                    {{ $t('Trending Items') }}
                </h2>
            </div>
        </section>
        <!--===============================
                TRENDING PART END       
        =================================-->


        <!--===============================
                OFFERS PART START       
        =================================-->
        <section class="mb-6 sm:mb-12">
            <div class="container">
                <div class="flex items-center justify-between gap-4 mb-5 sm:mb-7">
                    <h2 class="text-xl sm:text-4xl font-bold capitalize">
                        {{ $t('Special Offers') }}
                    </h2>
                    <RouterLink to="/products" class="h-8 !leading-8 sm:h-11 sm:!leading-11 px-3 sm:px-4 rounded-3xl capitalize text-xs sm:text-base font-semibold whitespace-nowrap bg-primary/5 text-primary transition-all duration-300 hover:bg-primary hover:text-white">
                        {{ $t('view all') }}
                    </RouterLink>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                    <ProductCardComponent 
                        v-for="product in (products.filter(item => item.price.first).slice(0, 5))" 
                        :data="product"
                    />
                </div>
            </div>
        </section>
        <!--===============================
                OFFERS PART END       
        =================================-->


        <!--===============================
                BENEFIT PART START       
        =================================-->
        <section class="pt-6 pb-24 sm:py-12 border-t border-slate-100">
            <div class="container">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div v-for="benefit in benefits" class="w-full max-w-[236px] relative ltr:lg:pl-9 rtl:lg:pr-9">
                        <img :src="benefit.src" alt="benefit" class="w-6 mb-3 sm:mb-4 lg:mb-0 lg:absolute lg:top-0 ltr:lg:left-0 rtl:lg:right-0">
                        <h4 class="text-sm sm:text-base font-semibold capitalize mb-1 sm:mb-2">{{ benefit.title }}</h4>
                        <p class="text-xs sm:text-sm">{{ benefit.describe }}</p>
                    </div>
                </div>
            </div>
        </section>
        <!--===============================
                BENEFIT PART END       
        =================================-->
    </ClientLayout>
</template>

<script>
// Components
import ClientLayout from '@/layouts/client/ClientLayout.vue';

export default {
    components: {
        ClientLayout,
    },
    data() {
        return {
            benefits: [
                { 
                    "src": "/images/benefits/heart.png", 
                    "title": "Quality & Savings", 
                    "describe": "Comprehensive quality control and affordable prices" 
                },
                { 
                    "src": "/images/benefits/driving.png", 
                    "title": "Fast Delivery", 
                    "describe": "Fast and convenient door to door delivery" 
                },
                { 
                    "src": "/images/benefits/wallet.png", 
                    "title": "Secure Payment", 
                    "describe": "Different secure payment methods" 
                },
                { 
                    "src": "/images/benefits/message.png", 
                    "title": "Proffessional Service", 
                    "describe": "Efficient customer support from passionate team" 
                }
            ],
            ads: [
                { image: '/images/ads/01.jpg', route: '#' },
                { image: '/images/ads/02.jpg', route: '#' },
                { image: '/images/ads/03.jpg', route: '#' },
            ]
        }
    },
   
}
</script>