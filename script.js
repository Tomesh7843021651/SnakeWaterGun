function playGame(playerChoice) {
    const choices = ['snake', 'water', 'gun'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'snake' && computerChoice === 'water') ||
        (playerChoice === 'water' && computerChoice === 'gun') ||
        (playerChoice === 'gun' && computerChoice === 'snake')
    ) {
        result = 'You win!';
    } else {
        result = 'Computer wins!';
    }

    document.getElementById('result').innerText = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
}
