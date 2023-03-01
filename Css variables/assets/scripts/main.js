const root_doc = document.querySelector(':root');

const spacing_elmt = document.getElementById("spac")
const blur_elmt = document.getElementById("blurr")
const color_elmt = document.getElementById("baseColor")

spacing_elmt.addEventListener("input", (event) => {
  root_doc.style.setProperty('--borderSize', `${event.target.value}px`);
})


blur_elmt.addEventListener("input", (event) => {
  root_doc.style.setProperty('--blurFilter', `blur(${event.target.value}px)`);
})

color_elmt.addEventListener("change", (event) => {
  root_doc.style.setProperty('--borderColor', `${event.target.value}`);
})