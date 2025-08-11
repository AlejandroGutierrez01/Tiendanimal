# 📁 Desarrollo de sistema de gestión de productos para tiendas de mascotas con recomendación de dietas saludables mediante inteligencia artificial.

API REST para gestión de productos y usuarios, con la recomendación de dietas saludables para mascotas, enfocada en perros.

## Tecnologías Utilizadas 🛠️

- **Express.js**: framework principal para construir la API REST.
- **JWT**: autenticación segura con JSON Web Tokens.
- **MongoDB**: base de datos NoSQL para almacenar productos, usuarios y pedidos.
- **Mongoose**: biblioteca para modelar datos y comunicarse con MongoDB.
- **Nodemailer**: envío de correos electrónicos para confirmación o recuperación de contraseña.
- **Cloudinary**: gestión de imágenes de productos, mascotas y usuarios.
- **Postman**: documentación de API.
- **Gemini API**: generacion de dietas saludables para mascotasn enfocada en perros.

## Instalación 

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/AlejandroGutierrez01/Tiendanimal.git
   cd Tiendanimal
2. **Instalar dependencias**  
   ```bash
   npm install

3. **Variables de entorno**  
   Crea un archivo `.env` en la raíz con las siguientes variables:

   ```env
   MONGODB_URI_PRODUCTION = tu_uri_mongodb
   GEMINI_API = api_key_gemini
   JWT_SECRET = jwt_secreto
   CLOUDINARY_CLOUD_NAME = nombre_cloudinary
   CLOUDINARY_API_KEY = api_key_cloudinary
   CLOUDINARY_API_SECRET = api_secret_cloudinary
   SMTP_HOST = <servidor_smtp>
   SMTP_PORT = <puerto_smtp>
   SMTP_USER = usuario_smtp 
   SMTP_PASS = contraseña_smtp
   URL_FRONTEND = url frontend que consuma la API>
   PROMPT_GEMINI = prompt para generacion de dietes
 4. **Ejecutar el servidor**  
   - En modo desarrollo (con Nodemon):
     ```bash
     npm run dev
     ```
## Despliegue en Render 

Puedes desplegar esta API fácilmente en [Render](https://render.com), una plataforma de alojamiento en la nube gratuita para pequeños proyectos.

### Pasos para el despliegue

1. **Sube tu proyecto a GitHub**  
   Asegúrate de tener el proyecto completo en un repositorio público o privado en GitHub.

2. **Crea una cuenta en Render**  
   Si no tienes una, regístrate.

3. **Conecta Render con GitHub**
   - Inicia sesión en Render.
   - Ve a tu Dashboard y haz clic en **"New Web Service"**.
   - Elige el repositorio donde está tu proyecto.

4. **Configura el servicio**
   - **Name:** Dale un nombre a tu servicio.
   - **Environment:** Selecciona `Node`.
   - **Build Command:**  
     ```bash
     npm install
     ```
   - **Start Command:**  
     ```bash
     npm start
     ```
   - **Root Directory:**  
     Si tu archivo `package.json` está en la raíz del proyecto, déjalo vacío. Si está dentro de `/src`, escríbelo allí.
   - **Region:** `Oregon (US West)` o la que prefieras.

5. **Agrega variables de entorno (.env)**
   En la pestaña **"Environment"**, agrega las variables necesarias una por una o directamente con la opcion de copiado de un archivo .env.

## Rutas de la API 🔌

### Administrador 

| Método | Endpoint                       | Descripción                                   |
|--------|-------------------------------|-----------------------------------------------|
| POST   | `/login`                      | Inicio de sesión administrador                 |
| POST   | `/recuperar-password/`        | Solicitar recuperación de contraseña           |
| GET    | `/recuperar-password/:token`  | Validar token para recuperación                 |
| POST   | `/nuevo-password/:token`      | Establecer nueva contraseña                     |
| PUT    | `/actualizar-password`        | Actualizar contraseña (requiere token)         |
| GET    | `/perfil`                     | Obtener perfil del administrador                |
| PUT    | `/perfil/:id`                 | Actualizar perfil del administrador             |
| DELETE | `/eliminar-usuario/:id`       | Eliminar usuario cliente                        |

---

### Mascotas 

| Método | Endpoint                      | Descripción                                           |
|--------|-------------------------------|-------------------------------------------------------|
| POST   | `/mascota/registro`          | Registrar mascota (autenticación, imagen, validación) |
| GET    | `/mascota/listar`            | Listar mascotas del usuario autenticado               |
| GET    | `/mascota/listar/:id`        | Obtener detalle de mascota por ID                      |
| PUT    | `/mascota/actualizar/:id`    | Actualizar mascota (imagen y validación)              |
| DELETE | `/mascota/eliminar/:id`      | Eliminar mascota                                       |
| POST   | `/mascota/generar-dieta/:id` | Generar dieta para mascota                             |

---

### Productos 

| Método | Endpoint                      | Descripción                                         |
|--------|-------------------------------|-----------------------------------------------------|
| POST   | `/producto/crear`             | Crear nuevo producto (imagen y validación)          |
| GET    | `/productos/listar`           | Listar productos (requiere autenticación)           |
| GET    | `/producto/detalle/:id`       | Obtener producto por ID                              |
| PUT    | `/producto/actualizar/:id`    | Actualizar producto (imagen y validación)           |
| DELETE | `/producto/eliminar/:id`      | Eliminar producto                                   |
| GET    | `/productos/publico`          | Listar productos públicos (sin autenticación)       |

---

### Usuarios 👥

| Método | Endpoint                          | Descripción                                         |
|--------|----------------------------------|-----------------------------------------------------|
| POST   | `/usuario/registro`              | Registro de usuario (imagen y validación)           |
| POST   | `/usuario/login`                 | Inicio de sesión                                    |
| POST   | `/usuario/recuperar-password`   | Solicitar recuperación de contraseña                |
| GET    | `/usuario/recuperar-password/:token` | Validar token para recuperación                     |
| POST   | `/usuario/nuevo-password/:token`| Establecer nueva contraseña                          |
| GET    | `/usuario/confirmar/:token`      | Confirmar email con token                            |
| GET    | `/usuarios`                     | Listar todos los usuarios (requiere autenticación)  |
| GET    | `/usuario/perfil`               | Obtener perfil del usuario autenticado              |
| PUT    | `/usuario/actualizar-perfil/:id`| Actualizar perfil (imagen)                            |
| DELETE | `/usuario/eliminar/:id`         | Eliminar usuario                                   |
| PUT    | `/usuario/actualizar-password/:id`| Actualizar contraseña                               |

---
### Favoritos 

| Método | Endpoint                          | Descripción                                      |
|--------|----------------------------------|-------------------------------------------------|
| GET    | `/usuario/favoritos`              | Obtener lista de favoritos                       |
| POST   | `/usuario/agregar-favorito/:id`  | Agregar producto a favoritos                     |
| DELETE | `/usuario/eliminar-favorito/:id` | Eliminar producto de favoritos                   |

