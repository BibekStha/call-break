window.onload = initAll;

function initAll() {
	//Creating a deck of cards
	var cardNum = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var cardType = ["S", "H", "C", "D"];

	var deckOfCards = [];
	for (let t of cardType){
		for (let n of cardNum){
			deckOfCards.push({
				name: (n + t),
				value: n == "A" ? 14 : n == "K" ? 13 : n == "Q" ? 12 : n == "J" ? 11 : parseInt(n),
				type: t,
				image: "<img src= 'images/cards/" + n + t + ".png'>"
			})
		}
	}



	//Players
	var players = [];
	players.push({name: "Hulk", color: "Green", cards: []});
	players.push({name: "Iron Man", color: "Red", cards: []});
	players.push({name: "Thor", color: "Silver", cards: []});
	players.push({name: "Bibek", color: "Blue", cards: []})

	//Player's chair in table
	var chairs = [];
	var ids = ["hulk", "iron-man", "thor", "player"];
	for (let id of ids) {
		chairs.push(document.getElementById(id));
	}
	// console.log(chairs);

	//connecting players with their chairs
	var table = [];
	for (i = 0; i < 4; i++){
		table.push([chairs[i], players[i]]);
	}
	console.log(table);





	//start the game
	//btn.onclick = newGame();
	newGame();



	//
	// All the functions go below here
	//


	//This function is called evertime you start a new game
	function newGame() {
		cards = deckOfCards;
		cards = shuffle(cards);
		distribute(cards);
		displayCards();
		// console.log(cards[0]);
	}


	//This function shuffles the card deck properly
	function shuffle(input) {
		for (j = 0; j < 10; j++){
			for (var i = input.length-1; i >=0; i--) {
	     
		        var randomIndex = Math.floor(Math.random()*(i+1)); 
		        var itemAtIndex = input[randomIndex]; 
		         
		        input[randomIndex] = input[i]; 
		        input[i] = itemAtIndex;
		    }
		}
		return input;
	}

	//This function distributes cards among the players
	function distribute(input){
		for (i = 0; i < 13; i++){
			for (let player of players){
				// console.log(input.length);
				player.cards.push(input.pop());
			}
		}
	}


	//This function displays cards of all players in table
	function displayCards() {
		for (let t of table){
			// console.log(table);
			for (let c of t[1].cards){
				t[0].innerHTML += c.image;
			}
		}
	}
}