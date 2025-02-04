<script>
import { mapState } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import { useLanguageStore } from './stores/languages';
import { useCurrencyStore } from './stores/currency';
export default {
    components: {
        RouterView,
    },
    computed:{
        ...mapState(useLanguageStore,['languages']),
        ...mapState(useCurrencyStore,['currencys'])
    }
  }
</script>

<template>
<RouterView v-slot="{ Component, route }">
      <main :key="route.name">
          <component :is="Component"/>
      </main>
</RouterView>
</template>

