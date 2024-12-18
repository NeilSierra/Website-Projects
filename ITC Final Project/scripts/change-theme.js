const switchTheme = (function () {
  let index = 0;
  const themes = [
    function darkTheme() {
      const root = document.documentElement;
      root.style.setProperty('--bg-nav-color', '#161618');
      const moon = document.getElementById('moon');
      moon.style.setProperty('opacity', '1');
      const sun = document.getElementById('sun');
      sun.style.setProperty('opacity', '0');
    },
    function lightTheme() {
      const root = document.documentElement;
      const moon = document.getElementById('moon');
      moon.style.setProperty('opacity', '0');
      const sun = document.getElementById('sun');
      sun.style.setProperty('opacity', '1');
    }
  ];
  return function () {
    index = (index + 1) % themes.length;
    themes[index]();
  };
})();