const switchTheme = (function () {
  let index = 0;
  const themes = [
    function darkTheme() {
      const root = document.documentElement;
      root.style.setProperty('--navigation','#121213');
      root.style.setProperty('--sidebar', '#161618');
      root.style.setProperty('--content1', '#1B1B1F');
      root.style.setProperty('--content2', '#202127');
      root.style.setProperty('--text1', '#E0E0D8');
      root.style.setProperty('--text2', '#9B9DA5');
      root.style.setProperty('--border', '#2e2e32');
      root.style.setProperty('--scroll1', '#686868');
      root.style.setProperty('--scroll2', '#424242');
      root.style.setProperty('--theme', '#000000');
      root.style.setProperty('--bg-nav-color', '#161618');
      const moon = document.getElementById('moon');
      moon.style.setProperty('opacity', '1');
      const sun = document.getElementById('sun');
      sun.style.setProperty('opacity', '0');
    },
    function lightTheme() {
      const root = document.documentElement;
      root.style.setProperty('--navigation', '#ededec');
      root.style.setProperty('--sidebar', '#e9e9e7');
      root.style.setProperty('--content1', '#e4e4e0');
      root.style.setProperty('--content2', '#dfded8');
      root.style.setProperty('--text1', '#1f1f27');
      root.style.setProperty('--text2', '#64625a');
      root.style.setProperty('--border', '#d1d1cd');
      root.style.setProperty('--scroll1', '#979797');
      root.style.setProperty('--scroll2', '#bdbdbd');
      root.style.setProperty('--theme', '#FFFFFFF');
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