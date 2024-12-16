<template>
  <div class="container">
    <VariantTwo />
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
import VariantTwo from '@/components/VariantTwo.vue'
</script>
