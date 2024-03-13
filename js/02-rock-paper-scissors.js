
// const userChoice = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// userChoice.question('Choose rock, paper, or scissors by typing: r, p, or s. ', userChoice => {

//   userChoice.close();
// });
function main(){

let userChoice = prompt("Choose  rock, paper or scissors by typing: r, p, or s.");

let computerChoice = Math.floor(Math.random() * 3);

    function getComputerChoice(){
        if (computerChoice === 0){
            return 'r'
        }
        else if (computerChoice === 1) {
            return 'p'
        } else if (computerChoice === 2) {
        return 's'  
        }
    }

    function compareChoices() {
        let computerChoiceStr = getComputerChoice();
        
        if (userChoice === computerChoiceStr) {
            alert('It\'s a tie!');

        }  else if (userChoice === 'r'){
            if (computerChoiceStr === 's'){
                alert('You win! Rock crushes Scissors.');
            }else if  (computerChoiceStr === 'p'){
                alert('You lose! Paper covers Rock.');
            }
        }  else if (userChoice ===  'p'){
            if (computerChoiceStr === 'r'){
                alert('You win! Paper covers Rock.');
            }else if  (computerChoiceStr === 's'){
                alert('You lose! Scissors cut Paper.');
            }
        }  else if (userChoice ===  's'){
            if (computerChoiceStr === 'p'){
                alert('You win! Scissors cut Paper.');
            }else if  (computerChoiceStr === 'r'){
                alert('You lose! Rock crushes Scissors.');
            }
        }
    }
compareChoices();
}

main();
