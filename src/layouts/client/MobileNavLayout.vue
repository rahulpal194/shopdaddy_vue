<template>
    <nav class="flex items-center justify-between py-3 px-5 fixed bottom-0 left-0 z-[60] w-full drop-shadow-menu rounded-t-xl bg-white lg:hidden">
        <a href="./home.html" class="flex flex-col items-center gap-1 hover:text-primary">
            <i class="lab-line-home-smile text-sm leading-none"></i>
            <span class="text-xs capitalize">Home</span>
        </a>
        <a data-modal="#category" class="flex flex-col items-center gap-1 hover:text-primary">
            <i class="lab-line-category text-base leading-none"></i>
            <span class="text-xs capitalize">Category</span>
        </a>
        <button data-modal="#cart" class="show-modal">
            <div class="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden -mt-10">
                <div class="relative w-[52px] h-[52px] flex items-center justify-center rounded-full bg-primary drop-shadow-blue ">
                    <i class="lab-line-cart text-2xl text-white"></i>
                    <div class="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#FFBC1F]"></div>
                </div>
            </div>
        </button>
        <a href="./fabourite_products.html" class="flex flex-col items-center gap-1 hover:text-primary">
            <i class="lab-line-heart-round text-base leading-none"></i>
            <span class="text-xs capitalize">Wishlist</span>
        </a>
        <a data-drawer="#profile" class="flex flex-col items-center gap-1 hover:text-primary">
            <i class="lab-line-user text-base leading-none"></i>
            <span class="text-xs capitalize">Profile</span>
        </a>
    </nav>   
</template>