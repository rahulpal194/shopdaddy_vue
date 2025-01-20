<template>
     <header class="header pt-3 shadow-header bg-white w-full ">
        <div class="container pb-4 lg:pb-0">
            <!-- Top Navigation Bar -->
             <div class="top_nav transition-all flex justify-between items-center text-sm font-normal mb-6 md:mb-8">
                <nav class="text-sm font-normal">
                    <ul class="flex gap-8">
                        <li class="hidden lg:block"><a href="#">Contact Us</a></li>
                        <li class="hidden lg:block"><a href="#">About Us</a></li>
                        <li class="hidden lg:block"><a href="#">FAQ</a></li>
                        <li><a href="#" class="flex items-center"><i class="lab-line-call-calling text-base mr-2"></i>+98563214589</a></li>
                    </ul>  
                </nav>
                <div class="flex">
                    <div class="relative dropdown-group">
                        <button type="button" @click.prevent="handlePaper" class="dropdown-btn flex items-center justify-center  gap-2 rounded-xl ">
                            <i class="lab-line-currencies text-base"></i>
                            <span id="current-currency" class="whitespace-nowrap"></span>
                            <i class="dropdown-icon lab-line-chevron-down text-xs "></i>
                        </button>
                        <CurrencyPaperComponent :currencies="CurrencyDropdown" :currentCurrency="currentCurrency"/>
                    </div>
                    <div class="relative ps-8 dropdown-group">
                        <button class="dropdown-btn flex items-center justify-center gap-2 rounded-xl transition h-6" >
                            <img id="current-flag" src="/images/flag/united-states.png" alt="Current Flag"  class="w-4 h-4 rounded-full"> 
                            <span id="current-lang" class="whitespace-nowrap">English</span>
                            <i class="dropdown-icon lab-line-chevron-down text-xs"></i>
                        </button>
                        <LanguagePaperComponent/>
                    </div>
                </div>
             </div>
             <div class="items-center hidden">  
                <button class="search-hide lab-line-long-arrow-left text-2xl mr-2"></button>
                <div class="dropdown-group relative w-full h-11 border border-light-white focus-within:border-primary rounded-xl lg:flex items-center ps-3 p-[3px] flex transition-all duration-300">
                    <button class="dropdown-btn text-left flex items-center gap-2 text-sm font-medium whitespace-nowrap pr-2">All Categories <i class="dropdown-icon lab-fill-arrow-down text-xl" ></i></button>
                    <ul class="dropdown-list text-left absolute top-11 left-0 z-10 text-sm font-normal bg-white shadow-header p-4 rounded-xl">
                        <li class="pb-2"><a href="">All Categories </a></li>
                        <li class="py-2"><a href="">Computer & Accessories</a></li>
                        <li class="py-2"><a href="">Smartphone & Gadgets</a></li>
                        <li class="py-2"><a href="">Electronics</a></li>
                        <li class="py-2"><a href="">Beauty & Personal Care</a></li>
                        <li class="py-2"><a href="">Sports & Entertainment</a></li>
                        <li class="py-2"><a href="">Home & Living</a></li>
                        <li class="py-2"><a href="">Jewelry & Watches</a></li>
                        <li class="pt-2"><a href="">Kids & Toy</a></li>
                    </ul>
                    <form action="#" class="w-full flex h-full">
                        <input class="appearance-none font-normal text-sm text-[#6E7191] border-l pl-4 w-full h-full focus:outline-none" type="text" placeholder="Search for product">
                        <button class="ml-auto p-2 py-1 bg-primary rounded-lg cursor-pointer flex justify-center items-center">
                            <i class="lab-line-magnifer text-xl text-white" ></i>
                        </button>
                    </form>
                </div>
            </div>
            <!-- Search and User Info -->
            <div class="middle_nav flex items-center justify-between lg:justify-normal gap-x-[68px] lg:pb-4 lg:border-b transition-all duration-300">
               <button data-drawer="#sidebar" class=" block lg:hidden">
                    <i class="lab-line-dashboard text-2xl "></i>
               </button> 
                <a href="./home.html" class="max-w-36 flex-shrink-0">
                    <img src="/images/header/logo.png" alt="Logo" class="w-full">
                </a>
                <div class="dropdown-group max-w-[550px] relative w-full h-11 border border-light-white focus-within:border-primary rounded-xl lg:flex items-center ps-3 p-[3px]  hidden transition-all duration-300">
                    <button class="dropdown-btn text-left flex items-center gap-2 text-sm font-medium whitespace-nowrap pr-2">All Categories <i class="dropdown-icon lab-fill-arrow-down text-xl" ></i></button>
                        <ul class="dropdown-list text-left w-fit absolute top-11 left-0  z-[30] text-sm font-normal bg-white shadow-header p-4 rounded-xl hidden">
                            <li class="pb-2 hover:text-primary active:text-primary"><a href="">Computer & Accessories</a></li>
                            <li class="py-2 hover:text-primary active:text-primary"><a href="">Smartphone & Gadgets</a></li>
                            <li class="py-2 hover:text-primary active:text-primary"><a href="">Electronics</a></li>
                            <li class="py-2 hover:text-primary active:text-primary"><a href="">Beauty & Personal Care</a></li>
                            <li class="py-2 hover:text-primary active:text-primary"><a href="">Sports & Entertainment</a></li>
                            <li class="py-2 hover:text-primary active:text-primary"><a href="">Home & Living</a></li>
                            <li class="py-2 hover:text-primary active:text-primary"><a href="">Jewelry & Watches</a></li>
                            <li class="pt-2 hover:text-primary active:text-primary"><a href="">Kids & Toy</a></li>
                        </ul>
                    <form action="#" class="w-full flex h-full">
                        <input class="appearance-none font-normal text-sm text-[#6E7191] border-l pl-4 w-full h-full focus:outline-none" type="text" placeholder="Search for product">
                        <button class="ml-auto p-2 py-1 bg-primary rounded-lg cursor-pointer flex justify-center items-center">
                            <i class="lab-line-magnifer text-xl text-white" ></i>
                        </button>
                    </form>
                </div>
                <button class="search-open block lg:hidden">
                    <i class="lab-line-magnifer text-2xl "></i>
                </button>
                <div class="hidden lg:flex gap-6 items-center">
                    <div class="relative dropdown-group">
                        <button class="dropdown-btn flex flex-shrink gap-x-2 items-center group">
                            <i class="lab-line-administrator border rounded-full w-11 h-11 flex items-center justify-center text-xl group-hover:bg-primary-light transition-all duration-300"></i>
                            <span>
                                <small class="text-xs font-normal">Login/Signup</small>
                                <p class="text-sm font-medium whitespace-nowrap">My Account</p>
                            </span>
                        </button>
                        <ul class="dropdown-list text-left min-w-48 w-full absolute top-11 right-0 text-sm font-normal bg-white shadow-header p-4 rounded-xl hidden">
                            <li class="pb-3 text-sm font-medium group"><a href="./dashboard.html" class="flex items-center gap-2 group-hover:text-primary" ><i class="lab-dashboard text-base text-[#A0A3BD] group-hover:text-primary "></i> Dashboard</a></li>
                            <li class="pb-3 text-sm font-medium group"><a href="./order-history.html" class="flex items-center gap-2 group-hover:text-primary" ><i class="lab-fill-bag text-base text-[#A0A3BD] group-hover:text-primary "></i> Order History</a></li>
                            <li class="pb-3 text-sm font-medium group"><a href="./return_orders.html" class="flex items-center gap-2 group-hover:text-primary" > <i class="lab-fill-refresh text-base text-[#A0A3BD] group-hover:text-primary "></i>Return Orders</a></li>
                            <li class="pb-3 text-sm font-medium group"><a href="./my-review.html" class="flex items-center gap-2 group-hover:text-primary" ><i class="lab-fill-my-reviews text-base text-[#A0A3BD] group-hover:text-primary "></i> My Reviews</a></li>
                            <li class="pb-3 text-sm font-medium group"><a href="./account_edit_info.html" class="flex items-center gap-2 group-hover:text-primary" ><i class="lab-fill-account-info text-base text-[#A0A3BD] group-hover:text-primary "></i> Account Info</a></li>
                            <li class="pb-3 text-sm font-medium group"><a href="./customer_address.html" class="flex items-center gap-2 group-hover:text-primary" ><i class="lab-fill-map text-base text-[#A0A3BD] group-hover:text-primary "></i>Addresses</a></li>
                            <li class="pb-3 text-sm font-medium group"><a href="./chat.html" class="flex items-center gap-2 group-hover:text-primary" ><i class="lab-fill-message text-base text-[#A0A3BD] group-hover:text-primary "></i>Message with Us</a></li>
                            <li class="text-sm font-medium group"><a href="./login.html" class="flex items-center gap-2 group-hover:text-primary" ><i class="lab-fill-logout text-base text-[#A0A3BD] group-hover:text-primary "></i>Logout</a></li>
                        </ul>
                    </div>
                    <div class="flex gap-4">
                        <div class="relative dropdown-group">
                            <button class="dropdown-btn border rounded-full w-11 h-11 flex items-center justify-center relative hover:bg-primary-light transition-all duration-300">
                                <i class="lab-line-notification-alert text-xl"></i>
                                <div class="absolute top-2 right-1 rounded-full bg-primary w-2.5 h-2.5"></div>
                            </button>
                            <div class="dropdown-list text-left absolute top-12 right-0 text-sm font-normal bg-white shadow-header min-w-80 w-full rounded-xl hidden max-h-[450px] h-auto overflow-y-scroll thin-scrolling">
                               <div class="p-4 border-b border-light-white">
                                  <h6 class="text-left text-sm font-bold">All Notifications</h6>
                               </div>
                               <div class="px-4">
                                    <div class="py-3 border-b border-light-white">
                                        <p class="mb-2 text-sm font-normal">Order No: <span class="font-medium">20221221</span> & Shop: Underground Fashion has been <span class="text-negative-red font-medium">Delivered</span></p>
                                        <small class="text-light-dark">13 Nov, 2024</small>
                                    </div>
                                    <div class="py-3 border-b border-light-white">
                                        <p class="mb-2 text-sm font-normal">Order No: <span class="font-medium">20221221</span> & Shop: Underground Fashion has been <span class="text-negative-red font-medium">Delivered</span></p>
                                        <small class="text-light-dark">13 Nov, 2024</small>
                                    </div>
                                    <div class="py-3 border-b border-light-white">
                                        <p class="mb-2 text-sm font-normal">Order No: <span class="font-medium">20221221</span> & Shop: Underground Fashion has been <span class="text-negative-red font-medium">Delivered</span></p>
                                        <small class="text-light-dark">13 Nov, 2024</small>
                                    </div>
                               </div>
                            </div>
                        </div>
                        <a href="./compare.html" class="border rounded-full w-11 h-11 flex items-center justify-center relative hover:bg-primary-light transition-all duration-300">
                            <i class="lab-fill-horizontal text-xl"></i>
                            <span class="absolute top-2 right-1 rounded-full bg-primary w-2.5 h-2.5"></span>
                        </a>
                        <button class="border rounded-full w-11 h-11 flex items-center justify-center relative hover:bg-primary-light transition-all duration-300">
                            <i class="lab-line-heart-round text-xl"></i>
                            <span class="absolute top-2 right-1 rounded-full bg-primary w-2.5 h-2.5"></span>
                        </button>
                        <div class="relative dropdown-group">
                            <button class="dropdown-btn flex items-center justify-center relative gap-x-2 border rounded-full w-11 h-11 hover:bg-primary-light transition-all duration-300">
                                <i class="lab-line-cart text-xl"></i>
                                <span class="absolute top-2 right-1 rounded-full bg-primary w-2.5 h-2.5"></span>
                            </button>
                            <div class="dropdown-list text-left absolute top-12 right-0 text-sm font-normal bg-white shadow-header min-w-80 w-full  rounded-xl hidden">
                                <div class="max-h-80 h-auto thin-scrolling p-4 pr-0">
                                    <div class="flex gap-x-2 pb-3 border-b border-[#EFF0F6] mb-3">
                                        <div class="w-20 h-20 rounded-2xl">
                                            <img src="/images/cart/prdt1.png" class="w-full h-full" alt="product1">
                                        </div>
                                        <div class="text-ellipsis">
                                            <h4 class="whitespace-nowrap text-sm font-medium mb-2">New collection Stylish Comb</h4>
                                            <p class="text-sm font-normal"> <span class="text-[#6E7191]">color</span>: Green</p>
                                            <p class="text-sm font-normal"> <span class="text-[#6E7191]">Region</span>: US</p>
                                            <p class="text-sm font-normal"> <span class="text-[#6E7191]">Storage</span>: 128GB</p>
                                            <div class="flex justify-between items-center mt-2">
                                                <p class="text-sm font-medium text-primary">$899.99</p>
                                                <div class="quantity_container max-w-[70px] w-full h-full bg-light rounded-[20px] flex justify-around">
                                                    <button ><i class="decrement lab-fill-delete text-red-600 text-base"></i></button>
                                                    <input type="text" class="quantity text-center outline-none w-5 bg-transparent" value="3"></input>
                                                    <button ><i class="increment lab-fill-circle-plus text-base text-primary"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex gap-x-2 pb-3 border-b border-[#EFF0F6] mb-3">
                                        <div class="w-20 h-20 rounded-2xl">
                                            <img src="/images/cart/prdt2.png" class="w-full h-full" alt="product2">
                                        </div>
                                        <div class="overflow-hidden text-ellipsis">
                                            <h4 class="whitespace-nowrap text-sm font-medium mb-2">New collection Stylish Comb</h4>
                                            <p class="text-sm font-normal"> <span class="text-[#6E7191]">color</span>: Green</p>
                                            <p class="text-sm font-normal"> <span class="text-[#6E7191]">Region</span>: US</p>
                                            <p class="text-sm font-normal"> <span class="text-[#6E7191]">Storage</span>: 128GB</p>
                                            <div class="flex justify-between items-center mt-2">
                                                <p class="text-sm font-medium text-primary">$899.99</p>
                                                <div class="quantity_container max-w-[70px] w-full h-full bg-light rounded-[20px] flex justify-around">
                                                    <button ><i class="decrement lab-fill-circle-minus text-base"></i></button>
                                                    <input type="text" class="quantity text-center outline-none w-5 bg-transparent" value="3"></input>
                                                    <button ><i class="increment lab-fill-circle-plus text-base text-primary"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex gap-x-2 pb-3">
                                        <div class="w-20 h-20 rounded-2xl">
                                            <img src="/images/cart/prdt2.png" class="w-full h-full" alt="product2">
                                        </div>
                                        <div class="overflow-hidden text-ellipsis">
                                            <h4 class="whitespace-nowrap text-sm font-medium mb-2">New collection Stylish Comb</h4>
                                            <p class="text-sm font-normal"> <span class="text-[#6E7191]">color</span>: Green</p>
                                            <p class="text-sm font-normal"> <span class="text-[#6E7191]">Region</span>: US</p>
                                            <p class="text-sm font-normal"> <span class="text-[#6E7191]">Storage</span>: 128GB</p>
                                            <div class="flex justify-between items-center mt-2">
                                                <p class="text-sm font-medium text-primary">$899.99</p>
                                                <div class="quantity_container max-w-[70px] w-full h-full bg-light rounded-[20px] flex justify-around">
                                                    <button ><i class="decrement lab-fill-circle-minus text-base"></i></button>
                                                    <input type="text" class="quantity text-center outline-none w-5 bg-transparent" value="3"></input>
                                                    <button ><i class="increment lab-fill-circle-plus text-base text-primary"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-between border-t border-dashed border-t-[#EFF0F6] pt-3 px-4">
                                    <span class="text-base font-medium">Subtotal</span>
                                    <span class="text-base font-bold text-primary">$1799.98</span>
                                </div>
                                <div class="flex justify-between mt-4 px-4 pb-4">
                                     <a href="./cart.html" class="py-[6px] px-3 border border-primary rounded-lg text-primary whitespace-nowrap hover:bg-primary hover:text-white transition-all duration-300 ">View Cart</a>
                                     <a href="./shipping-information.html" class="py-[6px] px-3 bg-primary rounded-lg text-white">Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Main Navigation Bar -->
            <div class="bottom_nav lg:flex justify-between items-center text-base font-medium py-2 hidden">
                <div class="flex gap-8">
                    <div class="relative menudropdown-group">
                        <button class="menudropdown-btn bg-primary rounded-lg py-[10px] px-3 flex gap-x-8 items-center text-base font-bold text-white"><span><i class="lab-fill-dashboard text-white mr-2"></i> Browse Categories</span><i  class="menudropdown-icon lab-fill-arrow-down flex-1"></i>
                        </button>
                        <ul class="menudropdown-list text-left whitespace-nowrap min-w-60 w-full absolute top-11 left-0 text-sm font-normal bg-white shadow-header p-4 rounded-xl hidden">
                            <li class="relative"><a href="" class=" pb-3 text-left w-full flex items-center border-b border-b-[#EFF0F6]"><i class="lab-fill-t-shirt text-[#6E7191] text-base mr-2"></i> <span class="flex-1">Clothing & Fashion  </span><i class="lab-line-chevron-right"></i></a></li>
                            <li class="relative menudropdown-group">
                                <button class="menudropdown-btn py-3 text-left w-full flex items-center border-b border-b-[#EFF0F6]"><i class="lab-fill-display text-[#6E7191] text-base mr-2"></i> <span class="flex-1">Computer & Accessories</span><i class="lab-line-chevron-right"></i></button>
                                <ul class="menudropdown-list absolute min-w-60 w-full left-56 top-0 bg-white shadow-header p-4 rounded-xl">
                                    <li class=""><a href="" class="pb-3 text-left w-full flex items-center border-b border-b-[#EFF0F6]"><span class=" flex-1">Desktop & Components </span><i class="lab-line-chevron-right"></i></a></li>
                                    <li class="relative menudropdown-group">
                                        <button class="menudropdown-btn py-3 text-left w-full flex items-center border-b border-b-[#EFF0F6]"><span class=" flex-1">Laptop & Components</span><i class="lab-line-chevron-right"></i></button>
                                        <ul class="menudropdown-list absolute min-w-60 h-auto w-full left-56 top-0 bg-white shadow-header p-4 rounded-xl ">
                                            <li class=""><a href="" class="pb-3 text-left h-full w-full flex items-center border-b border-b-[#EFF0F6]"><span class="flex-1">All Laptop</span></a></li>
                                            <li class=""><a href="" class="py-3 text-left w-full flex items-center border-b border-b-[#EFF0F6]"><span class=" flex-1">Gaming Laptop</span></a></li>
                                            <li class=""><a href="" class="py-3 text-left w-full flex items-center border-b border-b-[#EFF0F6]"><span class=" flex-1">Laptop Bag</span></a></li>
                                            <li class=""><a href="" class="py-3 text-left w-full flex items-center border-b border-b-[#EFF0F6]"><span class=" flex-1">Laptop RAM</span></a></li>
                                            <li class="relative menudropdown-group">
                                                <button  class="menudropdown-btn pt-3 text-left w-full flex items-center"><span class=" flex-1">Laptop Accessories</span><i class="lab-line-chevron-right"></i></button>
                                                <ul class="menudropdown-list absolute min-w-60 w-full left-56 top-0 bg-white shadow-header p-4 rounded-xl">
                                                    <li class="pb-3 w-full text-left border-b border-b-[#EFF0F6]"><a href="" >Laptop Cooler</a></li>
                                                    <li class="py-3 w-full text-left border-b border-b-[#EFF0F6]"><a href="" >Laptop Charger/Adapter</a></li>
                                                    <li class="py-3 w-full text-left border-b border-b-[#EFF0F6]"><a href="" >Laptop Stand</a></li>
                                                    <li class="py-3 w-full text-left border-b border-b-[#EFF0F6]"><a href="" >Laptop Battery</a></li>
                                                    <li class="pt-3 w-full text-left "><a href="" >Laptop Display</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class=""><a href="" class="py-3 text-left w-full flex items-center border-b border-b-[#EFF0F6]"><span class=" flex-1">Gaming</span><i class="lab-line-chevron-right"></i></a></li>
                                    <li class=""><a href="" class="py-3 text-left w-full flex items-center border-b border-b-[#EFF0F6]"><span class=" flex-1">Accessories</span><i class="lab-line-chevron-right"></i></a></li>
                                    <li class=""><a href="" class="py-3 text-left w-full flex items-center border-b border-b-[#EFF0F6]"><span class=" flex-1">Official Equipment</span><i class="lab-line-chevron-right"></i></a></li>
                                    <li class=""><a href="" class="py-3 text-left w-full flex items-center border-b border-b-[#EFF0F6]"><span class=" flex-1">Network & Router</span><i class="lab-line-chevron-right"></i></a></li>
                                    <li class=""><a href="" class="pt-3 text-left w-full flex items-center"><span class=" flex-1">Monitors & Displays</span><i class="lab-line-chevron-right"></i></a></li>
                                </ul>
                            </li>
                            <li class=""><a href="" class="text-left w-full flex items-center border-b border-b-[#EFF0F6] py-3"><i class="lab-fill-smartphone-rotate-orientation text-[#6E7191] text-base mr-2"></i> <span class="flex-1">Smartphone & Gadgets</span><i class="lab-line-chevron-right"></i></a></li>
                            <li class=""><a href="" class="text-left w-full flex items-center border-b border-b-[#EFF0F6] py-3"><i class="lab-fill-tv text-[#6E7191] text-base mr-2"></i> <span class="flex-1">Electronics</span><i class="lab-line-chevron-right"></i></a></li>
                            <li class=""><a href="" class="text-left w-full flex items-center border-b border-b-[#EFF0F6] py-3"><i class="lab-fill-cosmetic text-[#6E7191] text-base mr-2"></i> <span class="flex-1">Beauty & Personal Care</span><i class="lab-line-chevron-right"></i></a></li>
                            <li class=""><a href="" class="text-left w-full flex items-center border-b border-b-[#EFF0F6] py-3"><i class="lab-fill-balls text-[#6E7191] text-base mr-2"></i> <span class="flex-1">Sports & Entertainment</span><i class="lab-line-chevron-right"></i></a></li>
                            <li class=""><a href="" class="text-left w-full flex items-center border-b border-b-[#EFF0F6] py-3"><i class="lab-fill-armchair text-[#6E7191] text-base mr-2"></i> <span class="flex-1">Home & Living</span><i class="lab-line-chevron-right"></i></a></li>
                            <li class=""><a href="" class="text-left w-full flex items-center border-b border-b-[#EFF0F6] py-3"><i class="lab-fill-medal-star text-[#6E7191] text-base mr-2"></i> <span class="flex-1">Jewelry & Watches</span><i class="lab-line-chevron-right"></i></a></li>
                            <li class=""><a href="" class="text-left w-full flex items-center pt-3"><i class="lab-fill-body text-[#6E7191] text-base mr-2 "></i> <span class="flex-1">Kids & Toy</span><i class="lab-line-chevron-right"></i></a></li>
                        </ul>
                    </div>
                    <nav class="flex items-center">
                        <ul class="flex gap-6">
                            <li><a href="./home.html" class="hover:text-primary active:text-primary">Home</a></li>
                            <li><a href="#" class="hover:text-primary active:text-primary">Campaign</a></li>
                            <li><a href="#today_deals" class="hover:text-primary active:text-primary">Today’s Deals</a></li>
                            <li><a href="#flash_sale" class="hover:text-primary active:text-primary">Flash Sale</a></li>
                            <li><a href="./blog.html" class="hover:text-primary active:text-primary">Blog</a></li>
                        </ul>
                    </nav>
                </div>
                <a href="./seller_info.html" class="text-base font-bold flex items-center hover:text-primary active:text-primary">
                    <i class="lab-line-branches text-xl mr-2"></i> Become a Seller
                </a>
            </div>
        </div>
    </header> 
</template>

<script>
import { ref } from 'vue';
import CurrencyPaperComponent from '../../components/client/papers/CurrencyPaperComponent.vue';
import LanguagePaperComponent from '../../components/client/papers/LanguagePaperComponent.vue';

import {usePaper} from '@/composables/paper'
export default {
    components:{
    CurrencyPaperComponent,
    LanguagePaperComponent,
   },
   setup() {
    const {handlePaper} = usePaper();
    const CurrencyDropdown = ['Usd', 'Bdt', 'Rs'];
    const currentCurrency = ref('Usd');  // Default selected currency
    return {
        handlePaper,
        currentCurrency,
        CurrencyDropdown
    }
}
}
</script>