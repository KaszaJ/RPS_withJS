(() => {
	//simple JS file
	/* single line and block line comments in js */
	console.log("fired! or loaded... whatever");

	var choices = ["Rock", "Paper", "Scissors"];
	var computer;
	var player = document.querySelector("#weapon");
	var trigger = document.querySelector("#play");
	var status = document.querySelector(".winlose");

	function playGame() {
		//make the computer choose a random weapon
		computer = choices[Math.floor(Math.random() * choices.length)];
		var playerChoice = player.value;

		//check for a tie first
		if (computer.toLowerCase() === playerChoice.toLowerCase()) {
			//it's a tie
			status.textContent = "Tie! You live to see another day.";
		}

		else if (playerChoice.toLowerCase() === "rock") {
			if (computer.toLowerCase() === "scissors") {
				//win
				status.textContent = `Win! ${playerChoice} beats ${computer}.`;
			}
			else {
				//lose
				status.textContent = `Lose! ${computer} beats ${playerChoice}.`;
			}
		}

		else if (playerChoice.toLowerCase() === "paper") {
			if (computer.toLowerCase() === "rock") {
				//win
				status.textContent = `Win! ${playerChoice} beats ${computer}.`;
			}
			else {
				//lose
				status.textContent = `Lose! ${computer} beats ${playerChoice}.`;
			}
		}

		else if (playerChoice.toLowerCase() === "scissors") {
			if (computer.toLowerCase() === "paper") {
				//win
				status.textContent = `Win! ${playerChoice} beats ${computer}.`;
			}
			else {
				//lose
				status.textContent = `Lose! ${computer} beats ${playerChoice}.`;
			}
		}

		else {
			player.value="";
			alert("You didn't pick a valid weapon... try again");
		}
	}

	trigger.addEventListener("click", playGame);
})();