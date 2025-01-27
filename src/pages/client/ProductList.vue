<template>
    <ClientLayout>

    <!--====================================
        FILTER SIDEBAR PART START   
    =====================================-->
    <aside id="filter" class="drawer transition-all duration-500 ease-in-out">
        <div class="drawer-content w-72 p-4 h-full bg-white">
                <div class="flex justify-between items-start mb-4">
                    <a href="./index.html" class="w-28"><img src="../../images/header/logo.png" alt="logo" class="w-full"></a> 
                    <span class="drawer-close cursor-pointer ltr:ml-28 rtl:mr-28 lg:hidden text-primary block" id="close-filter-sidebar">
                        <i class="lab-fill-close-circle text-negative-red text-2xl"></i>
                    </span>
                </div>
                <div class=" w-full rounded-2xl mb-4 flex justify-between items-center shadow-header px-3 py-4">
                    <span href="#" class="text-base font-bold whitespace-nowrap">Filters</span>
                    <button class="text-negative-red text-sm font-medium">Clear All</button>
                </div>
                <div class="border border-light-white w-full p-3 rounded-2xl mb-4">
                    <div class="slider-container ">
                        <h5 class="text-base font-bold mb-4">Price Range</h5>
                        <div class="flex gap-3 mb-6">
                            <input type="number" id="minPrice" min="0" step="1" value="0" class="ps-3 focus:outline-none bg-[#EFF0F6] h-9 max-w-24 w-full rounded-lg">
                            <input type="number" id="maxPrice" min="0" step="1" value="1000" class="ps-3 focus:outline-none bg-[#EFF0F6] h-9 max-w-24 w-full rounded-lg">
                        </div>
                    </div>
                    <div class="range-slider">
                        <span class="range-progress"></span>
                        <input type="range" id="rangeMin" min="0" max="1000" step="1" value="0">
                        <input type="range" id="rangeMax" min="0" max="1000" step="1" value="1000">
                    </div>
                </div>
                <div class="border border-light-white w-full p-3 rounded-2xl mb-4">
                    <button type="button" class="filter group text-gray-700 font-bold flex justify-between w-full">
                       <span> Color </span>
                       <i class="icon lab-line-chevron-down text-base font-semibold transition-all duration-500 group-hover:text-primary"></i>
                    </button>
                    <div style="height:0px;" class="overflow-hidden transition-all duration-500" >
                       <form class="w-full flex flex-col gap-4 ">
                           <label for="black" class="flex items-center gap-3 cursor-pointer group">
                               <input type="checkbox" id="black" class="field-checkbox cursor-pointer"/>
                               <span class="text-sm  cursor-pointer">Black</span>
                            </label>
                           <label for="navyblue" class="flex items-center gap-3 cursor-pointer group">
                               <input type="checkbox" id="navyblue" class="field-checkbox cursor-pointer"/>
                               <span class="text-sm  cursor-pointer">Navy Blue</span>
                            </label>
                           <label for="green" class="flex items-center gap-3 cursor-pointer group">
                               <input type="checkbox" id="green" class="field-checkbox cursor-pointer"/>
                               <span class="text-sm  cursor-pointer">Green</span>
                            </label>
                           <label for="babypink" class="flex items-center gap-3 cursor-pointer group">
                               <input type="checkbox" id="babypink" class="field-checkbox cursor-pointer"/>
                               <span class="text-sm  cursor-pointer">Baby Pink</span>
                            </label>
                           <label for="meroon" class="flex items-center gap-3 cursor-pointer group">
                               <input type="checkbox" id="meroon" class="field-checkbox cursor-pointer"/>
                               <span class="text-sm  cursor-pointer">Meroon</span>
                            </label>
                           <label for="lightblue" class="flex items-center gap-3 cursor-pointer group">
                               <input type="checkbox" id="lightblue" class="field-checkbox cursor-pointer"/>
                               <span class="text-sm  cursor-pointer">Light Blue</span>
                            </label>
                           <label for="white" class="flex items-center gap-3 cursor-pointer group">
                               <input type="checkbox" id="white" class="field-checkbox cursor-pointer"/>
                               <span class="text-sm  cursor-pointer">White</span>
                            </label>
                       </form>
                   </div>                 
               </div>
               <div class="border border-light-white w-full p-3 rounded-2xl mb-4">
                   <button type="button" class="filter  group text-gray-700 font-bold flex justify-between w-full">
                      <span> Size </span>
                      <i class="icon lab-line-chevron-down text-base font-semibold transition-all duration-500 group-hover:text-primary"></i>
                   </button>
                   <div style="height:0px;" class="overflow-hidden transition-all duration-500" >
                      <form class="w-full flex flex-col gap-4">
                          <label for="s" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="s" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">S</span>
                           </label>
                          <label for="m" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="m" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">M</span>
                           </label>
                          <label for="l" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="l" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">L</span>
                           </label>
                          <label for="xl" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="xl" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">XL</span>
                           </label>
                          <label for="xxl" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="xxl" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">XXL</span>
                           </label>
                      </form>
                  </div>                 
               </div>
               <div class="border border-light-white w-full p-3 rounded-2xl mb-4">
                   <button type="button" class="filter  group text-gray-700 font-bold flex justify-between w-full">
                      <span> Brand </span>
                      <i class="icon lab-line-chevron-down text-base font-semibold transition-all duration-500 group-hover:text-primary"></i>
                   </button>
                   <div style="height:0px;" class="overflow-hidden transition-all duration-500" >
                      <form class="w-full flex flex-col gap-4">
                          <label for="s" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="s" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">S</span>
                           </label>
                          <label for="m" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="m" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">M</span>
                           </label>
                          <label for="l" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="l" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">L</span>
                           </label>
                          <label for="xl" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="xl" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">XL</span>
                           </label>
                          <label for="xxl" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="xxl" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">XXL</span>
                           </label>
                      </form>
                  </div>                 
               </div>
               <div class="border border-light-white w-full p-3 rounded-2xl mb-4">
                   <button type="button" class="filter  group text-gray-700 font-bold flex justify-between w-full">
                      <span>Fabric </span>
                      <i class="icon lab-line-chevron-down text-base font-semibold transition-all duration-500 group-hover:text-primary"></i>
                   </button>
                   <div style="height:0px;" class="overflow-hidden transition-all duration-500" >
                      <form class="w-full flex flex-col gap-4">
                          <label for="s" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="s" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">S</span>
                           </label>
                          <label for="m" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="m" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">M</span>
                           </label>
                          <label for="l" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="l" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">L</span>
                           </label>
                          <label for="xl" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="xl" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">XL</span>
                           </label>
                          <label for="xxl" class="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" id="xxl" class="field-checkbox cursor-pointer"/>
                              <span class="text-sm  cursor-pointer">XXL</span>
                           </label>
                      </form>
                  </div>                 
               </div>
        </div>
    </aside>    
    <!--====================================
        CATEGORY SIDEBAR PART END   
    =====================================-->

    <!--====================================
           CATEGORY PART START   
    =====================================-->
    <section class="container">
            <nav class="flex pt-12 mb-3">
                <ul class="inline-flex items-center">
                  <li class="inline-flex items-center">
                    <a href="#" class="inline-flex items-center text-sm font-medium hover:text-primary ">
                      Home
                    </a>
                  </li>
                  <li>
                    <div class="flex items-center">
                        <i class="lab-line-chevron-right text-lg"></i>
                      <a href="#" class="text-sm font-medium hover:text-primary">Men</a>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center">
                        <i class="lab-line-chevron-right text-lg"></i>
                        <span class="text-sm font-medium text-[#6E7191]">Clothing</span>
                    </div>
                  </li>
                </ul>
            </nav>
            <div class="flex flex-col lg:flex-row lg:items-center justify-between w-full">
                <h1 class="text-2xl sm:text-3xl font-bold mb-4 lg:mb-0">Women Clothing & Fashion</h1>
                <div class="flex gap-1 md:gap-3 flex-shrink sm:flex-wrap">
                    <button data-drawer="#filter" class="open-filter-sidebar-button lg:hidden text-left flex flex-shrink items-center justify-between gap-3 border border-light-white  py-2 px-3 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-primary  hover:text-white"><i class="lab-line-range text-xl" ></i>Filter</button>
                    <div class="dropdown-group relative border border-light-white  py-2 rounded-lg ml-auto flex flex-shrink">
                        <button class="dropdown-btn text-left flex items-center justify-between gap-3 md:gap-11 px-3 text-sm font-medium whitespace-nowrap">Price (Low>High)<i class="dropdown-icon lab-line-chevron-down text-xl" ></i></button>
                        <ul class="dropdown-list ltr:*:text-left rtl:*:text-right w-full absolute top-12 ltr:left-0 rrtl:right-0 z-[30] text-sm font-normal bg-white shadow-header p-4 rounded-xl hidden">
                            <li class="pb-2">Latest</li>
                            <li class="py-2">Price (Low>High)</li>
                            <li class="py-2">Price (High>Low)</li>
                            <li class="py-2">A to Z Order</li>
                            <li class="pt-2">Z to A Order</li>
                        </ul>
                    </div>
                    <div class="dropdown-group relative border border-light-white px-2 sm:px-3 py-2 rounded-lg flex flex-shrink">
                        <button class="dropdown-btn text-left w-full flex items-center justify-between gap-2 text-sm font-medium whitespace-nowrap">24<i class="dropdown-icon lab-line-chevron-down text-xl" ></i></button>
                        <ul class="dropdown-list ltr:*:text-left rtl:*:text-right w-full absolute top-12 left-0 z-[30] text-sm font-normal bg-white shadow-header p-4 rounded-xl hidden">
                            <li class="pb-2 hover:text-primary">26</li>
                            <li class="py-2 hover:text-primary">28</li>
                            <li class="py-2 hover:text-primary">30</li>
                            <li class="py-2 hover:text-primary">32</li>
                            <li class="pt-2 hover:text-primary">34</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="border-t border-light-white mt-4 pt-6">
            <div class="row">
                    <!-- Filter Column -->
                <div class="hidden lg:block lg:col-2">
                    <div class="w-full rounded-2xl mb-4 shadow-header px-3 py-4">
                        <div class="flex justify-between items-center">
                            <span href="#" class="text-base font-bold whitespace-nowrap">Filters</span>
                            <button onclick="clearfilter(this)" class="clear text-negative-red text-sm font-medium">Clear All</button>
                        </div>
                        <div class="filter-container mt-4 flex items-center gap-3">
                            <button onclick="handlefilter(this)" class="px-3 py-1.5 rounded-full bg-gray-100 flex items-center gap-3">
                                <span>Green</span>
                                <i class="lab-line-circle-cross text-sm text-highlight-red"></i>
                            </button>
                            <button onclick="handlefilter(this)" class="px-3 py-1.5 rounded-full bg-gray-100 flex items-center gap-3">
                                <span>White</span>
                                <i class="lab-line-circle-cross text-sm text-highlight-red"></i>
                            </button>
                        </div>
                    </div>
                    <div class="border border-light-white w-full p-3 rounded-2xl mb-4">
                        <div class="slider-container ">
                            <h5 class="text-base font-bold mb-4">Price Range</h5>
                            <div class="flex gap-3 mb-6">
                                <input type="number" id="minPrice" min="0" step="1" value="0" class="ps-3 focus:outline-none bg-[#EFF0F6] h-9 max-w-24 w-full rounded-lg">
                                <input type="number" id="maxPrice" min="0" step="1" value="1000" class="ps-3 focus:outline-none bg-[#EFF0F6] h-9 max-w-24 w-full rounded-lg">
                            </div>
                        </div>
                        <div class="range-slider">
                            <span class="range-progress"></span>
                            <input type="range" id="rangeMin" min="0" max="1000" step="1" value="0">
                            <input type="range" id="rangeMax" min="0" max="1000" step="1" value="1000">
                        </div>
                    </div>
                    <div class="border border-light-white w-full p-3 rounded-2xl mb-4">
                        <button type="button" class="filter group text-gray-700 font-bold flex justify-between w-full">
                           <span> Color </span>
                           <i class="icon lab-line-chevron-down text-base font-semibold transition-all duration-500 group-hover:text-primary"></i>
                        </button>
                        <div style="height:0px;" class="overflow-hidden transition-all duration-500" >
                           <form class="w-full flex flex-col gap-4 px-6 md:px-0">
                               <label for="black" class="flex items-center gap-3 cursor-pointer group">
                                   <input type="checkbox" id="black" class="field-checkbox cursor-pointer"/>
                                   <span class="text-sm cursor-pointer">Black</span>
                                </label>
                               <label for="navyblue" class="flex items-center gap-3 cursor-pointer group">
                                   <input type="checkbox" id="navyblue" class="field-checkbox cursor-pointer"/>
                                   <span class="text-sm  cursor-pointer">Navy Blue</span>
                                </label>
                               <label for="green" class="flex items-center gap-3 cursor-pointer group">
                                   <input type="checkbox" id="green" class="field-checkbox cursor-pointer"/>
                                   <span class="text-sm  cursor-pointer">Green</span>
                                </label>
                               <label for="babypink" class="flex items-center gap-3 cursor-pointer group">
                                   <input type="checkbox" id="babypink" class="field-checkbox cursor-pointer"/>
                                   <span class="text-sm  cursor-pointer">Baby Pink</span>
                                </label>
                               <label for="meroon" class="flex items-center gap-3 cursor-pointer group">
                                   <input type="checkbox" id="meroon" class="field-checkbox cursor-pointer"/>
                                   <span class="text-sm  cursor-pointer">Meroon</span>
                                </label>
                               <label for="lightblue" class="flex items-center gap-3 cursor-pointer group">
                                   <input type="checkbox" id="lightblue" class="field-checkbox cursor-pointer"/>
                                   <span class="text-sm  cursor-pointer">Light Blue</span>
                                </label>
                               <label for="white" class="flex items-center gap-3 cursor-pointer group">
                                   <input type="checkbox" id="white" class="field-checkbox cursor-pointer"/>
                                   <span class="text-sm  cursor-pointer">White</span>
                                </label>
                           </form>
                       </div>                 
                   </div>
                   <div class="border border-light-white w-full p-3 rounded-2xl mb-4">
                       <button type="button" class="filter group text-gray-700 font-bold flex justify-between w-full">
                          <span> Size </span>
                          <i class="icon lab-line-chevron-down text-base font-semibold transition-all duration-500 group-hover:text-primary"></i>
                       </button>
                       <div style="height:0px;" class="overflow-hidden transition-all duration-500">
                          <form class="w-full flex flex-col gap-4 md:px-0">
                              <label for="s" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="s" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">S</span>
                               </label>
                              <label for="m" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="m" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">M</span>
                               </label>
                              <label for="l" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="l" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">L</span>
                               </label>
                              <label for="xl" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="xl" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">XL</span>
                               </label>
                              <label for="xxl" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="xxl" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">XXL</span>
                               </label>
                          </form>
                      </div>                 
                   </div>
                   <div class="border border-light-white w-full p-3 rounded-2xl mb-4">
                       <button type="button" class="filter  group text-gray-700 font-bold flex justify-between w-full">
                          <span> Brand </span>
                          <i class="icon lab-line-chevron-down text-base font-semibold transition-all duration-500 group-hover:text-primary"></i>
                       </button>
                       <div style="height:0px;" class="overflow-hidden transition-all duration-500" >
                          <form class="w-full flex flex-col gap-4 px-6 md:px-0">
                              <label for="s" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="s" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">S</span>
                               </label>
                              <label for="m" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="m" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">M</span>
                               </label>
                              <label for="l" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="l" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">L</span>
                               </label>
                              <label for="xl" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="xl" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">XL</span>
                               </label>
                              <label for="xxl" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="xxl" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">XXL</span>
                               </label>
                          </form>
                      </div>                 
                   </div>
                   <div class="border border-light-white w-full p-3 rounded-2xl mb-4">
                       <button type="button" class="filter  group text-gray-700 font-bold flex justify-between w-full">
                          <span>Fabric </span>
                          <i class="icon lab-line-chevron-down text-base font-semibold transition-all duration-500 group-hover:text-primary"></i>
                       </button>
                       <div style="height:0px;" class="overflow-hidden transition-all duration-500" >
                          <form class="w-full flex flex-col gap-4 px-6 md:px-0">
                              <label for="s" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="s" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">S</span>
                               </label>
                              <label for="m" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="m" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">M</span>
                               </label>
                              <label for="l" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="l" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">L</span>
                               </label>
                              <label for="xl" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="xl" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">XL</span>
                               </label>
                              <label for="xxl" class="flex items-center gap-3 cursor-pointer group">
                                  <input type="checkbox" id="xxl" class="field-checkbox cursor-pointer"/>
                                  <span class="text-sm  cursor-pointer">XXL</span>
                               </label>
                          </form>
                      </div>                 
                   </div>
                </div>
                <!-- Product Columns -->
                 <div class="lg:col-10 col-12 ">
                    <div class="grid grid-cols-2 small:grid-cols-3 md:grid-cols-4 grid-flow-row-dense gap-x-4 gap-y-6 md:gap-x-6 border-b border-light-white pb-6 mb-6">
                        <RouterLink :to="{name:'ProductDetail', params:{id:product.id}}" v-for="product in products" class="grid-cols-1 flex flex-col gap-2.5">
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
                    </div>   
                    <div class="flex flex-col sm:flex-row justify-between items-center  mb-12 md:mb-20">
                        <p class="text-base font-medium mb-4 sm:mb-0">Showing 1-24 of 46 result</p>
                        <div class="flex gap-3">
                            <div class="w-11 h-11 border border-light-white rounded-lg flex items-center justify-center cursor-pointer">
                                <i class="lab-line-chevron-left text-lg"></i>
                            </div>
                            <div class="w-11 h-11 border border-light-white rounded-lg flex items-center justify-center cursor-pointer bg-primary text-white">
                                1
                            </div>
                            <div class="w-11 h-11 border border-light-white rounded-lg flex items-center justify-center cursor-pointer">
                                2
                            </div>
                            <div class="w-8 h-11 cursor-pointer flex justify-center items-end">
                                ...
                            </div>
                            <div class="w-11 h-11 border border-light-white rounded-lg flex items-center justify-center cursor-pointer">
                                12
                            </div>
                            <div class="w-11 h-11 border border-light-white rounded-lg flex items-center justify-center cursor-pointer">
                                <i class="lab-line-chevron-right text-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            </div>
    </section>
    <!--====================================
           CATEGORY PART END   
    =====================================-->

    </ClientLayout>
</template>
<script>
import ClientLayout from '@/layouts/client/ClientLayout.vue';
import productsData from '@/assets/data/products.json'
import { RouterLink } from 'vue-router';
import ProductDetails from './ProductDetails.vue';
   export default{
    components:{
        ClientLayout,
        RouterLink
    },
    data(){
        return {
            products : productsData
        }
    }
   }

</script>