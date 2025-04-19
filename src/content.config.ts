/**
 * src/content.config.ts
 *
 * 📌 UTILIDAD:
 * Este archivo define la estructura de los datos que serán utilizados por Astro Content Collections
 * para gestionar el contenido dinámico del portafolio. Aquí se especifica cómo deben ser interpretados
 * los archivos .md ubicados dentro de la carpeta `src/content/projects`.
 *
 * Se usa para establecer un esquema que asegure consistencia, validación y facilidad de mantenimiento
 * al momento de agregar nuevos proyectos u otro tipo de contenido en el futuro.
 *
 * ✅ DÓNDE SE UTILIZA:
 * - En las secciones de proyectos para categorizar o filtrar.
 * - En formularios o interfaces donde se seleccionen tecnologías.
 * - En componentes que muestren información dinámica basada en contenido.
 */

import { defineCollection, z } from 'astro:content';

// 📁 Colección de Proyectos
const projects = defineCollection({
  schema: z.object({
    title: z.string(),                      // Título del proyecto
    description: z.string(),                // Descripción breve del proyecto
    tags: z.array(z.string()).optional(),   // Tecnologías o etiquetas del proyecto
    pubDate: z.coerce.date(),               // Fecha de publicación o creación
    updatedDate: z.coerce.date().optional(),// Última actualización (opcional)
    heroImage: z.string().optional(),       // Imagen destacada (opcional)
    repoUrl: z.string().url().optional(),   // URL del repositorio del proyecto (opcional)
    demoUrl: z.string().url().optional(),   // URL de la demo en línea del proyecto (opcional)
  }),
});

// Exportación de las colecciones disponibles
export const collections = {
  projects,
};
