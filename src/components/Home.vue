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
  height: 100vh; /* Centrar verticalmente */
  background-color: #f3efff; /* Fondo claro relacionado con #8350E6 */
  font-family: 'Roboto', sans-serif; /* Fuente moderna */
  width: 100vw;
}

/* Navegación */
.nav {
  display: flex;
  gap: 1.5rem; /* Espaciado entre los enlaces */
  background-color: #ffffff; /* Fondo blanco para resaltar */
  padding: 1rem 2rem;
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

/* Enlaces de navegación */
.nav-link {
  text-decoration: none; /* Quitar subrayado */
  color: #8350e6; /* Color principal */
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease; /* Transición para el hover */
  border: 2px solid transparent;
  border-radius: 4px; /* Bordes redondeados */
}

/* Hover en los enlaces */
.nav-link:hover {
  background-color: #8350e6; /* Fondo principal */
  color: white; /* Texto blanco */
  border-color: #8350e6; /* Borde principal */
  box-shadow: 0px 4px 6px rgba(131, 80, 230, 0.4); /* Sombra suave al hover */
}

/* Responsividad */
@media (max-width: 768px) {
  .nav {
    flex-direction: column; /* Colocar enlaces en columna */
    gap: 1rem;
  }

  .nav-link {
    font-size: 1rem; /* Ajustar tamaño de fuente */
  }
}
</style>
