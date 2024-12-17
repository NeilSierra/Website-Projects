document.addEventListener("DOMContentLoaded", () => {
  const titles = [
      "Neil'sAnimeList",
      "Watch Anime 📺",
      "Read Manga 📖",
      "Enjoy the Experience 🤩"
  ];
  let index = 0;

  setInterval(() => {
      document.title = titles[index];
      index = (index + 1) % titles.length; // Loop back to the first title
  }, 3000); // Change title every 3 seconds
});