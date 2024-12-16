# Technical Test - Vue 3 + Vite

Este repositorio contiene un proyecto basado en Vue 3 con Vite, diseñado para ser un punto de partida rápido y flexible para desarrollar aplicaciones modernas. A continuación, encontrarás detalles sobre cómo configurar, ejecutar y personalizar este proyecto.

## Requisitos Previos

1. **Node.js**: Asegúrate de tener [Node.js](https://nodejs.org/) instalado (versión recomendada: 18 o superior).
2. **Gestor de Paquetes**: Este proyecto utiliza `npm`, pero también puedes usar `yarn` o `pnpm` si lo prefieres.

## Configuración del Proyecto

1. Clona este repositorio:

   ```sh
   git clone https://github.com/c-correa/technical-test-selia.git
   cd technical-test-selia
   codesanbox: https://codesandbox.io/p/github/c-correa/technical-test-selia/main
   ```

2. Instala las dependencias necesarias:

   ```sh
   npm install
   ```

## Scripts Disponibles

### Compilar y Recargar Automáticamente para Desarrollo

Inicia el servidor de desarrollo con hot-reloading:

```sh
npm run dev
```

Accede al proyecto en [http://localhost:5173](http://localhost:5173) (puerto configurable en el archivo de configuración).

### Verificación de Tipos, Compilación y Minificación para Producción

Genera la versión optimizada para producción:

```sh
npm run build
```

Los archivos generados estarán en la carpeta `dist`. Puedes servirlos con cualquier servidor web.

### Verificación de Tipos Estáticos

Ejecuta una verificación de tipos usando `vue-tsc`:

```sh
npm run type-check
```

### Linting del Código

Ejecuta ESLint para verificar y corregir errores de estilo:

```sh
npm run lint
```

## Personalización de la Configuración

Consulta la [documentación de Vite](https://vite.dev/config/) para personalizar la configuración del proyecto según tus necesidades.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```plaintext
src/
├── assets/       # Recursos estáticos como imágenes y fuentes
├── components/   # Componentes reutilizables de Vue
├── views/        # Vistas principales de la aplicación
├── router/       # Configuración de rutas (Vue Router)
├── store/        # Gestión de estado (Pinia o Vuex, según corresponda)
└── App.vue       # Componente raíz
```

## Tecnologías Utilizadas

- **Vue 3**: Framework de frontend progresivo.
- **Vite**: Herramienta de compilación rápida y moderna.
- **TypeScript**: Superset de JavaScript para un desarrollo más seguro y escalable.
- **ESLint**: Para mantener un código limpio y consistente.

## Vista Previa en CodeSandbox

Puedes explorar este proyecto directamente en CodeSandbox mediante el siguiente enlace: [Abrir en CodeSandbox](https://codesandbox.io/p/github/c-correa/technical-test-selia/main?workspaceId=ws_RLNxE9f6efNkeDo4hXDzNz)

## Contacto

Para preguntas o sugerencias, por favor, contacta conmigo a través de mi correo o por los canales definidos.

## <19correa99@gmail.com>

¡Gracias por utilizar este proyecto como base para tu desarrollo! 🚀
