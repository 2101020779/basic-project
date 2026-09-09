//countdown timer
 const Countdown = () => {
  const launchDate = new Date("Sep 9, 2026 18:10:00").getTime();
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
// Modal Functionality
const authModal = document.getElementById('authModal');
const closeAuth = document.getElementById('closeAuth');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

const loginBtn = document.querySelector('.btn.login');
const signupBtn = document.querySelector('.btn.signup');

const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');

// Open Modals
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    authModal.classList.add('show');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
  });
}

if (signupBtn) {
  signupBtn.addEventListener('click', () => {
    authModal.classList.add('show');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
  });
}

// Close Actions
const closeModal = () => authModal.classList.remove('show');
if (closeAuth) closeAuth.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
  if (e.target === authModal) closeModal();
});

// Switch Between Forms
if (switchToSignup) {
  switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
  });
}

if (switchToLogin) {
  switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
  });
}