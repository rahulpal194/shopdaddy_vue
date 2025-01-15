<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    components: {
        RouterView,
    },
  }
</script>

<template>
<RouterView v-slot="{ Component, route }">
      <main :key="route.name">
          <component :is="Component" />
      </main>
</RouterView>
</template>
