let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners - Lee",
    answer_4: "Justin Bieber",
    "right-answer": 3,
  },
  {
    question: "Was bewirkt das HTML-Tag a?",
    answer_1: "Link",
    answer_2: "Button",
    answer_3: "Input-Feld",
    answer_4: "Textarea",
    "right-answer": 1,
  },
  {
    question: "Mit welchem HTML-Tag kann man den Text fett machen?",
    answer_1: "br",
    answer_2: "b",
    answer_3: "li",
    answer_4: "bigger",
    "right-answer": 2,
  },
  {
    question: "Mit welchem Befehl kann man auf eine bestimmte ID zugreifen?",
    answer_1: "doument.getElementByClassList",
    answer_2: "doument.getElementByStyle",
    answer_3: "doument.getOneElement",
    answer_4: "doument.getElementById",
    "right-answer": 4,
  },
  {
    question: "Wie kann man mit CSS die Schrift fett anzeigen?",
    answer_1: "font-size: bold",
    answer_2: "font-weight: bold",
    answer_3: "font-color: bold",
    answer_4: "background-color: bold",
    "right-answer": 2,
  },
  {
    question: "Wie kann man einen Code auf github hochladen?",
    answer_1: "git push",
    answer_2: "git pull",
    answer_3: "git add",
    answer_4: "igit push",
    "right-answer": 1,
  },
  {
    question: "Wie erstellt man ein neues git-Repository",
    answer_1: "git init",
    answer_2: "git clone",
    answer_3: "git add",
    answer_4: "igit clone",
    "right-answer": 1,
  },
];

let rightQuestions = 0;

function init() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  document.getElementById('tropy').classList.add('display-none');
  rightQuestions = 0;
  content.innerHTML = initHTML();
}

function initHTML() {
  return `<nav class="bg-blue padding-8 column">
    <a href="index.html">
        <img src="./img/logo.png" alt="Logo" width="80" height="80" class="d-inline-block align-text-top">
    </a>
    <div class="column margin-top">
        <div class="space-between fixed-width margin-bottom-8">
            <div class="vertical-line display-none"></div>
            <span class="subject">HTML</span>
        </div>
        <div class="space-between fixed-width margin-bottom-8">
            <div class="vertical-line display-none"></div>
            <span class="subject">HTML</span>
        </div>
        <div class="space-between fixed-width margin-bottom-8">
            <div class="vertical-line display-none"></div>
            <span class="subject">HTML</span>
        </div>
        <div class="space-between fixed-width margin-bottom-8">
            <div class="vertical-line display-none"></div>
            <span class="subject">JS</span>
        </div>
        <div class="space-between fixed-width margin-bottom-8">
            <div class="vertical-line display-none"></div>
            <span class="subject">CSS</span>
        </div>
        <div class="space-between fixed-width margin-bottom-8">
            <div class="vertical-line display-none"></div>
            <span class="subject">Git</span>
        </div>
        <div class="space-between fixed-width margin-bottom-8">
            <div class="vertical-line display-none"></div>
            <span class="subject">Git</span>
        </div>
    </div>
</nav>
<div class="quiz-questions padding-8 background-image-brain">
    <div class="center column">
        <h2 class="font-family-ptsans">Welcome to <br> The Awesome HTML Quiz</h2>
        <span class="font-family-ptsans">Ready for the Challenge?</span>
        <div onclick="startQuiz(0)" class="start-button">
            <div>START NOW</div>
            <div> > </div>
        </div>
    </div>
        
</div>`;
}

function startQuiz(i) {
  let content = document.getElementById("content");
  content.innerHTML = "";
  content.innerHTML = quizHTML(i);
  document.getElementById(`line${i}`).classList.remove("display-none");
  document.getElementById(`subject${i}`).classList.add("color-white");
}

function quizHTML(i) {
  return `<nav class="bg-blue padding-8 column">
  <a href="index.html">
      <img src="./img/logo.png" alt="Logo" width="80" height="80" class="d-inline-block align-text-top">
  </a>
  <div class="column margin-top">
      <div class="space-between fixed-width margin-bottom-8">
          <div id="line0" class="vertical-line display-none"></div>
          <span class="subject" id="subject0">HTML</span>
      </div>
      <div class="space-between fixed-width margin-bottom-8">
          <div id="line1" class="vertical-line display-none"></div>
          <span class="subject" id="subject1">HTML</span>
      </div>
      <div class="space-between fixed-width margin-bottom-8">
          <div id="line2" class="vertical-line display-none"></div>
          <span class="subject" id="subject2">HTML</span>
      </div>
      <div class="space-between fixed-width margin-bottom-8">
          <div id="line3" class="vertical-line display-none"></div>
          <span class="subject" id="subject3">JS</span>
      </div>
      <div class="space-between fixed-width margin-bottom-8">
          <div id="line4" class="vertical-line display-none"></div>
          <span class="subject" id="subject4">CSS</span>
      </div>
      <div class="space-between fixed-width margin-bottom-8">
          <div id="line5" class="vertical-line display-none"></div>
          <span class="subject" id="subject5">Git</span>
      </div>
      <div class="space-between fixed-width margin-bottom-8">
          <div id="line6" class="vertical-line display-none"></div>
          <span class="subject" id="subject6">Git</span>
      </div>
  </div>
</nav>
        <div class="quiz-questions padding-8">
            <div class="questions">
                <h3>${questions[i]["question"]}</h3>
            </div>
            <div>
            <div class="answers" id="answer1" onclick="answer(${i}, 1)">
                <div id="letter1" class="letter">A</div>
                <span>${questions[i]["answer_1"]}</span>
            </div>
            <div class="answers" id="answer2" onclick="answer(${i}, 2)">
                <div id="letter2" class="letter">B</div>
                <span>${questions[i]["answer_2"]}</span>
            </div>
            <div class="answers" id="answer3" onclick="answer(${i}, 3)">
                <div id="letter3" class="letter">C</div>
                <span>${questions[i]["answer_3"]}</span>
            </div>
            <div class="answers" id="answer4" onclick="answer(${i}, 4)">
                <div id="letter4" class="letter">D</div>
                <span>${questions[i]["answer_4"]}</span>
            </div>
            </div>
        </div>
        <div class="arrows">
            <img id="previous-button" onclick="previousQuestion(${i})" class="icon-previous" src="./img/8666655_arrow_left_circle_icon.png">
            <img id="next-button" class="icon" onclick="nextQuestion(${i})" src="./img/8666670_arrow_right_circle_icon.png">
        </div>`;
}

function nextQuestion(i) {
    i++;
if(i < questions.length){
  startQuiz(i);
}
else{
    endScreen();
}
}

function previousQuestion(i) {
  if (i == 0) {
    startQuiz(0);
  } else {
    i--;
    startQuiz(i);
  }
}

function answer(i, x) {
  if (x == questions[i]["right-answer"]) {
    document.getElementById(`letter${x}`).classList.add("rightLetter");
    document.getElementById(`answer${x}`).classList.add("rightAnswer");
    rightQuestions++;
  } else {
    document.getElementById(`letter${x}`).classList.add("falseLetter");
    document.getElementById(`answer${x}`).classList.add("falseAnswer");
    rightQuestions--;
    let y = questions[i]["right-answer"];
    answer(i, y);
  }
  document.getElementById("next-button").classList.add("clickable");
}

function endScreen() {
    document.getElementById('content').innerHTML = '';
  document.getElementById('content').innerHTML = endScreenHTML();
  document.getElementById('tropy').classList.remove('display-none');
  document.getElementById('score').innerHTML = rightQuestions;
  document.getElementById('lengthOfQuestions').innerHTML = questions.length;
}

function endScreenHTML() {
  return `<nav class="bg-blue padding-8 column">
    <a href="index.html">
        <img src="./img/logo.png" alt="Logo" width="80" height="80" class="d-inline-block align-text-top">
    </a>
    <div class="column margin-top">
        <div class="space-between fixed-width margin-bottom-8">
            <div class="vertical-line display-none"></div>
            <span class="subject">HTML</span>
        </div>
        <div class="space-between fixed-width margin-bottom-8">
            <div class="vertical-line display-none"></div>
            <span class="subject">HTML</span>
        </div>
        <div class="space-between fixed-width margin-bottom-8">
            <div class="vertical-line display-none"></div>
            <span class="subject">HTML</span>
        </div>
        <div class="space-between fixed-width margin-bottom-8">
            <div class="vertical-line display-none"></div>
            <span class="subject">JS</span>
        </div>
        <div class="space-between fixed-width margin-bottom-8">
            <div class="vertical-line display-none"></div>
            <span class="subject">CSS</span>
        </div>
        <div class="space-between fixed-width margin-bottom-8">
            <div class="vertical-line display-none"></div>
            <span class="subject">Git</span>
        </div>
        <div class="space-between fixed-width margin-bottom-8">
            <div class="vertical-line display-none"></div>
            <span class="subject">Git</span>
        </div>
    </div>
</nav>
<div class="end-screen padding-8">
    <div class="column-endscreen">
        <img class="end-brain" src="./img/brain result.png">
        <span><b>Complete <br> HTML Quiz</b></span>
        <div class="fixed-width-200 space-between">
            <span class="end-score">Your Score</span>
            <p><b id="score"></b><b>/</b><b id="lengthOfQuestions"></b></p>
        </div>
        <button onclick="init()" class="replay-button">REPLAY</button>
    </div>
        
</div>`;
}
