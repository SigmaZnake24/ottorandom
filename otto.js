
// H2 ANIMATION______________________________________________________

const h2s = document.querySelectorAll("h2");

setInterval(() => {
  h2s.forEach(h2 => {
    h2.style.transform = "translateX(10px)";
  });

  setTimeout(() => {
    h2s.forEach(h2 => {
      h2.style.transform = "translateX(0)";
    });
  }, 1000);
}, 2000);

// TITLE PULSATE_____________________________________________________

const title = document.getElementById("title");

let big = true;

setInterval(() => {
  title.style.fontSize = big ? "42px" : "40px";
  big = !big;
}, 1100);

// THEME SWITCHER_____________________________________________________

let isDark = false;

function switchTheme() {
  isDark = !isDark;

  document.body.classList.toggle("dark", isDark);
  document.body.classList.toggle("light", !isDark);

  const btn = document.getElementById("themeBtn");
  btn.textContent = isDark ? "Dark" : "Light";
}


document.body.classList.add("light");

