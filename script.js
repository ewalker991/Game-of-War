console.log("Script is linked!");

const suit = ["Hearts", "Spades", "Diamonds", "Clubs"];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "King", "Queen", "Ace"];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class Cards {
    constructor () {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.deck = [];
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                let card = {Rank: rank[j], Suit: suit[i], Value: value[j]}
                this.deck.push(card);
            }
        }
        this.shuffle = () => {
        let j, x, i;
        for (i = this.deck.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = x;
            }
        }
        let player1 = [];
        let player2 = [];
        this.divide = () => {
            player1 = this.deck.splice(0, 26);
            for (let i = 0; i < this.deck.length; i++) {
                player2.push(this.deck[i]);
                this.deck.splice(i, 1);
                i--;
            }
            console.log(player1);
            console.log(player2);
            return player1, player2;
        }
        console.log("Making deck... Shuffling deck...");
        this.shuffle();
        console.log("Dividing deck for two...");
        this.divide();
        return this.deck;
    }
}

//making Game class to handle the war mechanic?
// class Game {
//     constructor () {

//     }
// }



newGame = () => {
    let deck = new Deck();
}




//COMMANDS TO PLAY GAME
console.log("Let's play a game of War! Type 'newGame();' to begin!");

// newGame();






//METHODS I TYPED UP BEFORE MAKING CLASSES
// start = () => {
//     deck = [];
//     for (let i = 0; i < suit.length; i++) {
//         for (let j = 0; j < rank.length; j++) {
//             let card = {Rank: rank[j], Suit: suit[i], Value: value[j]}
//             deck.push(card);
//         }
//     }
//     console.log("Making deck...")
//     return console.log(deck);
// }

// shuffle = () => {
//     let j, x, i;
//     for (i = deck.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         x = deck[i];
//         deck[i] = deck[j];
//         deck[j] = x;
//     }
//     console.log("Shuffling deck...")
//     return console.log(deck);
// }