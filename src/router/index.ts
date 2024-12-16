import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/variant-1',
      name: 'variant-1',
      component: () => import('../views/VariantOneView.vue'),
      children: [
        {
          path: 'appointments', // Cambio: quitar el '/'
          component: () => import('../views/AppointmentsView.vue'),
        },
        {
          path: 'patients', // Cambio: quitar el '/'
          component: () => import('../views/PatientsView.vue'),
        },
        {
          path: 'specialists', // Cambio: quitar el '/'
          component: () => import('../views/SpecialistsView.vue'),
        },
        {
          path: 'services', // Cambio: quitar el '/'
          component: () => import('../views/ServicesView.vue'),
        },
        {
          path: 'change-password', // Cambio: quitar el '/'
          component: () => import('../views/ChangePasswordView.vue'),
        },
        {
          path: 'lock-pin', // Cambio: quitar el '/'
          component: () => import('../views/LockPinView.vue'),
        },
      ],
    },
    {
      path: '/variant-2',
      name: 'variant-2',
      component: () => import('../views/VariantTwoView.vue'),
      children: [
        {
          path: 'appointments', // Cambio: quitar el '/'
          component: () => import('../views/AppointmentsView.vue'),
        },
        {
          path: 'patients', // Cambio: quitar el '/'
          component: () => import('../views/PatientsView.vue'),
        },
        {
          path: 'specialists', // Cambio: quitar el '/'
          component: () => import('../views/SpecialistsView.vue'),
        },
        {
          path: 'services', // Cambio: quitar el '/'
          component: () => import('../views/ServicesView.vue'),
        },
        {
          path: 'profile', // Cambio: quitar el '/'
          component: () => import('../views/ChangePasswordView.vue'),
        },
        {
          path: 'change-password', // Cambio: quitar el '/'
          component: () => import('../views/ChangePasswordView.vue'),
        },
        {
          path: 'lock-pin', // Cambio: quitar el '/'
          component: () => import('../views/LockPinView.vue'),
        },
      ],
    },
  ],
});

export default router;
