# Proyecto de publicidad digital

## Descripcion
Desarrollar una aplicación web que permita a todos los clientes conectados mediante websockets reproducir o pausar un video. El video debe ocupar 80% del ancho de la pantalla y debe estar centrado vertical y horizontalmente. Cuando el video es puesto en reproducción o en pausa afecta a todos los clientes conectados.

## Demo
https://websockets-video.herokuapp.com/

## Guía de Implementación

1. Publicar el proyecto en cualquier servicio de repositorios GIT (ej. GitLab, GitHub, Bitbucket) 
2. Incluir un archivo README con documentación sobre como correr la aplicación localmente.
3. Usar JavaScript ES6+ y parsear a ES5.
4. Para el back-end debe usarse NodeJS.
5. El video debe estar en loop. 

## Bonus 

1. Incluir los tests unitarios y e2e con Jest y Cypress o NightwatchJs.
2. Implementar diseño responsivo.
3. Permitir que los clientes adelanten o retrocedan la reproducción del video.
4. Publicar la app online en cualquier servicio gratuito como Now.sh o Heroku. 

## ToDos
- [ ] Incluir los tests unitarios y e2e con Jest y Cypress o NightwatchJs.
- [ ] Almacenar video en cloudStorage.

# Descarga
    git clone https://github.com/LucasSequeira/WebSockets-Video.git

# Entorno
+ `Copiar el archivo .env.example a .env y cargar variables de entorno.`

# Instalación
    npm install

# Iniciar entorno de desarrollo
    npm run dev

# Transpilar para producción
    npm run build
    
# Iniciar entorno de producción
    npm run start

# Uso
## Contexto
El cliente tiene (n) cantidad de pantallas en su local, y debe reproducir un video publicitario en todas las pantallas. Con el acceso a cualquier pantalla, debe poder iniciar/pausar el video, afectando a todas las pantallas al mismo tiempo. 

La aplicación cuenta con sincronización de video. El master puede ser cualquier pantalla donde se inicie/pause el video. 
Cuando se realice la acción de iniciar/pausar, este disparará un evento a todas las pantallas con la acción y el tiempo actual de reproducción, sincronizando todas las pantallas.

## Ejecución

Iniciar aplicación
+ `npm run dev`

Abrir el navegador (n) veces e ingresar a la aplicación:
+ `http://localhost:3000`

Iniciar/pausar el video desde cualquier pestaña, afecando todas las reproducciones.
