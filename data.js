const firebaseConfig = {
    apiKey: "AIzaSyC7kTs7_9a9nm0J7zXyhscnLe6W4C2ITmg",
    authDomain: "kvizapp-school.firebaseapp.com",
    databaseURL: "https://kvizapp-school-default-rtdb.firebaseio.com",
    projectId: "kvizapp-school",
    storageBucket: "kvizapp-school.appspot.com",
    messagingSenderId: "671960737010",
    appId: "1:671960737010:web:a66fd2850a69cce3b21c6b"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var kvizAppDB = firebase.database().ref('kvizapp-school');

document.getElementById("kviz").addEventListener("submit", submitAnswers);
document.getElementById("submit-name").addEventListener("click", showAnswerInput);

let correctAnswers = 0;
let wrongAnswers = 0;

let currentImageIndex = 0;
let shuffledImages;

const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submit-answers");

function showAnswerInput() {
    var name = getElementVal("name");
    
    if (name) {
        document.getElementById("answer-input").style.display = "block";
        document.getElementById("answer-button-div").style.display = "block";
        document.getElementById("name-input").style.display = "none";
        document.getElementById("name-button-div").style.display = "none";
        document.querySelector(".alert").style.display = 'block';
        
        var messageSentDiv = document.querySelector(".alert");
        messageSentDiv.textContent = name;
    }
};

function submitAnswers(e){
    e.preventDefault();

    var answer = getElementVal("answer");
    console.log(answer);

    saveResults(answer);

    document.getElementById("kviz").reset();
};

const saveResults = (answer) => {
    var newKvizSubmit = kvizAppDB.push();
    
    newKvizSubmit.set({
        result : answer,
    })
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};