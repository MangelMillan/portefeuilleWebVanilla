// Darkmode
let darkMode = false;

function changeDarkMode() {
  if (darkMode) {
    darkMode = false;
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--background-color", "#efe7e5");
    document.getElementById("dark-light-mode").innerHTML = "Dark mode";
  } else {
    darkMode = true;
    document.documentElement.style.setProperty("--text-color", "#efe7e5");
    document.documentElement.style.setProperty("--background-color", "#191919");
    document.getElementById("dark-light-mode").innerHTML = "Light mode";
  }
}

// Bienvenue
const textsToChoose = ["Bonjour", "Bonsoir", "Salut"];

const randomIndex = Math.floor(Math.random() * textsToChoose.length);

const selectedText = textsToChoose[randomIndex];

const typingInterval = 100;

const typingElement = document.getElementById("typing-text");
const cursorElement = document.getElementById("cursor");

function typeText(text, index) {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    setTimeout(() => {
      typeText(text, index + 1);
    }, typingInterval);
  } else {
    setTimeout(() => {
      cursorElement.innerHTML = ",";
      cursorElement.style.animation = "none";
    }, 1000);
  }
}

// Start the typing effect
typeText(selectedText, 0);
