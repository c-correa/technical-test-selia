<template>
  <div class="container">
    <p>{{ message }}</p>
    <RouterLink class="link-router" to="/">Inicio</RouterLink>
    <button class="link" @click="redirectRoute">Ir al variante {{ nextVariant }}</button>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
defineProps({
  message: String, // Recibe el mensaje como un prop
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

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  gap: 20px; /* Espacio entre los elementos */
}

/* Estilo del RouterLink */
.link-router {
  font-size: 16px;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid #007bff;
  border-radius: 5px;
  transition: all 0.3s ease;
  text-align: center;
  display: inline-block;
}

.link-router:hover {
  background-color: #007bff;
  color: #ffffff;
}

/* Estilo del botón */
.link {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.link:hover {
  background-color: #0056b3;
}
</style>
