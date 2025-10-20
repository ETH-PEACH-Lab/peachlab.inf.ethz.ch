export const setInitialTheme = `
(function() {
  try {
    var dark = localStorage.getItem('darkMode') === 'true';
    document.documentElement.classList.remove('custom-light', 'custom-dark');
    document.documentElement.classList.add(dark ? 'custom-dark' : 'custom-light');
  } catch (e) {}
})();
`;
