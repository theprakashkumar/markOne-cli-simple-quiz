const readlineSync=require("readline-sync");
const chalk=require("chalk");

// track the score of current user
let score=0;

// list of all the question and answer
const qna=
    [
        {q: "Where do I live? ", a: "Patna"},
        {q: "What is my favorite food? ", a: "Icecream"},
        {q: "Where do I work? ", a: "Nowhere"},
        {q: "Which programming language do I know? ", a: "JavaScript"},
        {q: "Tea or Coffee? ", a: "Coffee"}
    ]

// ask the user's name and welcome them
let name=readlineSync.question(chalk.cyanBright("What's your name? "));

console.log(`${chalk.greenBright("Hi")} ${chalk.magentaBright(name)}! \n${chalk.greenBright("Let's see how well do you know me!")} \n`);

// function to ask the question and do things based on the response
function play(q, a){
    let userAnswer=readlineSync.question(chalk.cyanBright(q), {
        mask: chalk.magenta()
      });

    if(a.toUpperCase()===userAnswer.toUpperCase()){
        score++;
        console.log(chalk.green(`Right :), Your Current Score is: ${score}`));
    } else{
        console.log(chalk.redBright("Wrong!"));
    }
    
    console.log("\n" + chalk.magenta.bold("\u0FBF \u0FBF \u0FBF \u0FBF \u0FBF \u0FBF \u0FBF \u0FBF \u0FBF \u0FBF \u0FBF \u0FBF \u0FBF \u0FBF \u0FBF \u0FBF \u0FBF" + "\n"));
}

// loop over the `qna` and run `play` for each of them
for(item of qna){
    play(item.q, item.a);
}
// pirnt the funal score
console.log(chalk.blueBright(`YAY! Your Final Score is ${score}`));