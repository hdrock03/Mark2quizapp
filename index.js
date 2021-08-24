// Package imported
var readlineSync = require('readline-sync');
const chalk = require('chalk');

const log = console.log;

// Top Scorers: 
const topScores = [
  {name: "sid", score: 9},
  {name: "mac", score: 7},
  {name: "jon", score: 5},
]

// print top Scorers name
function showTopScorers(topScores) {
  log(chalk.cyan("Leaderboard:"));

  for (let i=0; i<topScores.length;i++) {
    log(chalk.green(`${topScores[i].name} :${topScores[i].score} `));
  }
}

// Check if new record
function checkNewRecord(globalScore, topScores) {
  if (globalScore > topScores[0].score) {
    log(chalk.yellow("Awesome, you just broke the record! Share the screenshot to get listed in leaderboard."))
  }
};

// Wait for user's response.
const userName = readlineSync.question(log(chalk.yellow('Hey there, may I have your name? Enter name below: ')));
log(chalk.cyan(`Hello, ${userName}!`))
log(chalk.cyan("------------------------------------------------------"))

console.log('How Well Do You Know "The breaking bad"?.')
console.log('');

const questionSet = [{
  question: "How many episodes of Breaking Bad were aired?", 
  options: ['15', '56', '62', '93'],
  answer: '62'
},

{
  question: "Which year was Breaking Bad first aired",
   options: ['2006', '2008', '2009', '2010'],
  answer:'2008',
},
{
  question: "What is Gus Fring’s nationality?",
  options: ['Indian', 'American', 'Australian', 'Chilean'],
  answer:'Chilean',
},
{
  question: "What is Professor's age?",
  options: ['23', '33', '43', '53'],
  answer:'53',
},
{
  question: "What was Professor's Daughter's name?",
  options: ['Natlaya', 'Aniee', 'Jeren', 'Holly'],
  answer:'Holly',
},

{
  question: "The show 'The Breaking Bad' takes place in which city?",
  options: ['Mexico', 'London', 'California', 'Delhi'],
  answer:'Mexico',
},


]

let globalScore = 0;

function quizApp() {
  let currentQuestion;
  let currentAnswer;

  for (let i=0; i < questionSet.length; i++) {
    currentQuestion = questionSet[i].question;
    log(chalk.green(currentQuestion));
    

    let optionArr = questionSet[i].options;
    let currentAnswer = readlineSync.keyInSelect(optionArr, 'Select Option?',
  {cancel: false});

    console.log(optionArr[currentAnswer])
    // if (optionArr[currentAnswer] === 'CANCEL') {
    //   console.log('skipping question...');
    //   return;
    // } else 
    if (questionSet[i].answer.toLowerCase() === optionArr[currentAnswer].toLowerCase()) {  
      log(chalk.cyan("Correct Answer!"));
      globalScore++;
      log(chalk.yellow(`current score: ${globalScore}`))
      console.log("------------------------------------------------------")
    } else {
      log(chalk.red("Wrong Answer!!!"));
      log(chalk.yellow(`current score: ${globalScore}`))
      console.log("------------------------------------------------------")
      continue;

    }
  }

  log(chalk.yellow((`your final score : ${globalScore}/${questionSet.length}`)))

  console.log("------------------------------------------------------");
  checkNewRecord(globalScore, topScores);
  console.log("------------------------------------------------------");
  showTopScorers(topScores)
}



quizApp();