<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <nav class="nav">
      <RouterLink to="/variant-1" class="nav-link">Ir al Variante 1</RouterLink>
      <RouterLink to="/variant-2" class="nav-link">Ir al Variante 2</RouterLink>
    </nav>
  </div>
  <router-view></router-view>
</template>

<style scoped>
/* Contenedor principal */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3efff;
  font-family: 'Roboto', sans-serif;
  width: 100vw;
}

.nav {
  display: flex;
  gap: 1.5rem;
  background-color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.nav-link {
  text-decoration: none;
  color: #8350e6;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  border-radius: 4px;
}

/* Hover en los enlaces */
.nav-link:hover {
  background-color: #8350e6;
  color: white;
  border-color: #8350e6;
  box-shadow: 0px 4px 6px rgba(131, 80, 230, 0.4);
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-link {
    font-size: 1rem;
  }
}
</style>
