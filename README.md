# 🎬 GirlFlix-FrontEnd-BackEnd
Proyecto GirlFlix (Angular + API C# + BackEnd)

*Marlene Esmeralda Aguilar*

Descripción: **GirlFlix** es una plataforma tipo streaming de peliculas y series enfocadado en mujeres, en los que puedes encontrar: kdrama, rom-com, peliculas de conciertos de artistas, peliculas de las princesa de Disney y peliculas romanticas. Permite a los usuarios iniciar sesión, explorar películas y gestionar sus favoritos y listas personalizadas con el fin de disfrutar las peliculas y series más vistas en un solo lugar.

Objetivo: Implementar la base de datos en el proyecto.

## Mockup Inicial
![image](https://github.com/user-attachments/assets/b909f5f1-2ba6-48ab-91d3-f4710ef5ed4f)

##PROYECTO:
<img width="1440" alt="Captura de pantalla" src="https://github.com/user-attachments/assets/92a4b50b-01e2-42bd-8e2b-ce53a6126cf2" />

Login: Muestra un alert cuando las credenciales son inválidas.

<img width="1427" alt="Captura de pantalla" src="https://github.com/user-attachments/assets/08206e21-0b17-4d13-9a67-0140b2beb5af" />

Inicio: Muestra el aatalogo de películas y series disponibles en la plataforma.

<img width="1427" alt="Captura de pantalla" src="https://github.com/user-attachments/assets/be38546e-9c4e-407e-963d-88afca0316aa" />

Favoritos: Al marcar una pelicula como favorito (botón de la estrella) estando en cualquier sección de la plataforma, las películas se mostrarán en la sección "favoritos" para mayor facilidad de que el usuario acceda a sus peliculas y series favoritas.

<img width="1427" alt="Captura de pantalla" src="https://github.com/user-attachments/assets/ebc45de7-78fd-4a8e-bb39-2bb5ca9c2c92" />

Series: Todas las series disponibles se muestran en esta sección.

<img width="1427" alt="Captura de pantalla" src="https://github.com/user-attachments/assets/701d1ec3-9573-414d-957f-abb068512b7d" />

Películas:  Todas las películas disponibles se muestran en esta sección.

<img width="1427" alt="Captura de pantalla" src="https://github.com/user-attachments/assets/930503f9-3c62-4bca-b5ef-a3a4e7ad34e3" />

Buscar: Para fácil acceso a encontrar la película o serie favorita del usuario, la sección de "buscar" facilitará al usuario buscar ya sea por titulo o descripción de la película.

## 🔧 Cómo correr el proyecto localmente:

### 🔹 1. Clona el repositorio
### 🔹 2. Ejecutar el backend (girlflix-api) - Asegúrate de tener una base de datos corriendo en Docker o SQL Server (puerto 5270).
### 🔹 3. Ejecutar el frontend (girlflix-frontend) - Abre el navegador en: http://localhost:54800.

## 🚀 Tecnologías usadas

| Frontend           | Backend           | Base de datos      | Infraestructura |
|--------------------|-------------------|---------------------|-----------------|
| Angular 18         | ASP.NET Core 8     | SQL Server (Docker) | Azure Data Studio |
| Bootstrap          | Web API REST       | T-SQL               | Git + GitHub     |

### 🔄 Proceso de desarrollo:

1. **Desarrollé el backend en ASP.NET Core**, construyendo una API REST que valida usuarios desde una base de datos SQL.
2. **Configuré la base de datos** en SQL Server usando contenedores de Docker y Azure Data Studio para gestionarla.
3. **Implementé CORS** para permitir comunicación segura entre frontend y backend.
4. **Conecté Angular al backend** usando `HttpClient` y controlé la sesión del usuario con `localStorage`.
5. **Subí todo a GitHub** organizando el proyecto en dos carpetas (`girlflix-frontend` y `girlflix-api`).

### 🖥  Reporte de code coverage:
![image](https://github.com/user-attachments/assets/3b5c66a7-ab01-48e2-98ba-fe23c4285976)

### 🖥 Reporte de testing:

![image](https://github.com/user-attachments/assets/89604737-a05e-47d3-89b5-89f197f94fde)

## Modelo entidad-relación: 

![image](https://github.com/user-attachments/assets/2d10c800-0b9f-4ed1-9f9f-e1b25eb06845)


## Posibles mejoras futuras:

1. Guardar los datos de like y favoritos en la base de datos, por el momento solo se guardan en el LocalStorage
2. Que la card de película o serie se expanda al dar click en el botón "Ver".


## Mi Base de datos

<img width="1440" alt="Captura de pantalla" src="https://github.com/user-attachments/assets/896f3eb2-576a-4834-8cc5-74232d524872" />

## 📚 Documentación de la API - Swagger
La API de GirlFlix incluye documentación interactiva utilizando Swagger, lo que permite explorar y probar los endpoints disponibles fácilmente desde el navegador.

# 🔗 Acceso
Cuando el backend esté en ejecución, puedes abrir la documentación Swagger en:
http://localhost:5270/swagger

# ✨ Endpoints disponibles
🔐 POST /api/Login
Este endpoint permite que un usuario inicie sesión en la plataforma.
Debe enviarse un JSON con las credenciales del usuario en el cuerpo de la solicitud.
Ejemplo de request body:
{
  "correo": "usuario@girlflix.com",
  "contrasena": "123456"
}

<img width="1427" alt="Captura de pantalla" src="https://github.com/user-attachments/assets/9c1201d3-d253-42b9-857d-f57f82688cd8" />


## Archivos de configuración de ambientes, de docker y de kubernetes

<img width="1427" alt="Captura de pantalla" src="https://github.com/user-attachments/assets/667596ec-a818-40d2-b94e-dc44b0d8bd3d" />


## 🐞 Problemas conocidos

- 🔐 El sistema de login no usa tokens JWT, por lo que no está protegido contra manipulación del `localStorage`.
- 🔄 Actualmente no se realiza validación avanzada de contraseñas ni recuperación de cuenta.
- 🧪 Faltan pruebas unitarias y de integración tanto en el frontend como en el backend.
- 🎬 Las películas favoritas no están relacionadas con una tabla real de películas, solo se guarda un ID.
- 🌐 El backend y el frontend están conectados por URL fija (`localhost:5270`), lo cual dificulta el despliegue sin ajustes.

  ## 💡 Retrospectiva

### ✅ ¿Qué hice bien?
- Pude integrar correctamente Angular con una API creada en C# con ASP.NET Core.
- La películas y series marcadas con like o como favorita, se guarda en el localstorage y al refrescar la página no se vuelven a desmarcar.
- Utilicé Docker y Azure Data Studio para gestionar la base de datos de manera profesional.
- Subí mi proyecto completo (frontend y backend) a GitHub, con control de versiones y estructura organizada.
- Implementé login con validación contra base de datos y almacenamiento de sesión.

### ⚠️ ¿Qué no salió tan bien?
- Tardé en implementar correctamente la persistencia de datos en favoritos y en integrar correctamente Swagger. 
- Subí la carpeta del frontend como un submódulo por error, lo que dificultó que GitHub mostrara su contenido.
- Tuve dificultades con la manipulación de rutas Angular al cerrar sesión o cargar estados.

### 🔁 ¿Qué puedo hacer diferente?
- Integrar los datos como like y favoritos en mi base de datos.
- Hacer más uso de APIs.
- Agregar pruebas automatizadas y proteger rutas sensibles desde el inicio.
- Mejorar el diseño responsivo y agregar más validaciones en formularios.




