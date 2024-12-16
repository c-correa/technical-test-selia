<template>
  <div class="container">
    <selia-sidebar
      title="Selia"
      :navigationItems="navigationItems"
      :close-sidebar="closeSidebar"
      :toggle-sidebar="toggleSidebar"
      :close-sidebar-function="closeSidebarFunction"
    >
    </selia-sidebar>
    <div class="children">
      <Details :message="selectedItemName" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import './lit-components/sidebar'
import { icons } from '@/utils/constant'
import { useRoute } from 'vue-router'
import Details from './Details.vue'

defineProps({
  closeSidebar: Boolean,
  toggleSidebar: Function,
  closeSidebarFunction: Function,
})

const { ICON_APPOINTMENTS, ICON_PATIENTS, ICON_LOCK, ICON_EYE } = icons()

const navigationItems = ref([
  {
    hash: 1,
    path: '/variant-2/appointments', // Ruta actualizada con el componente en inglés
    name: 'Citas',
    icon: ICON_APPOINTMENTS,
  },
  {
    hash: 1,
    path: '/variant-2/patients', // Ruta actualizada con el componente en inglés
    name: 'Pacientes',
    icon: ICON_PATIENTS,
  },
  {
    hash: 2,
    path: '/variant-2/specialists', // Ruta actualizada con el componente en inglés
    name: 'Especialistas',
    icon: ICON_LOCK,
  },
  {
    hash: 3,
    path: '/variant-2/services', // Ruta actualizada con el componente en inglés
    name: 'Servicios',
    icon: ICON_EYE,
  },
  {
    name: 'Cuenta',
    children: [
      {
        hash: 4,
        path: '/variant-2/profile', // Ruta actualizada con el componente en inglés
        name: 'Perfil',
        icon: ICON_EYE,
      },
    ],
  },
  {
    name: 'Seguridad',
    children: [
      {
        hash: 5,
        path: '/variant-2/change-password', // Ruta actualizada con el componente en inglés
        name: 'Cambiar contraseña',
        icon: ICON_EYE,
      },
      {
        hash: 6,
        path: '/variant-2/lock-pin', // Ruta actualizada con el componente en inglés
        name: 'Bloqueo de PIN',
        icon: ICON_LOCK,
      },
    ],
  },
])

const route = useRoute()

// Computed para encontrar el nombre del item seleccionado basado en la ruta actual
const selectedItemName = computed(() => {
  const matchedItem = findMatchingItem(route.path)
  return matchedItem ? matchedItem.name : 'Ningún item seleccionado'
})

// Función para buscar el item que coincide con el path
function findMatchingItem(path: string) {
  for (const item of navigationItems.value) {
    if (item.path === path) {
      return item
    }

    // Si el item tiene hijos, buscar en ellos también
    if (item.children) {
      const matchedChild = item.children.find((child) => child.path === path)
      if (matchedChild) {
        return matchedChild
      }
    }
  }
  return null
}

watch(
  () => route.path,
  () => {
    // El computed se encargará de actualizar el valor automáticamente.
  },
)
</script>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  height: 95%;
}
.children {
  background: #f0f0f0;
}
</style>
