export function initLoader() {
  let loaderTimeout;

  // ✅ Mostrar el loader si tarda más de 1.5s en cargar
  document.addEventListener('astro:before-preparation', () => {
    console.log('[Loader] Evento "astro:before-preparation" detectado.');
    clearTimeout(loaderTimeout);
    loaderTimeout = setTimeout(() => {
      const loader = document.getElementById('global-loader');
      if (loader) {
        loader.classList.remove('hidden');
        setTimeout(() => loader.classList.remove('opacity-0'), 10);  // 👈 Retraso mínimo para aplicar transición
        console.log('[Loader] Loader MOSTRADO tras 1.5s.');
      } else {
        console.error('[Loader] Loader NO encontrado.');
      }
    }, 800);  // 👈 Tiempo límite para mostrar el loader
  });

  // ✅ Ocultar el loader cuando la nueva página esté lista
  document.addEventListener('astro:after-preparation', () => {
    console.log('[Loader] Evento "astro:after-preparation" detectado.');
    clearTimeout(loaderTimeout);
    const loader = document.getElementById('global-loader');
    if (loader) {
      loader.classList.add('opacity-0');
      setTimeout(() => loader.classList.add('hidden'), 300);  // ⏱ Esperar a que termine la transición
      console.log('[Loader] Loader OCULTADO.');
    } else {
      console.error('[Loader] Loader NO encontrado al ocultar.');
    }
  });
}
