<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

defineOptions({
  name: 'DetailsPage', // Cambié el nombre del componente aquí
})

defineProps({
  message: String,
})

const route = useRoute()
const router = useRouter()

const currentVariant = computed(() => {
  const match = route.path.match(/variant-(\d+)/)
  return match ? parseInt(match[1]) : 1
})

const nextVariant = computed(() => (currentVariant.value === 1 ? 2 : 1))

const redirectRoute = () => {
  router.push(`/variant-${nextVariant.value}`)
}
</script>

<template>
  <div class="container">
    <section class="content">
      <p>{{ message }}</p>
      <RouterLink class="link-router" to="/">Inicio</RouterLink>
      <button class="link" @click="redirectRoute">Ir al variante {{ nextVariant }}</button>
    </section>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 100vh;
  background-color: #f0f0f0;
  gap: 10px;
}

.content {
  padding-right: 10px;
}
.link-router {
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  padding: 0px 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
  text-align: center;
  display: inline-block;
}

.link {
  padding: 10px 10px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: rgb(131, 80, 230);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.link:hover {
  background-color: rgb(131, 80, 230);
}
</style>
