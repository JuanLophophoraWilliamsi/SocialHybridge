# Hybridge Social

Hybridge Social es un proyecto de la escuela Hybridge. Es una aplicación de red social con una API escrita en .NET 8 y un FrontEnd en Angular utilizando una plantilla de diseño.

## Funcionalidades del AuthController

El `AuthController` se encuentra en la ruta `/api/auth` y proporciona las siguientes funcionalidades:

- **Registro de Usuario (`/register`)**: Permite registrar un nuevo usuario. Si el nombre de usuario ya existe, devuelve un conflicto.
- **Inicio de Sesión (`/login`)**: Permite a un usuario iniciar sesión. Si las credenciales son correctas, devuelve el usuario. La primera vez que un usuario inicia sesión, el campo `IsNewUser` es `true`. En inicios de sesión posteriores, este campo se establece en `false`.

## Base de Datos

La base de datos utilizada es MS SQL y se gestiona mediante migraciones y Entity Framework. La migración inicial crea las tablas necesarias para la aplicación.

## Hosting

La aplicación está hosteada en un servidor web para que puedas probarla sin necesidad de instalar todo localmente. Puedes acceder a la aplicación en la siguiente dirección:

[http://34.210.21.76:4200/](http://34.210.21.76:4200/)

## Instrucciones para Montar Localmente

### Requisitos

- .NET 8 SDK
- Node.js y npm

### Pasos

1. **Clonar el repositorio:**
 git clone https://github.com/JuanLophophoraWilliamsi/SocialHybridge.git cd SocialHybridge

2. **Configurar la Base de Datos:**
   - Crea una base de datos MS SQL y actualiza la cadena de conexión en `appsettings.json` con los detalles de tu base de datos.
   - La cadena de conexión debe tener un formato similar a este:
   -    {
           "ConnectionStrings": {
             "DefaultConnection": "Server=localhost;Database=SocialHybridge;User Id=sa;Password=Contra123.;TrustServerCertificate=True"
           }
        }

        
3. **Ejecutar las Migraciones:**
   - Abre una terminal y navega al directorio del proyecto .NET:
   -  dotnet ef database update
 
4. **Instalar Dependencias del FrontEnd:**
   - Navega al directorio `UI` y ejecuta el siguiente comando para instalar las dependencias de npm:
   - cd UI
   - npm install


5. **Iniciar la Aplicación Angular:**
   - En el mismo directorio `UI`, inicia la aplicación Angular:
      npm start -- --host 0.0.0.0


   -
6. **Iniciar la Aplicación .NET:**
   - Abre una nueva terminal y navega al directorio del proyecto .NET:
      cd /path/to/your/dotnet/project
    - Inicia la aplicación .NET:
     dotnet run --urls "http://0.0.0.0:5000"
 
 Con estos pasos, deberías poder montar y ejecutar la aplicación localmente.