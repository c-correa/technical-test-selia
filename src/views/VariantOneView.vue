<template>
  <div class="container">
    <VariantOne />
  </div>
  <router-view></router-view>
</template>

<style scoped>
.container {
  display: flex;
  height: 100%;
}
</style>

<script setup lang="ts">
import VariantOne from '@/components/VariantOne.vue'
</script>
