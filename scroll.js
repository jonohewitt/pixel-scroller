const pixelsTag = document.querySelector("div.pixels");

document.addEventListener("scroll", () => {
  const pixels = window.pageYOffset;
  pixelsTag.innerHTML = `Scrolled pixels: ${pixels}`;
});
