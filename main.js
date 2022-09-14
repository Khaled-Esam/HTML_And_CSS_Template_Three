let counts = document.querySelectorAll(".count");
let stats = document.querySelector("#stats");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop) {
    if (!started) {
      counts.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(e) {
  let goal = e.dataset.goal;
  console.log(goal);
  let counter = setInterval(function () {
    e.textContent++;
    if (e.textContent === goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}

// Skills Section
let skillsSection = document.querySelector(".skills");
let spans = document.querySelectorAll(".skills span");

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop) {
    spans.forEach((span) => (span.style.width = span.dataset.width));
  }
};
