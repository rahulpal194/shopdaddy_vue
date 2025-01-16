<script setup>
import HeaderLayout from './HeaderLayout.vue';
import FooterLayout from './FooterLayout.vue';
import CookiesLayout from './CookiesLayout.vue';
import MobileNavLayout from './MobileNavLayout.vue';
</script>

<template>
    <HeaderLayout />
    <slot />
    <CookiesLayout/>
    <MobileNavLayout/>
    <FooterLayout/>
</template>