function checkPassword() {
  let password = document.getElementById("passwordInput").value;
  let error = document.getElementById("errorMsg");

  let correctPassword = "0608";

  if (password === correctPassword) {
    error.textContent = "";

    const welcomeScreen = document.getElementById("welcomeScreen");
    const mainPage = document.getElementById("mainPage");

    welcomeScreen.classList.add("fade-out");

    setTimeout(() => {
      welcomeScreen.style.display = "none";

      document.body.classList.add("main-active");

      mainPage.classList.remove("hidden");
      mainPage.classList.add("fade-in");
    }, 700);

  } else {
    error.textContent = "Not quite right… try again ✨";
  }
}

function startWithoutSound() {
  revealBirthday();
}

function startWithSound() {

  let music = document.getElementById("bgMusic");
  let popup = document.getElementById("volumePopup");
  let soundBox = document.getElementById("soundBox");

  music.play();

  /* hide sound box immediately */
  soundBox.classList.add("hide-sound-box");

  /* show popup */
  popup.classList.remove("hidden-body");
  popup.classList.add("show-body");

  /* fade popup away */
  setTimeout(() => {
    popup.classList.add("popup-out");
  }, 2200);

  /* remove popup + start main reveal */
  setTimeout(() => {
    popup.style.display = "none";
    revealBirthday();
  }, 3000);
}

function toggleMusic() {

  let music = document.getElementById("bgMusic");
  let btn = document.getElementById("muteBtn");

  if (music.paused) {

    music.play();
    btn.textContent = "🔊";

  } else {

    music.pause();
    btn.textContent = "🔇";
  }
}

function revealBirthday() {
  const soundBox = document.getElementById("soundBox");
  const banner = document.getElementById("partyBanner");
  const title = document.getElementById("birthdayTitle");
  const name = document.getElementById("birthdayName");
  const blessing = document.getElementById("blessingSection");
  const blower = document.getElementById("blowerAnimation");
  const memory = document.getElementById("memoryTimeline");
  const wishes = document.getElementById("wishesSection");
  const memory2 = document.getElementById("memoryTimeline2");
  const puzzle = document.getElementById("puzzleSection");
  const finale = document.getElementById("finaleSection");
  const groupPhoto = document.getElementById("groupPhotoSection");

  soundBox.classList.add("hide-sound-box");

  setTimeout(() => {
  banner.classList.remove("hidden-body");
  banner.classList.add("show-body");
}, 250);

  setTimeout(() => {
  name.classList.remove("hidden-body");
  name.classList.add("show-body");
  }, 850);

  setTimeout(() => {
    title.classList.remove("hidden-title");
    title.classList.add("show-title");
  }, 400);

  setTimeout(() => {
  blessing.classList.remove("hidden-body");
  blessing.classList.add("show-body");
}, 1500);

  setTimeout(() => {
  blower.classList.remove("hidden-body");
  blower.classList.add("show-body");
}, 2100);

  setTimeout(() => {
  memory.classList.remove("hidden-body");
  memory.classList.add("show-body");
}, 2600);

  setTimeout(() => {

  wishes.classList.remove("hidden-body");
  wishes.classList.add("show-body");
}, 3400);


  setTimeout(() => {
  memory2.classList.remove("hidden-body");
  memory2.classList.add("show-body");
}, 3700);

    setTimeout(() => {
  puzzle.classList.remove("hidden-body");
  puzzle.classList.add("show-body");
}, 4400);

setTimeout(() => {
  finale.classList.remove("hidden-body");
  finale.classList.add("show-body");
}, 5100);

  setTimeout(() => {
  groupPhoto.classList.remove("hidden-body");
  groupPhoto.classList.add("show-body");
}, 5800);
}

let counterStarted = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !counterStarted) {
      counterStarted = true;
      startAgeCounter();
    }
  });
}, {
  threshold: 0.5
});

window.addEventListener("load", () => {
  const finaleSection = document.getElementById("finaleSection");
  if (finaleSection) {
    observer.observe(finaleSection);
  }
});

function startAgeCounter() {
  let counter = document.getElementById("ageCounter");
  let title = document.getElementById("finaleTitle");

  let number = 0;

  let interval = setInterval(() => {
    counter.textContent = number;
    number++;

    if (number > 25) {
      counter.textContent = "25";

counter.style.animation =
  "finalBounce 0.8s ease";

launchConfetti();

      clearInterval(interval);

      setTimeout(() => {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
        title.style.transition = "0.8s ease";
      }, 300);
    }
  }, 120);
}



function launchConfetti() {

  const container =
    document.getElementById("confettiBurst");

  container.innerHTML = "";

  const colors = [
    "#ff6fa8",
    "#ffd76c",
    "#7b8cff",
    "#ab8cff",
    "#ff9d66",
    "#ffffff"
  ];

  for (let i = 0; i < 50; i++) {

    const piece =
      document.createElement("span");

    piece.classList.add("confetti-piece");

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.background =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];

    piece.style.animationDelay =
      Math.random() * 0.5 + "s";

    piece.style.animationDuration =
      2 + Math.random() * 2 + "s";

    container.appendChild(piece);
  }

  setTimeout(() => {
    container.innerHTML = "";
  }, 4500);
}

