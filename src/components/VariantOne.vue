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
      <Details :message="messageDetail" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import './lit-components/sidebar'
import { icons } from '@/utils/constant'
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
    path: '/variant-1/appointments',
    name: 'Citas',
    icon: ICON_APPOINTMENTS,
  },
  {
    hash: 1,
    path: '/variant-1/patients',
    name: 'Pacientes',
    icon: ICON_PATIENTS,
  },
  {
    hash: 2,
    path: '/variant-1/specialists',
    name: 'Especialistas',
    icon: ICON_LOCK,
  },
  {
    hash: 3,
    path: '/variant-1/services',
    name: 'Servicios',
    icon: ICON_EYE,
  },
  {
    name: 'Seguridad',
    children: [
      {
        hash: 4,
        path: '/variant-1/change-password',
        name: 'Cambiar contraseña',
        icon: ICON_EYE,
      },
      {
        hash: 5,
        path: '/variant-1/lock-pin',
        name: 'Bloqueo de PIN',
        icon: ICON_LOCK,
      },
    ],
  },
])

const route = useRoute()

const selectedItemName = computed(() => {
  const matchedItem = findMatchingItem(route.path)
  return matchedItem ? matchedItem.name : 'Ningún item seleccionado'
})

const messageDetail = ref(selectedItemName.value)

watch(
  () => route.path,
  () => {
    messageDetail.value = selectedItemName.value
  },
)

function findMatchingItem(path: string) {
  for (const item of navigationItems.value) {
    if (item.path === path) {
      return item
    }

    if (item.children) {
      const matchedChild = item.children.find((child) => child.path === path)
      if (matchedChild) {
        return matchedChild
      }
    }
  }
  return null
}
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
