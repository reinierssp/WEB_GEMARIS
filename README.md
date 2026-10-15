# Página de presentación de GEMARIS

Sitio estático independiente de la aplicación Flask. Se publica desde
`https://github.com/reinierssp/WEB_GEMARIS`; el repositorio del producto
permanece privado.

## Vista previa

Abre `index.html` en un navegador. La página no requiere instalar dependencias
ni iniciar GEMARIS.

## Publicación

El repositorio público dedicado ya contiene únicamente los archivos de esta
carpeta, incluido `images/gemaris-isotipo.png`. No publiques el repositorio
privado completo ni agregues configuración, datos, capturas operacionales o
código de la aplicación.

GitHub Pages está configurado para publicar desde la rama `main` y la carpeta
raíz (`/(root)`). El sitio está disponible en
https://reinierssp.github.io/WEB_GEMARIS/. Después de enviar cambios a `main`,
GitHub Pages los publica automáticamente; la actualización puede tardar unos
minutos. El contenido actual indica que el proyecto está en desarrollo y no
anuncia disponibilidad comercial.

La página ofrece contacto por correo y WhatsApp Business. El número de
WhatsApp está incluido en el enlace de chat para que el botón abra la
conversación, aunque no se muestra como texto en la página. Cuando se defina un
canal oficial de Telegram, se podrá agregar junto a esos contactos.

El sitio no requiere bibliotecas externas ni tiene conexión con la aplicación.
Usa tipografías del sistema y funciona sin conexión después de cargar sus
archivos locales.

## Contenido público y documentación de GEMARIS

El sitio usa estos archivos locales:

- `site-content.js`: única fuente de contenido aprobado para difusión. Contiene
  el significado público del nombre GEMARIS, la estructura objetivo, los
  estados resumidos de las áreas y las novedades seleccionadas.
- `site.js`: renderiza esas fichas en el sitio con JavaScript nativo y crea el
  contenido mediante nodos de texto.
- `index.html` y `styles.css`: estructura semántica y presentación responsive.

La estructura reúne las fichas públicas de las áreas, sus tableros y el estado
conocido de desarrollo. La propuesta es adaptable y no representa el
organigrama vigente de una organización concreta. Dirección General aparece
como autoridad central de la que dependen los módulos, sin constituir un
módulo aparte. Auditoría y Control Interno (Regulación y Control) atraviesan
los módulos; esto no implica acceso irrestricto a datos y mantiene la
independencia de Auditoría.

La sección **La plataforma** inicia con el isotipo, que se separa en siete
piezas. Después presenta cada una con su explicación, forma el nombre GEMARIS
con las letras mientras las piezas se reconstruyen y termina con un destello.
Cada pieza se muestra con su recorte
transparente independiente (`images/gemaris-piece-*.png`), extraído del
isotipo original para evitar que aparezcan fragmentos de piezas vecinas. La
pieza central S representa Servicios. La propuesta de expansión
del nombre resume el propósito de la plataforma; no es una afirmación de que
todas las capacidades descritas estén disponibles. La misma sección explica
el modelo funcional módulo → tablero → servicio y las funciones transversales.
El inicio y la ilustración también presentan una propuesta conceptual; el
estado actual por área se consulta en el mapa de estructura.

Los estados distinguen **En desarrollo**, **En pausa** y **Conceptual · sin
iniciar**. Describen el avance de GEMARIS, no la disponibilidad operativa de un
departamento. La ilustración del encabezado es conceptual: no es una captura
ni una promesa de interfaz disponible.

Al actualizar la información:

1. Contrasta el dato con la biblioteca interna de GEMARIS y el estado vigente
   del proyecto.
2. Prepara en `site-content.js` solo un resumen público aprobado; no conectes
   este repositorio al repositorio privado, a sus documentos ni a su
   changelog.
3. Mantén los estados por módulo y tablero: **En desarrollo** para trabajo
   activo, **En pausa** para desarrollo comenzado y detenido, y **Conceptual ·
   sin iniciar** cuando solo existe la propuesta. No estimes porcentajes sin un
   alcance medible.
4. Añade las novedades aprobadas a `updates` en `site-content.js`, actualiza
   `lastUpdated` al revisar el contenido y cambia la versión mostrada solo
   cuando corresponda a una decisión confirmada. Distingue claramente entre
   el cierre de una versión validada y el inicio de un ciclo en desarrollo;
   no presentes como disponible una alpha que todavía no se ha compilado.
5. Abre `index.html` directamente o sírvelo localmente; no se requieren
   dependencias ni conexión de red para cargar el contenido.
6. Comprueba las fichas, enlaces, accesibilidad por teclado, presentación
   responsive y claridad de los estados. Contrasta también que las novedades,
   el identificador de versión y el alcance anunciado coincidan con la
   documentación vigente del proyecto, y que no revelen detalles internos
   innecesarios.

La actualización de la documentación privada **no cambia la página por sí
sola**. Esta separación es intencional: cada cambio público requiere revisión
editorial. Al enviar cambios aprobados a `main`, GitHub Pages reconstruye y
publica el sitio automáticamente.
