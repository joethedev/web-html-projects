/*const all_divs = Array.from(document.querySelectorAll('.btn'))

console.log(all_divs)


all_divs.forEach(item => item.addEventListener("keydown", (event) => {
  console.log(event.keycode)
}))*/


window.addEventListener(
  "keypress",
  (event) => {
    console.log(`btn-${event.code}`)
    document.getElementById(`btn-${event.code}`).style.backgroundColor = "Red"
    document.getElementById(`audio-${event.code}`).play();
    setTimeout(function () {
      document.getElementById(`btn-${event.code}`).style.backgroundColor = "Gray";
    }, 500);
  })




/*window.addEventListener(
  "keypress",
  (event) => {
    switch (event.key) {
      case "a":
        const elmt_a = document.getElementById("btn-a");
        elmt_a.style.backgroundColor = "Red";
        document.getElementById("audio").play();
        setTimeout(function () {
          elmt_a.style.backgroundColor = "Gray";
        }, 500);

        break;
      case "s":
        var elmt = document.getElementById("btn-s");
        elmt.style.backgroundColor = "Red";
        document.getElementById("audio-clap").play();
        setTimeout(function () {
          elmt.style.backgroundColor = "Gray";
        }, 500);
        break;
      case "d":
        var elmt = document.getElementById("btn-d");
        elmt.style.backgroundColor = "Red";
        document.getElementById("audio-hihat").play();
        setTimeout(function () {
          elmt.style.backgroundColor = "Gray";
        }, 500);
        break;
      case "f":
        var elmt = document.getElementById("btn-f");
        elmt.style.backgroundColor = "Red";
        document.getElementById("audio-kick").play();
        setTimeout(function () {
          elmt.style.backgroundColor = "Gray";
        }, 500);
        break;
      case "g":
        var elmt = document.getElementById("btn-g");
        elmt.style.backgroundColor = "Red";
        document.getElementById("audio-openhat").play();
        setTimeout(function () {
          elmt.style.backgroundColor = "Gray";
        }, 500);
        break;
      case "h":
        var elmt = document.getElementById("btn-h");
        elmt.style.backgroundColor = "Red";
        document.getElementById("audio-ride").play();
        setTimeout(function () {
          elmt.style.backgroundColor = "Gray";
        }, 500);
        break;
      case "j":
        var elmt = document.getElementById("btn-j");
        elmt.style.backgroundColor = "Red";
        document.getElementById("audio-snare").play();
        setTimeout(function () {
          elmt.style.backgroundColor = "Gray";
        }, 500);
        break;
      case "k":
        var elmt = document.getElementById("btn-k");
        elmt.style.backgroundColor = "Red";
        document.getElementById("audio-tink").play();
        setTimeout(function () {
          elmt.style.backgroundColor = "Gray";
        }, 500);
        break;
      case "l":
        var elmt = document.getElementById("btn-l");
        elmt.style.backgroundColor = "Red";
        document.getElementById("audio-tom").play();
        setTimeout(function () {
          elmt.style.backgroundColor = "Gray";
        }, 500);
        break;
      default:
        console.log("event.key");
    }
  },
  { once: false }
);*/
