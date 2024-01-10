const widthChecker = document.querySelector(".password-checker");
const password = document.querySelector("#password-input");
const eye = document.querySelector(".fa-eye");

password.addEventListener("input", checkPassword);

function checkPassword() {
  const value = password.value;
  let strength = 0;

  if (value.length < 1) {
    widthChecker.style.width = "none";
    widthChecker.style.background = "none";
    return;
  } else if (value.length <= 4) {
    strength = 1;
  } else if (value.length <= 8) {
    strength = 2;
  } else if (value.length <= 12) {
    strength = 3;
  } else {
    strength = 4;
  }

  const rareCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  if (rareCharacters.test(value)) {
    strength += 1;
  }

  switch (strength) {
    case 1:
      widthChecker.style.width = "25%";
      widthChecker.style.background = "red";
      break;
    case 2:
      widthChecker.style.width = "50%";
      widthChecker.style.background = "yellow";
      break;
    case 3:
      widthChecker.style.width = "75%";
      widthChecker.style.background = "orange";
      break;
    case 4:
      widthChecker.style.width = "100%";
      widthChecker.style.background = "green";
      break;
  }
}
