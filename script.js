//countdown timer
 const Countdown = () => {
  const launchDate = new Date("Sep 8, 2026 22:53:00").getTime();
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

if (timeLeft < 0) {
  clearInterval(timer);
  document.querySelector(".countdown").Style.display = "none";
  launchConfetti();
  return;
}

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
};
const timer = setInterval(Countdown, 1000);
//confetti Animation
function launchConfetti() {
  const confettiSettings = { target: 'confetti-canvas', max: 150, size: 1.5, animate: true };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}
