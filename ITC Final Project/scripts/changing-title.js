const titles = [
  "Neil'sAnimeList",
  "Watch Anime 📺",
  "Read Manga 📖",
  "Enjoy the Experience 🤩"
];
let index = 0;

setInterval(() => {
  document.title = titles[index];
  index = (index + 1) % titles.length;
}, 3000);