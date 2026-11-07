(() => {
  const key = 'answerspace-theme';
  const root = document.documentElement;
  let theme = localStorage.getItem(key) || 'light';
  root.dataset.theme = theme;
  const toggle = document.querySelector('#theme-toggle');
  if (!toggle) return;
  const update = () => {
    const dark = root.dataset.theme === 'dark';
    toggle.textContent = dark ? '☀' : '◐';
    toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
  };
  update();
  toggle.addEventListener('click', () => {
    theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = theme;
    localStorage.setItem(key, theme);
    update();
  });
})();
