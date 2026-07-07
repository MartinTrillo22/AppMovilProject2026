# PedroShop 📱 - Aplicación Móvil de Reservas

**PedroShop** es una aplicación móvil multiplataforma (iOS y Android) de alta gama diseñada específicamente para la reserva de citas y gestión de servicios en barberías. La aplicación ofrece una experiencia de usuario fluida, rápida y atractiva, desarrollada bajo una estética visual oscura premium con detalles dorados (*Dark Gold Premium Aesthetic*).

---

## 🎯 Core de Negocio (Business Core)

**PedroShop** es una solución tecnológica orientada a la digitalización, optimización y gestión operativa de servicios de barbería. 

El núcleo del negocio de esta aplicación se centra en brindar una solución moderna frente a los modelos de atención tradicionales, atacando tres pilares fundamentales:

1. **Gestión Eficiente del Tiempo (Agendamiento Inteligente):** Elimina los tiempos muertos y las fricciones de las reservas manuales. El sistema permite al cliente visualizar la disponibilidad en tiempo real, reservar horarios específicos y gestionar reprogramaciones, optimizando la agenda diaria del local.
2. **Administración de Staff y Operaciones:** Provee una plataforma centralizada para el control de los colaboradores. Permite asignar servicios específicos a cada barbero, gestionar sus horas operativas y mantener un registro claro de los servicios realizados para futuros cálculos de productividad.
3. **Fidelización y Experiencia del Cliente (CRM):** Mejora la retención de usuarios mediante un flujo de usuario intuitivo (UI/UX) que incluye perfiles personalizados, historial de cortes (marcadores) y notificaciones de ofertas. La aplicación transforma un servicio esporádico en una experiencia digital conectada.

> **Propuesta de Valor:**
> Ofrecer al cliente la comodidad de asegurar su cita, elegir a su profesional de confianza y gestionar su reserva en menos de un minuto desde su smartphone; dotando simultáneamente al negocio de una herramienta centralizada y escalable para administrar sus operaciones.

---

## 🛠️ Tecnologías y Librerías Utilizadas

* **Framework Base:** [React Native](https://reactnative.dev/) con [Expo v54](https://expo.dev/) (SDK 54)
* **Enrutamiento:** [Expo Router v6](https://docs.expo.dev/router/introduction/) (File-based Routing)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) para tipado estático seguro
* **Estilos:** [NativeWind v4](https://www.nativewind.dev/) (Tailwind CSS v3 adaptado para React Native)
* **Animaciones:** [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) y [Expo Haptics](https://docs.expo.dev/versions/latest/sdk/haptics/) para feedback háptico
* **Fuentes:** `@expo-google-fonts/radley` (Tipografía clásica e imperial para el branding)
* **Cliente de Red:** [Axios](https://axios-http.com/) para consumo estructurado de la API REST

---

## 📂 Arquitectura y Estructura del Proyecto

El frontend móvil está estructurado bajo principios de arquitectura limpia, asegurando un desacoplamiento óptimo y facilidad de mantenimiento:

```text
AppMovilProject2026/
├── app/                          # Enrutamiento basado en archivos (Expo Router)
│   ├── (auth)/                   # Flujo de autenticación y bienvenida
│   │   ├── welcome.tsx           # Social login visual (Google/Facebook) y registro por correo
│   │   ├── login.tsx             # Inicio de sesión conectado a la API con Axios
│   │   └── register.tsx          # Formulario de registro con validaciones en tiempo real
│   ├── (tabs)/                   # Flujo principal tras iniciar sesión
│   │   ├── index.tsx             # Home Dashboard (Categorías, Barberos, Promociones)
│   │   ├── bookmarks.tsx         # Sección de marcadores y favoritos
│   │   └── settings/             # Módulo de perfil y opciones
│   │       ├── index.tsx         # Menú de configuración y cierre de sesión
│   │       └── edit-profile.tsx  # Actualización de datos del usuario
│   ├── _layout.tsx               # Carga de fuentes y proveedores globales
│   └── index.tsx                 # Redirección inicial del ciclo de vida de la App
│
├── domain/                       # Modelos, interfaces y contratos puros de negocio (sin dependencias de UI)
│   ├── Auth.ts                   # Interfaces de LoginData, RegistroData y Usuario
│   └── Category.ts               # Interfaz representativa de CategoriaServicio
│
├── infrastructure/               # Adaptadores de comunicación externa (API REST client)
│   └── service/                  # Configuración y servicios de red
│       ├── AuthApi.ts            # Cliente Axios e integraciones de login y registro
│       └── CategoryApi.ts        # Métodos GET/POST para categorías de servicios
│
├── src/                          # Recursos comunes reutilizables y tipados globales
│   ├── components/               # Componentes visuales
│   │   ├── barber/               # Componentes de dominio (LocationCard, NextAppointment, ServiceCategories, StaffCarousel)
│   │   └── ui/                   # UI atómica (GoldButton, InputField, OfferBanner, SearchBar1)
│   └── types/                    # Declaraciones de tipos globales
```

---

## 📋 Requisitos del Sistema (Prerrequisitos)

Para instalar y depurar localmente la aplicación móvil, necesitará disponer de las siguientes herramientas:

1. **Node.js:** Versión v18 o superior (se recomienda versión LTS).
2. **Android SDK / Xcode:** 
   * Para emular Android de forma nativa en su sistema.
   * Xcode Command Line Tools para simuladores iOS (únicamente en macOS).
3. **Expo Go (App Móvil):** Instalado en su dispositivo físico móvil desde la App Store o Google Play Store.
4. **Vysor:** Herramienta recomendada para duplicar y controlar la pantalla de su dispositivo móvil físico conectado mediante USB (con depuración USB activa) en tiempo real en su ordenador.

---

## 🚀 Comandos para Ejecución

Siga estos pasos para iniciar la aplicación móvil:

### 1. Descarga e Instalación de Dependencias
Acceda al directorio de la aplicación móvil e instale las dependencias necesarias:
```bash
cd AppMovilProject2026
npm install
```

### 2. Configurar Variables de Entorno
Cree un archivo `.env` en la raíz de la carpeta `AppMovilProject2026` y agregue la dirección IP local de su servidor API:
```env
EXPO_PUBLIC_API_URL=http://<IP_LOCAL_DE_TU_MAQUINA>:5168
```
*(Nota: No use `localhost` si va a probar en un celular físico; ingrese la IP de su red local, por ejemplo: `192.168.1.45`).*

### 3. Iniciar el Servidor de Expo
Inicie el empaquetador Metro de Expo limpiando la caché anterior:
```bash
npx expo start --clear
```

### 4. Lanzar la App
* Para abrirla en su dispositivo con **Vysor** o **Expo Go**, escanee el código QR que se muestra en la terminal.
* Presione `a` en la terminal para abrir en un emulador de Android conectado.
* Presione `i` en la terminal para abrir en un simulador de iOS.

---

## 🔄 Modo de Probar el Flujo CRUD

La aplicación móvil PedroShop integra servicios dinámicos comunicándose de manera asíncrona con la API REST (`barberiaApi`). Siga las instrucciones abajo para probar el flujo de datos:

### 📝 1. Crear (Create)
* **Registro de Usuario:** En la pantalla inicial de la aplicación, haga clic en "Inicia sesión" o "Regístrate". Rellene los campos del formulario en la pantalla de registro (Nombre, Email, Teléfono Celular y Contraseña). Al hacer clic en "Registrarse", la aplicación envía una solicitud `POST /registro` a la API para dar de alta al nuevo usuario de tipo cliente.

### 📖 2. Leer (Read)
* **Categorías de Servicios:** En la pantalla principal de la aplicación móvil, el componente horizontal `ServiceCategories` realiza automáticamente un `GET /categorias` para listar los nombres en pantalla y renderiza un icono temático en tiempo real (por ejemplo, tijeras para la categoría "Cortes", bigote para "Barba", etc.).

### ✏️ 3. Actualizar (Update)
* **Editar Perfil de Usuario:** Diríjase a la pestaña de configuración `(tabs)/settings` y presione "Editar Perfil". Puede modificar su nombre de usuario, correo y celular. Al guardar los cambios, la aplicación procesa la actualización local de la información del perfil del usuario logueado.

---

## 👥 Integrantes del Proyecto

El desarrollo, diseño y mantenimiento de este proyecto ha sido realizado por:

* **[Lermo Reyes, Miguel Angel]** - Rol (Backend Developer)
* **[Trillo Cacsire, Pedro Martin]** - Rol (Frontend Developer & UX/UI Designer)
* **[Valencia Moscoso, Sergio Ruben Alvaro]** - Rol (QA & Mobile Developer)