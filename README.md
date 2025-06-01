# 🌟 Landing con Registro y Comentarios

Landing page interactiva para clientas, con funcionalidades dinámicas basadas en el registro.

## 🧱 Stack Tecnológico

### 🖼️ Frontend
- **HTML5 & CSS3**: Estructura y estilo de la página.
- **JavaScript (ES6+)**: Lógica del cliente, manipulación del DOM, validación de datos y conexión con Firebase.

### ☁️ Backend-as-a-Service
- **Firebase Firestore**: Base de datos NoSQL para almacenar clientas y comentarios.
- **Firebase SDK Modular**: Uso de ES Modules directamente en el navegador.

### 📩 Formularios
- **Formsubmit.co**: Envío de correos sin backend.

### 💾 LocalStorage
- Para guardar el email de la clienta y reconocer si ya está registrada.

## ✅ Funcionalidades
- Registro de clientas con Firestore.
- Verificación automática del email registrado al volver a visitar la landing.
- Comentarios personalizados solo para clientas registradas.
- Guardado de comentarios en Firestore.
- Adaptación dinámica del contenido según el estado del usuario.

## 🚀 Cómo probar el proyecto
1. Cloná el repositorio
2. Configurá tu Firebase en el archivo JS
3. Subí el proyecto a un servidor (Firebase Hosting o GitHub Pages)


## FUNCIONALIDADES PENDIENTES
-Historial de compras de clientas registradas
-Ofrecer promociones a clientas frecuentes
-Temporizador de ofertas
-Productos alojados en firebase