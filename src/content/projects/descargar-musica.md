---
title: "Descargador de Música desde YouTube"
description: "Aplicación que permite descargar audio de videos de YouTube en formato MP3 de forma rápida y sencilla, pensada para uso personal."
tags: ["Node.js", "JavaScript", "YouTube API", "FFmpeg", "UX"]
pubDate: 2024-08-05
updatedDate: 2024-10-15
heroImage: "/portafolio-personal/images/projects/descargar-musica-cover.png"
repoUrl: "https://github.com/JehovannyMaradiaga/Descargar_Musica_mp3"
demoUrl: "https://github.com/JehovannyMaradiaga/Descargar_Musica_mp3"
---

El **Descargador de Música desde YouTube** es una herramienta desarrollada para facilitar la descarga de audio en formato MP3 a partir de enlaces de videos de YouTube. Ideal para quienes desean escuchar música sin conexión o crear listas de reproducción personalizadas.

 Características principales:

- Interfaz sencilla con campo para pegar enlaces.
- Conversión de video a MP3 usando `FFmpeg`.
- Descarga automática con nombre del artista y título de la canción.
- Verificación del enlace antes de iniciar la descarga.
- No requiere autenticación ni registros.

 Tecnologías empleadas:

- `Node.js` y `Express` para el backend.
- `ytdl-core` para la descarga del video.
- `FFmpeg` para la conversión a audio.
- `JavaScript` vanilla para una experiencia ligera en el cliente.

Este proyecto nació de la necesidad de contar con una solución rápida y sin distracciones para descargar música de manera segura y personalizada.
