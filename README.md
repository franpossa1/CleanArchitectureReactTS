Aquí tienes la versión corregida del README, actualizando la información sobre cómo ejecutar la aplicación localmente:

# Proyecto de React con TypeScript y Clean Architecture

Este proyecto es una implementación de una aplicación en React utilizando TypeScript y siguiendo la arquitectura limpia (Clean Architecture).

## Estructura del Proyecto

El proyecto se organiza en las siguientes carpetas principales:

1. **Componentes**: En esta carpeta se encuentran los diferentes componentes que forman parte de la aplicación. Cada componente está separado en su propio módulo, como el componente de inicio de sesión, el componente de lista, el componente de autenticación, entre otros.

2. **Core**: En esta carpeta se encuentran las entidades y las interfaces tanto de los servicios como de los casos de uso. La carpeta `entidades` alberga las entidades del dominio de la aplicación, como los modelos de datos, las enumeraciones, etc. Las interfaces se definen tanto para los servicios como para los casos de uso, y representan los contratos que deben ser implementados en las capas correspondientes.

3. **Infraestructura**: En esta carpeta se encuentra la implementación de la infraestructura de la aplicación.

   - **Base de Datos Falsa**: La carpeta `fakeDB` contiene una implementación de datos falsos para simular la interacción con una base de datos antes de tenerla completamente desarrollada. Esta implementación puede ser utilizada para realizar pruebas y desarrollar la interfaz de usuario sin depender del backend.

   - **Servicios**: La carpeta `servicios` alberga la implementación de los servicios que interactúan con las APIs externas, bases de datos u otros sistemas.

   - **Útiles**: La carpeta `utils` contiene funciones de utilidad que son utilizadas a lo largo de la aplicación.

Además de estas carpetas principales, también se incluyen:

- **Layout**: Esta carpeta contiene los elementos de diseño que se aplican en toda la aplicación, como los menús o elementos de navegación.

- **Páginas**: En esta carpeta se encuentran los diferentes módulos que se renderizan en la aplicación.

## Instalación

1. Clona este repositorio: `git clone https://github.com/franpossa1/CleanArchitectureReactTS.git`
2. Instala las dependencias: `npm install`

## Uso

1. Ejecuta la aplicación: `npm run dev`
2. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Crea una rama con tu nueva funcionalidad: `git checkout -b nueva-funcionalidad`
2. Realiza los cambios necesarios y realiza un commit: `git commit -m "Añade nueva funcionalidad"`
3. Envía tus cambios a la rama principal: `git push origin nueva-funcionalidad`
4. Abre una Pull Request en GitHub

## Créditos

Agradezco a todas las personas que han contribuido a este proyecto.

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).

---

Este README proporciona una visión general del proyecto, su estructura y cómo contribuir. Puedes personalizarlo según tus necesidades y agregar secciones adicionales para documentar más detalles sobre tu proyecto de React con Clean Architecture y TypeScript.