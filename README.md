# Aplicación de Comparación de Textos

## Descripción
La Aplicación de Comparación de Textos es una Aplicación Web Progresiva (PWA) construida con Angular que permite a los usuarios comparar dos textos y visualizar las diferencias en un formato similar a la vista de commits de GitHub. Esta aplicación es perfecta para escritores, desarrolladores o cualquier persona que necesite identificar rápidamente cambios entre dos versiones de un texto.

## Características
- Comparación de dos textos y resaltado de diferencias
- Vista de diferencias estilo GitHub con números de línea y codificación por colores
- Diseño responsivo que funciona en dispositivos de escritorio y móviles
- Funcionalidad PWA para uso sin conexión y fácil instalación
- Incremento automático de versión con cada commit

## Tecnologías Utilizadas
- Angular 17+
- Angular Material
- TypeScript
- SCSS
- PWA (Aplicación Web Progresiva)
- Biblioteca diff-match-patch para comparación de textos
- Husky para hooks de git
- semver para gestión de versiones

## Requisitos Previos
- Node.js (versión 14.x o posterior)
- npm (generalmente viene con Node.js)

## Instalación
1. Clona el repositorio:
   ```
   git clone https://github.com/cmurestudillos/text-comparison-app.git
   ```
2. Navega al directorio del proyecto:
   ```
   cd text-comparison-app
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución de la Aplicación
1. Para servidor de desarrollo:
   ```
   ng serve
   ```
   Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

2. Para construcción de producción:
   ```
   ng build --prod
   ```
   Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Uso
1. Abre la aplicación en tu navegador web.
2. Introduce o pega el texto original en el campo de entrada "Texto 1".
3. Introduce o pega el texto modificado en el campo de entrada "Texto 2".
4. Haz clic en el botón "Comparar Textos".
5. Visualiza las diferencias resaltadas en una vista de diferencias estilo GitHub debajo.

## Características PWA
Esta aplicación es una PWA, lo que significa que puedes:
- Instalarla en tu dispositivo para un acceso rápido
- Usarla sin conexión
- Recibir actualizaciones automáticas

Para instalar la PWA, busca el aviso de instalación en tu navegador o usa la opción "Añadir a la Pantalla de Inicio" en dispositivos móviles.

## Incremento Automático de Versión
El proyecto está configurado para incrementar automáticamente la versión patch en `package.json` con cada commit. Esto se hace utilizando Husky y un script personalizado.

## Contribuciones
¡Las contribuciones son bienvenidas! No dudes en enviar un Pull Request.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

Enlace del Proyecto: [https://github.com/cmurestudillos/text-comparison-app](https://github.com/cmurestudillos/text-comparison-app)