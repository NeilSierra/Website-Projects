const switchTheme = (function () {
  let index = 0;
  const themes = [
    function darkTheme() {
      const root = document.documentElement;
      root.style.setProperty('--bg-nav-color', '#161618');
      root.style.setProperty('--bg-content-color', '#1B1B1F')
      root.style.setProperty('--light-border-color', '#2E2E32');
      root.style.setProperty('--dark-border-color', '#000000');
      root.style.setProperty('--scroll-color1', '#686868');
      root.style.setProperty('--scroll-color2', '#424242');
      root.style.setProperty('--text-main', '#ffffff');
      root.style.setProperty('--text-main2', '#d5d5d5');
      root.style.setProperty('--text-sub', '#AFAFA8');
      const moon = document.getElementById('moon')
      moon.style.setProperty('opacity', '1')
      const sun = document.getElementById('sun')
      sun.style.setProperty('opacity', '0')
    },
    function lightTheme() {
      const root = document.documentElement;
      root.style.setProperty('--bg-nav-color', '#F6F6F7');
      root.style.setProperty('--bg-content-color', '#FFFFFF')
      root.style.setProperty('--light-border-color', '#E2E2E3');
      root.style.setProperty('--dark-border-color', '#E2E2E3');
      root.style.setProperty('--scroll-color1', '#C1C1C1');
      root.style.setProperty('--scroll-color2', '#F1F1F1');
      root.style.setProperty('--text-main', '#000000');
      root.style.setProperty('--text-main2', '#2a2a2a');
      root.style.setProperty('--text-sub', '#505057');
      const moon = document.getElementById('moon')
      moon.style.setProperty('opacity', '0')
      const sun = document.getElementById('sun')
      sun.style.setProperty('opacity', '1')
    }
  ];

  return function () {
    index = (index + 1) % themes.length;
    themes[index]();
  };
})();