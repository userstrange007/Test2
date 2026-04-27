function checkPassword() {
  let password = document.getElementById("passwordInput").value;
  let error = document.getElementById("errorMsg");

  let correctPassword = "0608";

  if (password === correctPassword) {
    // Hide welcome screen
    document.getElementById("welcomeScreen").style.display = "none";

    // Show main screen
    document.getElementById("mainScreen").style.display = "block";

    error.textContent = "";
  } else {
    error.textContent = "Oops! Wrong password 😅 Try again!";
  }
}