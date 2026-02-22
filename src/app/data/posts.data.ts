export const POSTS = [
  { id: 1, nombre_usuario: 'Juan Pérez', fecha: '2025-01-05', post: 'Angular Signals me parecen una forma muy clara de manejar el estado.' },
  { id: 2, nombre_usuario: 'María López', fecha: '2025-01-06', post: 'Estoy aprendiendo Angular y cada clase se vuelve más interesante.' },
  { id: 3, nombre_usuario: 'Carlos Andrade', fecha: '2025-01-06', post: 'Separar la lógica en servicios hace el código mucho más limpio.' },
  { id: 4, nombre_usuario: 'Ana Torres', fecha: '2025-01-07', post: 'Me gustó mucho trabajar con componentes reutilizables.' },
  { id: 5, nombre_usuario: 'Luis Fernández', fecha: '2025-01-07', post: 'Los signals son más fáciles de entender que los observables.' },
  { id: 6, nombre_usuario: 'Sofía Ramírez', fecha: '2025-01-08', post: 'Angular moderno es mucho más intuitivo que versiones anteriores.' },
  { id: 7, nombre_usuario: 'Diego Morales', fecha: '2025-01-08', post: 'Me costó un poco entender readonly(), pero ahora tiene sentido.' },
  { id: 8, nombre_usuario: 'Paola Cruz', fecha: '2025-01-09', post: 'Usar servicios para el estado evita muchos errores.' },
  { id: 9, nombre_usuario: 'Andrés Vega', fecha: '2025-01-09', post: 'Nunca pensé que Angular pudiera ser tan ordenado.' },
  { id: 10, nombre_usuario: 'Valentina Ortiz', fecha: '2025-01-10', post: 'Me gusta cómo se actualiza la vista automáticamente con signals.' },
  { id: 11, nombre_usuario: 'Jorge Castillo', fecha: '2025-01-10', post: 'Este proyecto me ayudó a entender mejor la comunicación entre componentes.' },
  { id: 12, nombre_usuario: 'Camila Ríos', fecha: '2025-01-11', post: 'Antes ponía toda la lógica en el componente, ahora uso servicios.' },
  { id: 13, nombre_usuario: 'Ricardo Ponce', fecha: '2025-01-11', post: 'Me parece una buena práctica no modificar el estado directamente.' },
  { id: 14, nombre_usuario: 'Fernanda Molina', fecha: '2025-01-12', post: 'Angular Signals simplifica mucho el manejo del estado.' },
  { id: 15, nombre_usuario: 'Pedro Sánchez', fecha: '2025-01-12', post: 'Esta tarea me ayudó a ordenar mejor mi código.' },
  { id: 16, nombre_usuario: 'Daniela Herrera', fecha: '2025-01-13', post: 'Separar responsabilidades hace que la app sea más mantenible.' },
  { id: 17, nombre_usuario: 'Miguel Álvarez', fecha: '2025-01-13', post: 'Me gustó trabajar con un estado global controlado.' },
  { id: 18, nombre_usuario: 'Natalia Cedeño', fecha: '2025-01-14', post: 'Angular Signals es una excelente mejora del framework.' },
  { id: 19, nombre_usuario: 'Roberto León', fecha: '2025-01-14', post: 'Ahora entiendo mejor cuándo usar un servicio.' },
  { id: 20, nombre_usuario: 'Lucía Bravo', fecha: '2025-01-15', post: 'Esta práctica me dio más confianza usando Angular.' },
];

export interface Post {
  id: number;
  nombre_usuario: string;
  fecha: string;
  post: string;
}
