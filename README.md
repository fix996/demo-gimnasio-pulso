# Pulso · demo de gimnasio

Sitio estático y ficticio para mostrar a gimnasios de barrio. Abrí `dist/index.html` en un navegador o serví `dist/` con un servidor estático. No necesita instalación ni dependencias.

## Qué incluye

- Portada, actividades y horarios de clases ilustrativos filtrables por día.
- Tres planes con precios mensuales de **ejemplo** en pesos argentinos.
- Botones de planes que preseleccionan la consulta.
- Formulario que muestra un resumen local. No envía ni guarda información, no reserva cupos ni cobra.

Contenido editable: `dist/data.js`. Interacciones: `dist/app.js`. Diseño: `dist/styles.css`. La fotografía ilustrativa está optimizada en `dist/assets/gimnasio.jpg`; el logo vectorial está en `dist/logo.svg`.

Verificación: `node --check dist/data.js`, `node --check dist/app.js` y `node scripts/check.mjs`.

Para convertirla en un sitio real hay que confirmar identidad, horarios, cupos, precios, contacto y destino del formulario con el negocio. Esta carpeta no contiene cuentas ni backend.
