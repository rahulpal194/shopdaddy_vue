<template>
    <ClientLayout>

        <!-- top Banner Part Start -->
        <section class="container">
            <div>
                <div class="grid grid-cols-2 md:grid-cols-3  sm:grid-rows-2 grid-flow-row md:grid-flow-col gap-4 md:gap-6 mb-8 md:pt-6">
                    <a href="#" class="col-span-2 small:row-span-1 sm:row-span-2 !max-h-[384px] rounded-xl md:rounded-2xl ">
                        <img src="/images/hero/banner1.png" alt="large image" class="h-full w-full rounded-xl md:rounded-2xl ">
                    </a>
                    <a href="#" class="rounded-2xl !col-span-1 sm:col-span-1 !max-h-[180px] ">
                        <img src="/images/hero/banner2.png" alt="banner2" class="rounded-xl md:rounded-2xl w-full h-full">
                    </a>
                    <a href="#" class="rounded-2xl !col-span-1 sm:col-span-1 !max-h-[180px] ">
                        <img src="/images/hero/banner3.png" alt="banner2" class="rounded-xl md:rounded-2xl w-full h-full">
                    </a>
                </div>
            </div>
        </section>
        <!-- top Banner Part Start -->

        <!--====================================
            BENEFITS PART START   
        =====================================-->
        <section class="container">
            <div class=" md:mb-10 mb-8 lg:mb-20">
                <div class="grid grid-cols-1 small:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="col-span-1 flex sm:flex-row flex-col items-center small:items-start sm:items-start gap-3">
                        <img src="/images/benefits/heart.png" alt="" class="w-11 h-11 rounded-full">
                        <div class="text-center small:text-left">
                            <h5 class="text-base font-bold small:whitespace-nowrap">Best Quality & Savings</h5>
                            <p class="text-sm font-normal">Comprehensive quality control and affordable prices</p>
                        </div>
                    </div>
                    <div class="col-span-1 flex sm:flex-row flex-col items-center small:items-start sm:items-start gap-3">
                       <img src="/images/benefits/driving.png" alt="" class="w-11 h-11 rounded-full">
                        <div class="text-center small:text-left">
                           <h5 class="text-base font-bold small:whitespace-nowrap">Worldwide Fast Delivery</h5>
                           <p class="text-sm font-normal">Fast and convenient door to door delivery</p>
                        </div>
                    </div>
                    <div class="col-span-1 flex sm:flex-row flex-col items-center small:items-start sm:items-start gap-3">
                       <img src="/images/benefits/card.png" alt="" class="w-11 h-11 rounded-full">
                        <div class="text-center small:text-left">
                           <h5 class="text-base font-bold small:whitespace-nowrap">Secure Online Payment</h5>
                           <p class="text-sm font-normal">Different secure payment methods for different countries</p>
                        </div>
                    </div>
                    <div class="col-span-1 flex sm:flex-row flex-col items-center small:items-start sm:items-start gap-3">
                       <img src="/images/benefits/headphone.png" alt="" class="w-11 h-11 rounded-full">
                        <div class="text-center small:text-left">
                           <h5 class="text-base font-bold small:whitespace-nowrap">24/7 Customer Service</h5>
                           <p class="text-sm font-normal">Efficient customer support from passionate team</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         <!--====================================
            BENEFITS PART END   
         =====================================-->

         <!--====================================
            TODAY DEALS PART START   
        =====================================-->
        <section class="container">
            <div id="today_deals" class="md:mb-10 mb-8 lg:mb-20">
                <div class="flex justify-between items-center mb-6 md:mb-8">
                    <h3 class="text-2xl md:text-3xl font-bold"><i class="lab-fill-bolt-circle text-primary text-2xl md:text-3xl"></i> Today’s Deals</h3>
                    <button class="px-4 py-2 text-sm sm:text-base font-bold rounded-lg text-primary bg-[#F3F5FF] hover:bg-primary hover:text-white transition-all duration-300">View All</button>
                </div>
                <div class="grid grid-cols-2 small:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:grid-flow-row gap-y-6 gap-x-4 sm:gap-x-6">
                    <div v-for="product in todayDeals" class="col-span-1 flex flex-col gap-2.5 group">
                        <div class="max-h-56 max-w-56 rounded-2xl aspect-square relative overflow-hidden">
                            <a href="./product-details.html"><img :src="product.img" alt="product1" class="rounded-2xl aspect-square group-hover:rotate-6 group-hover:scale-125 transition-all duration-500"></a>
                            <label v-if="product.label != 'null'" class="absolute top-3 left-3 py-1 px-2 rounded-lg leading-snug text-white bg-highlight-red">{{ product.label }}</label>
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
                        <p class="text-xl font-bold text-primary">${{ product.new_price }} <span class="text-base font-medium text-negative-red line-through">${{product.previous_price}}</span></p>
                    </div>
                </div>
            </div>
        </section>
        <!--====================================
            TODAY DEALS PART END   
        =====================================-->

        <!--====================================
            FLASH SALE PART START   
        =====================================-->
        <section class="container">
            <div id="flash_sale" class=" md:mb-10 mb-8 lg:mb-20">
                <div class="flex justify-between items-center mb-6 md:mb-8">
                    <h3 class="text-2xl md:text-3xl font-bold">
                        <i class="lab-fill-sale text-primary text-2xl md:text-3xl"></i> Flash Sale
                    </h3>
                    <button class="px-4 py-2 text-sm sm:text-base font-bold rounded-lg text-primary bg-[#F3F5FF] hover:bg-primary hover:text-white transition-all duration-300">
                        View All
                    </button>
                </div>
                <div class="w-full h-auto bg-white p-2 rounded-lg lg:hidden flex justify-between items-center mb-6 shadow-header">
                    <p class="mb-2">Offer ends in:</p>
                    <div id="time" class="flex justify-start gap-2">
                        <div class="circle">
                            <svg width="52" height="52" class="overflow-visible">
                                <circle cx="26" cy="26" r="26" class="background"></circle>
                                <circle cx="26" cy="26" r="26" id="hh" class="progress"></circle>
                            </svg>
                            <div id="hours" class="absolute top-2 left-0 w-full">00<br><span>hrs</span></div>
                        </div>
                        <div class="circle">
                            <svg width="52" height="52" class="overflow-visible">
                                <circle cx="26" cy="26" r="25" class="background"></circle>
                                <circle cx="26" cy="26" r="25" id="mm" class="progress"></circle>
                            </svg>
                            <div id="minutes" class="absolute top-2 left-0 w-full">00<br><span>min</span></div>
                        </div>
                        <div class="circle">
                            <svg width="52" height="52" class="overflow-visible">
                                <circle cx="26" cy="26" r="26" class="background"></circle>
                                <circle cx="26" cy="26" r="26" id="ss" class="progress"></circle>
                            </svg>
                            <div id="seconds" class="absolute top-2 left-0 w-full">00<br><span>sec</span></div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 small:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:grid-flow-col grid-rows-2 gap-x-4 gap-y-6 sm:gap-x-6">
                    <!-- Banner Column -->
                    <div class="hidden lg:block lg:col-span-auto row-span-2 relative">
                        <img src="/images/flashSale/sale-banner.png" class="h-full rounded-2xl" alt="Sale Banner">
                        <img src="/images/flashSale/flashsale.png" class="absolute bottom-32 left-4" alt="Flash Sale Image">
                        <div class="absolute bottom-4 w-full">
                            <div class="max-w-[198px] mx-auto h-auto bg-white p-2 rounded-lg ">
                                <p class="mb-2">Offer ends in:</p>
                                <div id="time" class="w-full flex justify-center gap-2">
                                    <div class="circle">
                                        <svg width="52" height="52" class="overflow-visible">
                                            <circle cx="26" cy="26" r="26" class="background"></circle>
                                            <circle cx="26" cy="26" r="26" id="hh" class="progress"></circle>
                                        </svg>
                                        <div id="hours" class="absolute top-2 left-0  w-full">00<br><span>hrs</span></div>
                                    </div>
                                    <div class="circle">
                                        <svg width="52" height="52" class="overflow-visible">
                                            <circle cx="26" cy="26" r="25" class="background"></circle>
                                            <circle cx="26" cy="26" r="25" id="mm" class="progress"></circle>
                                        </svg>
                                        <div id="minutes" class="absolute top-2 left-0 w-full">00<br><span>min</span></div>
                                    </div>
                                    <div class="circle">
                                        <svg width="52" height="52" class="overflow-visible">
                                            <circle cx="26" cy="26" r="26" class="background"></circle>
                                            <circle cx="26" cy="26" r="26" id="ss" class="progress"></circle>
                                        </svg>
                                        <div id="seconds" class="absolute top-2 left-0 w-full">00<br><span>sec</span></div>
                                    </div>
                                </div>
                            </div>  
                        </div> 
                    </div>
                    <!-- Product Columns -->
                    <div v-for="product in flashSell" class="col-span-1 flex flex-col gap-2.5 group">
                        <div class="max-h-56 max-w-56 rounded-2xl aspect-square relative overflow-hidden">
                            <a href="./product-details.html"><img :src="product.img" alt="product1" class="rounded-2xl aspect-square group-hover:rotate-6 group-hover:scale-125 transition-all duration-500"></a>
                            <label v-if="product.label != 'null'" class="absolute top-3 left-3 py-1 px-2 rounded-lg leading-snug text-white bg-highlight-red">{{ product.label }}</label>
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
                        <p class="text-xl font-bold text-primary">${{ product.new_price }} <span class="text-base font-medium text-negative-red line-through">${{product.previous_price}}</span></p>
                    </div>
                </div>
            </div>
        </section>
        <!--====================================
            FLASH SALE PART END   
        =====================================-->

        <!--====================================
            MID BANNER PART START   
        =====================================-->
        <section class="container">
            <div class=" md:mb-10 mb-8 lg:mb-20">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-flow-col grid-flow-row gap-4 sm:gap-6">
                    <a href="#" class="col-span-full md:col-span-1 row-span-2 h-full "> <img src="/images/hero/banner1.png" alt="banner1" class="rounded-2xl h-full w-full"></a>
                    <a href="#" class="col-span-full sm:col-span-1 w-full"><img src="/images/hero/banner2.png" alt="banner2" class="rounded-2xl w-full"></a>
                    <a href="#" class="col-pan-ful sm:col-span-1 w-full"> <img src="/images/hero/banner3.png" alt="banner3" class="rounded-2xl w-full"></a>
                    <a href="#" class=" col-span-full md:col-span-1 row-span-2 h-full "><img src="/images/hero/banner1.png" alt="banner3" class="rounded-2xl h-full w-full"></a>
                </div>
            </div>
        </section>
        <!--====================================
                MID BANNER PART END   
         =====================================-->

         <!--====================================
            BEST SELL PART START   
        =====================================-->
        <section class="container">
             <div class=" md:mb-10 mb-8 lg:mb-20">
               <div class="flex justify-between items-center mb-6 md:mb-8">
                   <h3 class="text-xl small:text-2xl md:text-3xl font-bold">
                       <i class="lab-fill-fire text-primary text-xl small:text-2xl md:text-3xl"></i> Best Selling Products
                   </h3>
                   <button class="px-4 py-2 font-bold rounded-lg text-sm sm:text-base text-primary bg-[#F3F5FF] hover:bg-primary hover:text-white transition-all duration-300">
                       View All
                   </button>
               </div>
               <div class="grid grid-cols-2 small:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 sm:gap-x-6">
                   <div v-for="product in cloths" class="col-span-1 flex flex-col gap-2.5 group">
                           <div class="max-h-56 max-w-56 rounded-2xl aspect-square relative overflow-hidden">
                               <a href="./product-details.html"><img :src="product.img" alt="product1" class="rounded-2xl aspect-square group-hover:rotate-6 group-hover:scale-125 transition-all duration-500"></a>
                               <label v-if="product.label != 'null'" class="absolute top-3 left-3 py-1 px-2 rounded-lg leading-snug text-white bg-highlight-red">{{ product.label }}</label>
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
                           <p class="text-xl font-bold text-primary">${{ product.new_price }} <span class="text-base font-medium text-negative-red line-through">${{product.previous_price}}</span></p>
                   </div>
               </div>
             </div>
        </section>
        <!--====================================
            BEST SELL PART END   
        =====================================-->

        <!--====================================
            TOP RATED SHOP PART START   
        =====================================-->
        <section class="container">
            <div class="md:mb-10 mb-8 lg:mb-20">
                <div class="flex justify-between items-center mb-6 md:mb-8">
                     <h3 class="text-2xl md:text-3xl font-bold">
                        <i class="lab-fill-shop text-primary text-2xl md:text-3xl"></i> Top Rated Shops
                    </h3>
                    <div class="flex justify-center gap-3">
                        <button @click="shopPrevSlide" class="swiper-prev-btn w-9 h-9 rounded-full flex justify-center items-center text-primary bg-[#F3F5FF] hover:bg-primary hover:text-white transition-all duration-300">
                            <i class="lab-line-chevron-left text-xl"></i>
                        </button>
                        <button @click="shopNextSlide" class="swiper-next-btn w-9 h-9 rounded-full flex justify-center items-center text-primary bg-[#F3F5FF] hover:bg-primary hover:text-white transition-all duration-300">
                            <i class="lab-line-chevron-right text-xl"></i>
                        </button>
                    </div>
                </div>
                <Swiper :loop="true" :speed="1000" :slides-per-view=6 :space-between=16 @swiper="onShopSwiper" ref="shopSwiper" :modules="[Navigation]" class="shopSwiper" >
                    <SwiperSlide v-for="shop in shops" class="border border-light-white rounded-xl">
                        <a href="./store-home.html" class="group">
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
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        <!--====================================
           TOP RATED SHOP PART END   
        =====================================-->

        <!--====================================
           LOWER BANNER PART START   
        =====================================-->
        <section class="container">
            <div class="mb-8 md:mb-10 lg:mb-20">
                <div class="grid grid-cols-2 gap-4 sm:gap-6 ">
                  <a href="#" class="col-span-full md:col-span-1 w-full h-44 ">
                    <img src="/images/lowerbanner/banner1.png" alt="banner1" class="rounded-2xl h-full w-full">
                  </a> 
                  <a href="#" class="col-span-full md:col-span-1 w-full h-44 ">
                    <img src="/images/lowerbanner/banner2.png" alt="banner2" class="rounded-2xl h-full w-full">
                  </a>
                </div>
            </div>
        </section>
        <!--====================================
            LOWER BANNER PART END   
        =====================================-->
        
        <!--====================================
            TRENDY PRODUCT PART START   
        =====================================-->
        <section class="container">
            <div class="md:mb-10 mb-8 lg:mb-20">
                <h3 class="text-xl small:text-2xl md:text-3xl font-bold mb-6">
                    <i class="lab-fill-essential-box text-primary text-xl small:text-2xl md:text-3xl"></i> Trendy Products by Categories
                </h3>
                <nav class="pb-4 border-b">
                    <Swiper :speed="1000" :slides-per-view="auto"  :space-between=16 class="trendySwiper flex tab">
                        <SwiperSlide class="!w-fit"><li class="active db-tab-btn swiper-slide px-4 py-[10px] rounded-xl  hover:shadow-buttonprimary  hover:bg-primary text-center hover:text-white transition-all duration-300 cursor-pointer text-base md:text-xl font-medium  text-nowrap" data-target="#cloth">Clothing & Fashion</li></SwiperSlide>
                        <SwiperSlide class="!w-fit"><li class="db-tab-btn swiper-slide px-4 py-[10px] rounded-xl  hover:shadow-buttonprimary  hover:bg-primary text-center hover:text-white transition-all duration-300 cursor-pointer text-base md:text-xl font-medium  text-nowrap" data-target="#computer">Computer & Accessories</li></SwiperSlide>
                        <SwiperSlide class="!w-fit"><li class="db-tab-btn swiper-slide px-4 py-[10px] rounded-xl  hover:shadow-buttonprimary  hover:bg-primary text-center hover:text-white transition-all duration-300 cursor-pointer text-base md:text-xl font-medium  text-nowrap">Smartphone & Gadgets</li></SwiperSlide>
                        <SwiperSlide class="!w-fit"><li class="db-tab-btn swiper-slide px-4 py-[10px] rounded-xl  hover:shadow-buttonprimary  hover:bg-primary text-center hover:text-white transition-all duration-300 cursor-pointer text-base md:text-xl font-medium  text-nowrap">Electronics</li></SwiperSlide>
                        <SwiperSlide class="!w-fit"><li class="db-tab-btn swiper-slide px-4 py-[10px] rounded-xl  hover:shadow-buttonprimary  hover:bg-primary text-center hover:text-white transition-all duration-300 cursor-pointer text-base md:text-xl font-medium  text-nowrap">Beauty & Personal Care</li></SwiperSlide>
                        <SwiperSlide class="!w-fit"><li class="db-tab-btn swiper-slide px-4 py-[10px] rounded-xl  hover:shadow-buttonprimary  hover:bg-primary text-center hover:text-white transition-all duration-300 cursor-pointer text-base md:text-xl font-medium  text-nowrap">Sports & Entertainment</li></SwiperSlide>
                        <SwiperSlide class="!w-fit"><li class="db-tab-btn swiper-slide px-4 py-[10px] rounded-xl  hover:shadow-buttonprimary  hover:bg-primary text-center hover:text-white transition-all duration-300 cursor-pointer text-base md:text-xl font-medium  text-nowrap">Home & Living</li></SwiperSlide>
                        <SwiperSlide class="!w-fit"><li class="db-tab-btn swiper-slide px-4 py-[10px] rounded-xl  hover:shadow-buttonprimary  hover:bg-primary text-center hover:text-white transition-all duration-300 cursor-pointer text-base md:text-xl font-medium  text-nowrap">Jewelry & Watches</li></SwiperSlide>
                        <SwiperSlide class="!w-fit"><li class="db-tab-btn swiper-slide px-4 py-[10px] rounded-xl  hover:shadow-buttonprimary  hover:bg-primary text-center hover:text-white transition-all duration-300 cursor-pointer text-base md:text-xl font-medium  text-nowrap">Kids & Toy</li></SwiperSlide>
                    </Swiper>
                </nav>
                <div class="category">
                <div class="db-tab-div mt-4 active" id="cloth">
                    <div class="grid grid-cols-2 small:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  grid-flow-dense gap-x-4 gap-y-6 sm:gap-x-6">
                        <div v-for="product in cloths" class="col-span-1 flex flex-col gap-2.5 group">
                           <div class="max-h-56 max-w-56 rounded-2xl aspect-square relative overflow-hidden">
                               <a href="./product-details.html"><img :src="product.img" alt="product1" class="rounded-2xl aspect-square group-hover:rotate-6 group-hover:scale-125 transition-all duration-500"></a>
                               <label v-if="product.label != 'null'" class="absolute top-3 left-3 py-1 px-2 rounded-lg leading-snug text-white bg-highlight-red">{{ product.label }}</label>
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
                           <p class="text-xl font-bold text-primary">${{ product.new_price }} <span class="text-base font-medium text-negative-red line-through">${{product.previous_price}}</span></p>
                        </div>
                    </div>
                </div>
                <div class="db-tab-div mt-4 " id="computer" >
                    <div class="grid grid-cols-2 small:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  grid-flow-dense gap-x-4 gap-y-6 sm:gap-x-6">
                        <div v-for="product in computer" class="col-span-1 flex flex-col gap-2.5 group">
                           <div class="max-h-56 max-w-56 rounded-2xl aspect-square relative overflow-hidden">
                               <a href="./product-details.html"><img :src="product.img" alt="product1" class="rounded-2xl aspect-square group-hover:rotate-6 group-hover:scale-125 transition-all duration-500"></a>
                               <label v-if="product.label != 'null'" class="absolute top-3 left-3 py-1 px-2 rounded-lg leading-snug text-white bg-highlight-red">{{ product.label }}</label>
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
                           <p class="text-xl font-bold text-primary">${{ product.new_price }} <span class="text-base font-medium text-negative-red line-through">${{product.previous_price}}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <!--====================================
           TRENDY PRODUCT PART START   
        =====================================-->

        <!--====================================
           TOP BRANDS PART START   
        =====================================-->
        <section class="container">
            <div class="swiper brandSwiper md:mb-10 mb-8 lg:mb-20">
                <div class="flex justify-between mb-6 md:mb-8">
                    <h3 class="text-2xl md:text-3xl font-bold">
                        <i class="lab-fill-medal-ribbons text-primary text-2xl md:text-3xl"></i> Top Brands
                    </h3>
                    <div class="flex gap-3">
                        <button @click="brandPrevSlide" class="button-prev w-9 h-9 rounded-full flex justify-center items-center text-primary bg-[#F3F5FF] hover:bg-primary hover:text-white transition-all duration-300">
                            <i class="lab-line-chevron-left text-xl"></i>
                        </button>
                        <button @click="brandNextSlide" class="button-next w-9 h-9 rounded-full flex justify-center items-center text-primary bg-[#F3F5FF] hover:bg-primary hover:text-white transition-all duration-300">
                            <i class="lab-line-chevron-right text-xl"></i>
                        </button>
                    </div>
                </div>
                <Swiper :speed="1000" :slides-per-view="6"  :space-between=16 @swiper="onBrandSwiper" ref="brandSwiper" class="flex gap-4 sm:gap-6 flex-nowrap">
                    <SwiperSlide v-for="brand in brands" class="border border-light-white rounded-xl !flex justify-center items-center !h-24">
                        <img :src="brand.img" alt="">
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        <!--====================================
            TOP BRANDS PART END   
        =====================================-->

        <!--====================================
                  BLOGS PART START   
        =====================================-->
        <section class="container">
           <div class="md:mb-10 mb-8 lg:mb-20">
               <div class="swiper blogSwiper">
                   <div class="flex justify-between mb-6 md:mb-8">
                       <h3 class="text-2xl md:text-3xl font-bold">
                           <i class="lab-fill-notes text-primary text-2xl md:text-3xl"></i> Latest Blog
                       </h3>
                       <div class="flex gap-3">
                           <button @click="blogPrevSlide" class="swiper-button w-9 h-9 rounded-full flex justify-center items-center text-primary bg-[#F3F5FF] hover:bg-primary hover:text-white transition-all duration-300">
                               <i class="lab-line-chevron-left text-xl"></i>
                           </button>
                           <button @click="blogNextSlide" class="swiper-button w-9 h-9 rounded-full flex justify-center items-center text-primary bg-[#F3F5FF] hover:bg-primary hover:text-white transition-all duration-300">
                               <i class="lab-line-chevron-right text-xl"></i>
                           </button>
                       </div>
                   </div>
                   <Swiper :speed="1000" :slides-per-view="4"  :space-between=16 @swiper="onBlogSwiper" ref="blogSwiper" class="flex gap-4 sm:gap-6">
                       <SwiperSlide v-for="blog in blogs" class="border border-light-white rounded-xl">
                            <a href="./blog_details.html" class="group">
                               <img :src="blog.coverimg" alt="cover1" class="w-full h-36 rounded-t-xl">
                               <div class="p-4">
                                   <span class="text-xs font-medium text-[#6E7191] flex items-center mb-2"><i class="lab-line-calendar text-base text-primary mr-2"></i>{{ blog.date }}</span>
                                   <h6 class="t6ext-base font-medium line-clamp-2 mb-4 group-hover:text-primary">{{ blog.label }}</h6>
                                   <a href="./blog_details.html" class="text-sm font-bold text-primary">Read More</a>
                               </div>
                            </a>
                        </SwiperSlide>
                   </Swiper>
               </div>
           </div>
        </section>
        <!--====================================
                   BLOGS PART END   
        =====================================-->

    </ClientLayout>
</template>

<script>
// Components
import ClientLayout from '@/layouts/client/ClientLayout.vue';
import productsData from '@/assets/data/products.json'
import shopData from '@/assets/data/shops.json'
import brandsData from '@/assets/data/brands.json'
import blogsData from '@/assets/data/blogs.json'
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';
import { Navigation } from 'swiper/modules';

export default {
    methods: {
        Navigation() {
            return Navigation
        }
    },
    components:{
    ClientLayout,
    Swiper, SwiperSlide
    },
    data(){
        return {
            products : productsData,
            shops : shopData,
            brands : brandsData,
            blogs : blogsData,
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
        const shopswiperInstance = ref()
        const brandswiperInstance = ref()
        const blogswiperInstance = ref()
        
        function onShopSwiper(swiper) {
            shopswiperInstance.value = swiper
        }
        function onBrandSwiper(swiper) {
            brandswiperInstance.value = swiper
        }
        function onBlogSwiper(swiper) {
            blogswiperInstance.value = swiper
        }
        const shopNextSlide = () => {
            shopswiperInstance.value.slideNext()
        };
        const shopPrevSlide = () => {
            shopswiperInstance.value.slidePrev()
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
            shopPrevSlide,
            shopNextSlide,
            brandPrevSlide,
            brandNextSlide,
            onShopSwiper,
            onBrandSwiper,
            onBlogSwiper,
            blogNextSlide,
            blogPrevSlide
       };
},
}

</script>