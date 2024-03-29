<p align="center"><a href="https://vuejs.org/guide/introduction.html" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" width="250" alt="Vue Logo"></a></p>

# Challenge Vue

This template should help get you started developing with Vue 3 in Vite.
Node version 18

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```



# Documentación

Este proyecto consiste en una aplicación con dos vistas principales: HomeView y DetailsView. A continuación, se proporciona una descripción de los componentes y archivos clave de la aplicación:

### Vistas

- HomeView: Esta vista está compuesta por varios componentes, incluyendo una barra de búsqueda, paginación y el desarrollo de las tarjetas de usuarios. Aquí se presenta la información principal de los usuarios.
  - Componentes que lo conforman: 
    - SearchBar:  Es un componente que permite al usuario buscar usuarios
    - Pagination:  Componente utilizado para navegar y visualizar diferentes páginas de usuarios.
- DetailsView: Esta vista muestra los detalles específicos de cada usuario seleccionado desde HomeView. Proporciona información más detallada y específica sobre cada usuario.

### Peticiones API

Las peticiones a la API se realizan utilizando Axios. Estas peticiones se encuentran en el archivo ```src/api/users.js``` Aquí se definen los métodos y rutas necesarios para obtener los datos de los usuarios desde el servidor.

### Vue Router

La configuración de Vue Router se encuentra en el archivo ```src/router/index.js```. Aquí se definen las rutas y las correspondientes vistas asociadas a cada una. Esto permite la navegación entre HomeView y DetailsView de manera adecuada.

### Almacenamiento de datos con Vuex

La información detallada de los usuarios se almacena en el store de Vuex, específicamente en el archivo ```src/store/index.js```. Aquí se gestionan los estados y las mutaciones relacionadas con los datos de los usuarios.


# Consigna
### Ejercicio 1: Buscador de equipo
Se libera un nuevo sprint y se necesita agregar una nueva pantalla que permite buscar dentro del listado de
usuarios y poder agregarlo a un nuevo proyecto del sistema.
Dicho lo anterior el programador deberá crear dos pantallas como se muestra en la imagen más abajo donde
se deberá permitir buscar por nombre y mostrar los resultados de los usuarios, una vez que se encuentre el
usuario este se debe poder hacer click e ingresar al perfil con toda su información disponible. Es importante
que al cambiar de página el valor del usuario seleccionado se guarde en el store de Vuex y en la página de
perfil del usuario la información se muestre desde el store de Vuex.

El APP debe ser RWD
El APP debe tener una navegación SPA en el buscador al perfil de usuario y viceversa.
El APP debe utilizar el API público https://dummyapi.io/docs/user (registrarse para obtener un APP-ID).

#### Conocimientos a validar
- HTML.
- CSS.
- JAVASCRIPT.
- VUE.
- VUEX.
- SPA.
- RWD.

#### Recomendaciones a tener en cuenta:
Tener en cuenta que la aplicación debe cumplir con los principios SPA y RWD, validación en el buscador,
paginación de resultados.
