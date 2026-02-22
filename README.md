# App de Posts con Likes y Dislikes (Angular Signals)

Aplicación en Angular que muestra una lista de posts y gestiona reacciones (likes y dislikes) usando **Angular Signals**, un servicio para el estado global y componentes reutilizables.

## Requisitos cumplidos

- **Angular Signals**: contadores globales y listado de posts con signals.
- **Servicio** (`PostsService`) para el estado global (likes y dislikes).
- **Contadores globales** expuestos como signals de solo lectura (`totalLikes`, `totalDislikes`).
- **Componente reutilizable** `app-post-card`; el padre envía cada post al hijo mediante `[post]`.
- **Comunicación**: el hijo solo llama al servicio (`addLike()` / `addDislike()`); los componentes no modifican los totales directamente.

## Funcionalidades

1. **Posts**: cada post muestra nombre de usuario, fecha y contenido.
2. **Reacciones por post**: botón 👍 Like y botón 👎 Dislike.
3. **Totales globales**: en la pantalla principal se muestran Total de Likes y Total de Dislikes; se actualizan al presionar Like o Dislike en cualquier post.

## Cómo ejecutar

```bash
npm install
npm start
```

Abre en el navegador la URL que indique la consola (por defecto `http://localhost:4200`).

## Estructura relevante

- `src/app/services/posts.service.ts`: estado global (likes, dislikes, posts); métodos `addLike()` y `addDislike()`.
- `src/app/pages/posts-page.*`: componente principal; muestra totales y lista de posts.
- `src/app/components/post-card/*`: tarjeta de post con botones Like y Dislike.
- `src/app/data/posts.data.ts`: datos iniciales de los posts.

## Entrega

- Código fuente en `src/`
- `package.json`, `angular.json`, `.gitignore`, `README.md`
- No incluir `node_modules` ni `dist`
