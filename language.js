(() => {
  const language = document.documentElement.lang;
  try {
    const preferred = localStorage.getItem('mblue-language');
    if (language === 'en' && (preferred === 'vi' || preferred === 'fr')) {
      const target = document.querySelector(`[data-language="${preferred}"]`);
      if (target) {
        location.replace(target.href + location.search + location.hash);
        return;
      }
    }
    localStorage.setItem('mblue-language', language);
  } catch (_) { /* Language links work when storage is unavailable. */ }
  document.querySelectorAll('[data-language]').forEach(link => {
    link.addEventListener('click', () => {
      try { localStorage.setItem('mblue-language', link.dataset.language); } catch (_) {}
    });
  });
})();
