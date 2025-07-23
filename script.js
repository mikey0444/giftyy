const levels = [
  {
    question: "Where did we first meet?",
    options: ["College", "Cafe", "Tuition classes", "Instagram"],
    correct: "Tuition classes",
    reward: "Aww my sweetie, you remember!💗"
  },
  {
    question: "Unscramble this: 'ISHEIRATU'",
    options: ["AIISHTERU", "AISHITERU", "IITEAUSHR", "RUSITIAHE"],
    correct: "AISHITERU",
    reward: "Sugoii ne!!You got the magic word! 💌"
  },
  {
    question: "What's my favorite comfort food?",
    options: ["Pizza", "Khichdi chapati", "pasta", "dal batti"],
    correct: "dal batti",
    reward: "Yesss, you got the tough one right!😘😘"
  },
  {
    question: "Final Level: Click to see your surprise!",
    options: ["Unlock"],
    correct: "Unlock",
    reward: "<img src='surprise.png' width='200'><p>I love you 😘</p>"
  }
];

let currentLevel = 0;
const levelDiv = document.getElementById("level");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("next");

function showLevel() {
  const level = levels[currentLevel];
  levelDiv.innerHTML = `<h2>${level.question}</h2>`;
  optionsDiv.innerHTML = "";

  level.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function checkAnswer(selected) {
  const level = levels[currentLevel];
  if (selected === level.correct) {
    optionsDiv.innerHTML = `<p>${level.reward}</p>`;
    nextBtn.style.display = "inline-block";
    // Optionally play a cute sound
  } else {
    alert("Oops! Try again 😅");
  }
}

nextBtn.onclick = () => {
  currentLevel++;
  if (currentLevel < levels.length) {
    showLevel();
  } else {
    levelDiv.innerHTML = "<h2>You're the BEST! 💖</h2>";
    optionsDiv.innerHTML = "<p>Thanks for playing! 🎉</p>";
    nextBtn.style.display = "none";
  }
};

showLevel();