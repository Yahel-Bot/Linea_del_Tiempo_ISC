[README_GUIA_FIGMA.md](https://github.com/user-attachments/files/33893198/README_GUIA_FIGMA.md)
# Línea del tiempo interactiva de Ingeniería en Sistemas Computacionales

Proyecto sobre la evolución de la Ingeniería en Sistemas Computacionales (ISC). Incluye una experiencia web para explorar los hitos históricos y un plugin de desarrollo para generar diseños editables en Figma.

## ¿Qué contiene el proyecto?

- [`web-app/index.html`](web-app/index.html): sitio interactivo con cinco etapas históricas, navegación panorámica y por épocas, reflexiones del equipo, lente de Teoría General de Sistemas (TGS), análisis crítico y bibliografía APA 7.
- [`figma-plugin/`](figma-plugin/): plugin de desarrollo que genera seis lienzos editables en Figma: cinco etapas históricas y una sección de reflexiones.
- [`documento_academico/Documento_Investigacion_ISC.md`](documento_academico/Documento_Investigacion_ISC.md): documento de investigación con cronología, análisis, reflexiones y fuentes.

## Explorar la experiencia web

### Probarla desde una copia del repositorio

1. Descarga el repositorio desde GitHub con **Code > Download ZIP** y descomprime el archivo, o clónalo con Git.
2. Abre `web-app/index.html` en un navegador actualizado, como Chrome, Edge o Firefox.
3. Para ver todos los estilos, animaciones y recursos externos, mantén una conexión a internet: la página carga Tailwind CSS, GSAP, Three.js y fuentes de Google desde sus CDN.

También puedes ejecutar la página desde un servidor local. Desde la carpeta del repositorio, ejecuta:

```bash
python -m http.server 8000 --directory web-app
```

Después visita [http://localhost:8000](http://localhost:8000) en el navegador. Si el comando `python` no está disponible, prueba `py -m http.server 8000 --directory web-app` en Windows.

> GitHub muestra el código de `index.html`, pero no ejecuta la página dentro del visor de archivos. Para compartirla como sitio, publícala en un servicio de hosting estático configurando `web-app` como carpeta de publicación y comparte la URL resultante.

### Controles

- Usa los botones de la parte superior para alternar entre **Vista Panorámica Continua** y **Modo Época por Época**.
- En la vista panorámica, desplázate horizontalmente con la rueda del ratón o con las flechas `←` y `→`.
- En el modo por épocas, usa `←` y `→` para avanzar o retroceder; las teclas `1` a `5` seleccionan una etapa.
- `P` activa la vista panorámica y `E` activa el modo por épocas.
- Los botones de la página permiten abrir las reflexiones, la lente TGS, el análisis crítico y las referencias APA 7. También puedes usar `R`, `L` y `A`, respectivamente.
- Selecciona una tarjeta para ver sus detalles; pulsa `Escape` o haz clic fuera de la ventana para cerrarla.
- El control **Sonido ON/OFF** activa o desactiva los efectos de audio.

## Generar los diseños en Figma

El plugin no está publicado en la comunidad de Figma; se carga como plugin de desarrollo desde una copia del repositorio.

1. Descarga y descomprime el repositorio desde GitHub, o clónalo con Git.
2. Abre la aplicación de escritorio de Figma y un archivo de diseño.
3. En Figma, selecciona **Plugins > Development > Import plugin from manifest...**.
4. Elige el archivo `figma-plugin/manifest.json` dentro de la copia descargada.
5. Ejecuta el plugin desde **Plugins > Development > Historia de la ISC - Línea de Tiempo Interactiva**.
6. Cuando termine, encontrarás en la página actual cinco lienzos de etapas históricas y uno de reflexiones. Los elementos generados se pueden editar como un diseño normal de Figma.

El plugin genera los lienzos visuales; la navegación y las interacciones descritas en la sección anterior pertenecen a la versión web. Si vuelves a ejecutar el plugin, generará otro conjunto de lienzos.

## Tecnologías

- HTML, CSS y JavaScript
- Tailwind CSS, GSAP y Three.js (cargados desde CDN)
- Figma Plugin API

## Créditos

Proyecto elaborado por Yahel Rodriguez Sanchez
