<template>
   <ClientLayout>
    <!--====================================
                HERO PART START  
    =====================================-->
    <section class="container">
        <div class="row mb-8 lg:mb-12">
           <div class="col-12 lg:col-4 mt-6">
             <div class="p-4 border border-light-white rounded-2xl">
                <div class="flex items-start gap-3 mb-4">
                    <img class="w-14 h-14 rounded-full" src="/images/store-home/logo.png" alt="logo">
                    <div>
                        <h4 class="text-2xl font-medium mb-2">Export Fashion House</h4>
                        <p class="text-base font-medium text-highlight-red">66 Products</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 mb-6 leading-6">
                    <div class="flex items-center">
                        <i class="lab-fill-star text-2xl text-warning leading-6"></i>
                        <i class="lab-fill-star text-2xl text-warning leading-6"></i>
                        <i class="lab-fill-star text-2xl text-warning leading-6"></i>
                        <i class="lab-fill-star text-2xl text-warning leading-6"></i>
                        <i class="lab-fill-star text-2xl text-light-white leading-6"></i>
                    </div>
                    <p class="text-lg font-medium text-[#6E7191] leading-6">3,658 Reviews</p>
                </div>
                <p class="flex gap-2 items-start mb-4"><i class="lab-fill-map-point text-2xl text-[#A0A3BD] leading-6"></i> <span class="text-base font-normal">House: 23, Road: 01, Rupnagar R/A, Mirpur-2, Dhaka</span></p>
                <p class="flex gap-2 items-center mb-4"><i class="lab-fill-calling text-2xl text-[#A0A3BD] leading-6"></i> <span class="text-base font-normal">+94569875214</span></p>
                <p class="flex gap-2 items-center mb-4"><i class="lab-fill-mail text-2xl text-[#A0A3BD] leading-6"></i> <span class="text-base font-normal">exportfashionhosdfse@gmail.com</span></p>
                <button class="flex items-center justify-center gap-2 text-primary text-base leading-none font-bold cursor-pointer bg-[#F3F5FF] py-3 w-full rounded-xl hover:bg-primary hover:text-white transition-all duration-300"><i class="lab-fill-dialog text-2xl leading-6 "></i> Chat with Store</button>
             </div>
           </div>
           <div class="col-12 lg:col-8 lg:mt-6 rounded-2xl ">
             <img class="rounded-2xl w-full h-[352px] " src="/images/store-home/store banner.png" alt="banner" >
           </div>
        </div>
    </section>
    <!--====================================
                HERO PART END  
    =====================================-->

    <!--====================================
                NAV BUTTON PART START  
    =====================================-->
    <section class="container">
        <nav class="flex gap-4 md:gap-6 justify-center mb-6 sm:mb-8 pb-4 border-b border-light-white">
            <a href="./store-home.html" class=" bg-primary shadow-buttonprimary text-white hover:bg-primary hover:text-white text-base font-medium md:font-bold h-11 flex items-center justify-center px-4 md:px-6 rounded-xl transition-all duration-300 cursor-pointer">Store</a>
            <a href="./store-coupon.html" class="bg-light text-black hover:bg-primary  hover:text-white text-base font-medium md:font-bold h-11 flex items-center justify-center px-4 md:px-6 rounded-xl transition-all duration-300 cursor-pointer">Coupons</a>
            <a href="./store-Allproduct.html" class="bg-light hover:bg-primary text-black hover:text-white text-base whitespace-nowrap font-medium md:font-bold h-11 flex items-center justify-center px-4 md:px-6 rounded-xl transition-all duration-300 cursor-pointer">All Products</a>
        </nav>
    </section>
    <!--====================================
                NAV BUTTON PART START  
    =====================================-->

    <!--====================================
            NEW ARRIVAL PART START   
     =====================================-->
     <section class="container">
        <div class="swiper newArrivalSwiper md:mb-10 mb-8 lg:mb-20 ">
          <div class="flex justify-between items-center mb-6 md:mb-8">
              <h3 class="text-xl small:text-2xl md:text-3xl font-bold">
                  <i class="lab-fill-fire text-primary text-xl small:text-2xl md:text-3xl"></i> New Arrival
              </h3>
              <div class="flex justify-center gap-3">
                  <button class="button-prev w-9 h-9 rounded-full flex justify-center items-center text-primary bg-[#F3F5FF] hover:bg-primary hover:text-white transition-all duration-300">
                      <i class="lab-line-chevron-left text-xl"></i>
                  </button>
                  <button class="button-next w-9 h-9 rounded-full flex justify-center items-center text-primary bg-[#F3F5FF] hover:bg-primary hover:text-white transition-all duration-300">
                      <i class="lab-line-chevron-right text-xl"></i>
                  </button>
              </div>
          </div>
          <div class="flex swiper-wrapper">
              <div class="swiper-slide flex flex-col gap-2.5">
                  <div class="max-h-56 max-w-56 rounded-2xl relative">
                     <a href="./product-details.html"> <img src="../../images/bestSale/product1.png" alt="best sale product" class="aspect-square rounded-2xl" ></a>
                      <label class="absolute top-3 left-3 py-1 px-2 rounded-lg leading-snug text-white bg-highlight-red">35% Off</label>
                      <button class="fabourite absolute top-3 ltr:right-3 rtl:left-3 w-7 h-7 z-10 rounded-full bg-white flex justify-center items-center shadow-favourite"><i class="lab-line-heart-round"></i></button>
                  </div>
                  <h3 class="text-sm font-medium line-clamp-2"><a href="./product-details.html" class=" hover:text-primary"> New collection Stylish Combo Angelic T-shirt</a></h3>
                  <div class="flex items-center gap-2">
                      <div class="flex items-center">
                          <i class="lab-fill-star text-xs text-warning"></i>
                          <i class="lab-fill-star text-xs text-warning"></i>
                          <i class="lab-fill-star text-xs text-warning"></i>
                          <i class="lab-fill-star text-xs text-warning"></i>
                          <i class="lab-fill-star text-xs text-light-white"></i>
                      </div>
                      <span class="text-xs font-medium text-light-white">32 Reviews</span>
                  </div>
                  <p class="text-xl font-bold text-primary">$120.00 <span class="text-base font-medium text-negative-red line-through">$150.00</span></p>
              </div>
          </div>
        </div>
     </section>
   <!--====================================
          NEW ARRIVAL PART END   
   =====================================-->

   <!--====================================
          BEST RATED PART START   
   =====================================-->
   <section class="container">
      <div class=" md:mb-10 mb-8 lg:mb-20">
        <div class="flex justify-between items-center mb-6 md:mb-8">
            <h3 class="text-xl small:text-2xl md:text-3xl font-bold">
                <i class="lab-fill-fire text-primary text-xl small:text-2xl md:text-3xl"></i> Best Rated Products
            </h3>
            <button class="px-4 py-2 rounded-lg text-sm sm:text-base font-bold text-primary bg-[#F3F5FF] hover:bg-primary hover:text-white transition-all duration-300">
                View All
            </button>
        </div>
        <div class="grid grid-cols-2 small:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-x-4 gap-y-6 sm:gap-x-6">
          <div v-for="product in todayDeals" class="grid-cols-1 flex flex-col gap-2.5">
              <div class="max-h-56 max-w-56 rounded-2xl aspect-square relative">
                  <a href="./product-details.html"><img :src="product.img" alt="product1" class="rounded-2xl aspect-square" ></a>
                  <label v-if="product.label !=null" class="absolute top-3 ltr:left-3 rtl:right-3 py-1 px-2 rounded-lg leading-snug text-white bg-highlight-red">{{ product.label }} Off</label>
                  <button class="fabourite absolute top-3 ltr:right-3 rtl:left-3 w-7 h-7 z-10 rounded-full bg-white flex justify-center items-center shadow-favourite"><i class="lab-line-heart-round"></i></button>
              </div>
              <h3 class="text-sm font-medium line-clamp-2"><a href="./product-details.html" class=" hover:text-primary">{{ product.productname }}</a></h3>
              <div class="flex items-center gap-2">
                  <div class="flex items-center">
                      <i class="lab-fill-star text-xs text-warning"></i>
                      <i class="lab-fill-star text-xs text-warning"></i>
                      <i class="lab-fill-star text-xs text-warning"></i>
                      <i class="lab-fill-star text-xs text-warning"></i>
                      <i class="lab-fill-star text-xs text-light-white"></i>
                  </div>
                  <span class="text-xs font-medium text-light-white">{{product.review}} Reviews</span>
              </div>
              <p class="text-xl font-bold text-primary">${{ product.new_price }} <span class="text-base font-medium text-negative-red line-through">${{ product.new_price }} </span></p>
          </div>
        </div>
      </div>
   </section>
    <!--====================================
        BEST RATED PART END   
    =====================================-->

    <!--====================================
          BEST SELL PART START   
   =====================================-->
   <section class="container">
      <div class=" sm:mb-20 mb-12">
        <div class="flex justify-between items-center mb-6 md:mb-8">
            <h3 class="text-xl small:text-2xl md:text-3xl font-bold">
                <i class="lab-fill-fire text-primary text-xl small:text-2xl md:text-3xl"></i> Best Selling Products
            </h3>
            <button class="px-4 py-2 rounded-lg text-sm sm:text-base font-bold text-primary bg-[#F3F5FF] hover:bg-primary hover:text-white transition-all duration-300">
                View All
            </button>
        </div>
        <div class="grid grid-cols-2 small:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-x-4 gap-y-6 sm:gap-x-6">
          <div v-for="product in bestSell" class="grid-cols-1 flex flex-col gap-2.5">
              <div class="max-h-56 max-w-56 rounded-2xl aspect-square relative">
                  <a href="./product-details.html"><img :src="product.img" alt="product1" class="rounded-2xl  aspect-square" ></a>
                  <label v-if="product.label != 'null'" class="absolute top-3 left-3  py-1 px-2 rounded-lg leading-snug text-white bg-highlight-red">35% Off</label>
                  <button class="fabourite absolute top-3 right-3 w-7 h-7 z-10 rounded-full bg-white flex justify-center items-center shadow-favourite"><i class="lab-line-heart-round"></i></button>
              </div>
              <h3 class="text-sm font-medium line-clamp-2"><a href="./product-details.html" class=" hover:text-primary">{{ product.productname }}</a></h3>
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
              <p class="text-xl font-bold text-primary">${{ product.new_price }}<span class="text-base font-medium text-negative-red line-through">${{ product.previous_price }}</span></p>
          </div>
        </div>
      </div>
   </section>
    <!--====================================
        BEST SELL PART END   
    =====================================-->
   </ClientLayout>
</template>

<script>
import ClientLayout from '@/layouts/client/ClientLayout.vue';
import productsData from '@/assets/data/products.json'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
   export default {
    components:{
        ClientLayout,
        Swiper, SwiperSlide
    },
    data(){
      return {
            products : productsData,
            cloths :[],
            computer :[],
        }
    },
    computed:{
        todayDeals(){
            return this.cloths.slice(0,5)
        },
        bestSell(){
            return this.cloths.slice(0,5)
        },
        flashSell(){
            return this.cloths.slice(0,8)
        }, 
    },
    mounted(){
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            if(product.category=="cloth"){
                this.cloths.push(product);
            }
            else if(product.category == "computer"){
                this.computer.push(product)
            }
        }
    },
    setup() {
        const BestSellInstance = ref()
        const brandswiperInstance = ref()
        const blogswiperInstance = ref()
        
        function onBestSwiper(swiper) {
            BestSellInstance.value = swiper
        }
        function onBrandSwiper(swiper) {
            brandswiperInstance.value = swiper
        }
        function onBlogSwiper(swiper) {
            blogswiperInstance.value = swiper
        }
        const BestNextSlide = () => {
            BestSellInstance.value.slideNext()
        };
        const BestPrevSlide = () => {
            BestSellInstance.value.slidePrev()
        };
        const brandNextSlide = () => {
            brandswiperInstance.value.slideNext()
        };
        const brandPrevSlide = () => {
            brandswiperInstance.value.slidePrev()
        };
        const blogNextSlide = () => {
            brandswiperInstance.value.slideNext()
        };
        const blogPrevSlide = () => {
            brandswiperInstance.value.slidePrev()
        };
        return {
            BestPrevSlide,
            BestNextSlide,
            brandPrevSlide,
            brandNextSlide,
            onBestSwiper,
            onBrandSwiper,
            onBlogSwiper,
            blogNextSlide,
            blogPrevSlide
       };

   }
}
</script>