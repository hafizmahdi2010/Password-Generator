let pwd = document.querySelector("#pwd");
let genBtn = document.querySelector("#genBtn");
let copyBtn = document.querySelector("#copyBtn");

genBtn.addEventListener("click", function () {
  let pwd_length = parseInt(document.querySelector("#pwdLen").value);

  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()_+";
  let allChars = upperCase + lowerCase + numbers + symbols;
  let password = "";

  for (let i = 0; i < pwd_length; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  };
  
  document.querySelector("#pwd").textContent = password;
});

copyBtn.addEventListener("click", function () {
  // Copy to clipboard
  let copyText = document.createElement("input");
  copyText.value = pwd.textContent;
  document.body.appendChild(copyText);
  copyText.select();
  document.execCommand("copy");
  document.body.removeChild(copyText);
  
  // Notify the user
  copyBtn.classList.replace("ri-file-copy-fill","ri-check-fill");
  setTimeout(() => {
  copyBtn.classList.replace("ri-check-fill","ri-file-copy-fill");
  }, 1000);
});