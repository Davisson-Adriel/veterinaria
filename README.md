# Registro de Mascotas y Dueños

Este es un proyecto en JavaScript puro que permite registrar, gestionar y consultar información sobre dueños y sus mascotas. La aplicación simula un pequeño sistema de gestión veterinaria utilizando alertas, prompts y la consola del navegador.

## Descripción del Proyecto

Este sistema interactivo permite:

- Registrar dueños con datos personales como nombre, cédula, teléfono y correo electrónico.
- Registrar mascotas asociadas a un dueño mediante su cédula.
- Buscar mascotas por nombre o por cédula del dueño.
- Actualizar el estado de salud de las mascotas.
- Eliminar registros de mascotas.
- Ver el listado completo de mascotas registradas.

Toda la interacción se hace desde la interfaz del navegador utilizando `prompt()`, `alert()` y `console.log()`.

## Tecnologías Usadas

- **JavaScript**: Lenguaje principal del proyecto.
- Uso de funciones como `alert()`, `prompt()` y `console.log()` para la interfaz.
- **Temporizadores Asíncronos**: `setTimeout()` y `async/await` para simular procesos de carga y asincronía.

## ¿Cómo se aplica la asincronía?

Este proyecto utiliza **funciones asíncronas** para simular tiempos de espera y procesamiento, haciendo que la interacción sea más realista:

- `setTimeout()` se usa para dar la sensación de que ciertas operaciones (como registrar datos o realizar búsquedas) toman un tiempo en procesarse.
- `async/await` y `Promise` permiten controlar la secuencia de ejecución y mantener un flujo limpio, especialmente en el menú y en funciones como `buscar()`, `actualizar()` y `eliminar()`.

Por ejemplo:
```javascript
await new Promise((resolve) => setTimeout(resolve, 2000));
