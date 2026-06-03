function checkPassword() {

  let password = document.getElementById("passwordInput").value;
  let error = document.getElementById("errorMsg");

  if (password.trim() === "") {

    error.textContent = "Please enter a date ✨";
    return;

  }

  error.textContent = "";

  const welcomeScreen = document.getElementById("welcomeScreen");
  const mainPage = document.getElementById("mainPage");

  welcomeScreen.classList.add("fade-out");

  setTimeout(() => {

    welcomeScreen.style.display = "none";

    document.body.classList.add("main-active");

    mainPage.classList.remove("hidden");
    mainPage.classList.add("fade-in");

    window.scrollTo(0, 0);

  }, 700);
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
  const body = document.getElementById("bodySection");
  const name = document.getElementById("birthdayName");
  const blessing = document.getElementById("blessingSection");
  const blower = document.getElementById("blowerAnimation");
  const memory = document.getElementById("memoryTimeline");
  const wishes = document.getElementById("wishesSection");

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
    body.classList.remove("hidden-body");
    body.classList.add("show-body");
  }, 1400);
}


