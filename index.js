const btns = document.querySelectorAll('[data-btn]');
let container = document.getElementById('container');
let Player = parseInt(document.getElementById("player").textContent);
let Computer = parseInt(document.getElementById("computer").textContent);
let winner;

function getComputerChoice () {
    let tools = [ "rock", "paper", "scissors" ];
    let random = Math.floor(Math.random() * tools.length);
    return tools[ random ];
}
btns.forEach(btn => {
    btn.addEventListener('click', (player, computer) => {
        player = btn.innerHTML;
        computer = getComputerChoice();
        if (playRound(player, computer) == "Player wins") {
            document.getElementById('player').textContent = ++Player;
        } else if (playRound(player, computer) == "Computer wins") {
            document.getElementById('computer').textContent = ++Computer;
        }
        if (Player == 5) {
            Player = Computer = 0;
            winner = document.createElement('p');
            winner.innerText = "Player wins";
            container.appendChild(winner);
        } else if (Computer == 5) {
            Player = Computer = 0;
            winner = document.createElement('p');
            winner.innerText = "Computer wins";
            container.appendChild(winner);
        }
    });
});

function playRound (playerSelection, computerSelection) {
    let player = 0;
    let computer = 0;
    if (playerSelection == "rock" && computerSelection == "rock" ||
        playerSelection == "paper" && computerSelection == "paper" ||
        playerSelection == "scissors" && computerSelection == "scissors") {
        return "Tie";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") ++player;
    else if (playerSelection == "paper" && computerSelection == "rock") ++player;
    else if (playerSelection == "scissors" && computerSelection == "paper") ++player;
    else ++computer;
    if (player > computer) return "Player wins";
    else return "Computer wins";

}
