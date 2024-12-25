# G2 Esports History Web Application

![G2 Esports](https://your-image-link.com/banner.jpg) <!-- Opcional: Enlace a una imagen representativa -->

## Descripción

Esta aplicación web es un **Hall of Fame** para **G2 Esports**, una de las organizaciones más destacadas en la industria de los esports. Desarrollada con **Astro** y otras tecnologías modernas, esta plataforma proporciona una experiencia única para explorar los logros históricos, jugadores destacados y la evolución de los rosters a lo largo de los años.

El proyecto está diseñado para ofrecer un rendimiento óptimo y una navegación fluida entre vistas utilizando **View Transitions** y un enfoque en la carga dinámica de datos desde la API.

## Características principales

- **Rosters históricos**: Navega por los equipos de G2 Esports desde 2016 hasta la actualidad.
- **Visualización dinámica**: Carga y representación de jugadores con imágenes e información asociada, utilizando datos obtenidos de la API.
- **Navegación optimizada**: Transiciones suaves entre vistas con soporte para dispositivos móviles y pantallas grandes.
- **Componentes dinámicos**: Utiliza Server Islands en Astro para actualizar los datos en tiempo de ejecución.
- **Integración de API**: Datos sincronizados desde la API alojada en `https://g2historyapi-production.up.railway.app/`.

## Tecnologías utilizadas

- **Astro**: Framework principal para el desarrollo de la web.
- **View Transitions API**: Para navegación suave entre vistas.
- **Tailwind CSS**: Para estilos rápidos y consistentes.
- **API**: Construida con Node.js y Express.js, utilizando una base de datos gestionada con **Turso**.
