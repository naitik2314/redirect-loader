const dots = document.getElementById("dots");
let dotCount = 0;

setInterval(() => {
  dotCount = (dotCount + 1) % 4; // Cycle between 0 to 3 dots
  dots.textContent = ".".repeat(dotCount);
}, 500);
