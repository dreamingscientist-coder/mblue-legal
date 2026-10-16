(() => {
  const language = document.documentElement.lang;
  try {
    if (language === 'en' && localStorage.getItem('mblue-language') === 'vi') {
      const target = document.querySelector('[data-language="vi"]');
      location.replace(target.href + location.search + location.hash);
      return;
    }
    localStorage.setItem('mblue-language', language);
  } catch (_) { /* Language links work when storage is unavailable. */ }
  document.querySelectorAll('[data-language]').forEach(link => {
    link.addEventListener('click', () => {
      try { localStorage.setItem('mblue-language', link.dataset.language); } catch (_) {}
    });
  });
})();
