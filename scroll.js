const pixelsTag = document.querySelector("div.pixels");

const tagUpdate = () => {
  const pixels = window.pageYOffset;
  pixelsTag.innerHTML = `Scrolled pixels: ${pixels}`;
}

tagUpdate();

document.addEventListener("scroll", () => {
  tagUpdate();
});
