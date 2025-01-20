<template>
    <ul>
      <li v-for="currency in currencies" :key="currency" @click="selectCurrency(currency)">
        {{ currency }}
      </li>
    </ul>
</template>

<script>
export default {
  props: {
    currencies: Array,
    currentCurrency: String
  },
  methods: {
    selectCurrency(currency) {
      this.$emit('update:currentCurrency', currency); // Emit the new currency
    }
  }
};
</script>