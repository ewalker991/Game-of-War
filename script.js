console.log("Script is linked!");

const suit = ["Hearts", "Spades", "Diamonds", "Clubs"];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "King", "Queen", "Ace"];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let player1 = [];
let player2 = [];

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
                // console.log(`${card.Rank} of ${card.Suit}(${card.Value})`)
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
        console.log("Making deck...");
        console.log("Shuffling deck..."); 
        this.shuffle();
        console.log("Dividing deck for two...");
        this.divide();
        console.log("Ready to play! Type 'play();' to get started!");
        return this.deck;
    }
}

//making Game class to handle the game mechanics
class Game {
    constructor () {
        
        let roundNum = 1;
        let warDeck = [];

        this.warDraw = () => {
            console.log(player1[0], player2[0]);
            console.log(player1[1], player2[1]);
            console.log(player1[2], player2[2]);
            warDeck.push(player1[0], player1[1], player1[2], player2[0], player2[1], player2[2]);
            // console.log(`${warDeck.Rank} ${warDeck.Suit}`);
            return warDeck, roundNum;
        }

        this.draw = () => {
            let a = player1[0];
            let b = player2[0];
            let roundNum = 1;
            if (a.Value > b.Value) {
                console.log("Round #" + roundNum++);
                console.log(`Player 1: ${a.Rank} of ${a.Suit}, Player 2: ${b.Rank} of ${b.Suit}. Player 1 won Round ${roundNum}!`);
                // console.log("Player 1 has won the round!");
                player2.shift();
                player1.push(b);
                player1.shift();
                player1.push(a);
                // console.log(player1, player2);
                console.log("Player 1: " + player1.length + ", Player 2: " + player2.length);
                // roundNum + 1;
                console.log("Type 'playWar.draw();' to continue!");
                return player1, player2, roundNum;
            } else if (b.Value > a.Value) {
                console.log("Round #" + roundNum);
                console.log(`Player 1: ${a.Rank} of ${a.Suit}, Player 2: ${b.Rank} of ${b.Suit}. Player 2 won Round ${roundNum}!`);
                // console.log("Player 2 has won the round!");
                player1.shift();
                player2.push(a);
                player2.shift();
                player2.push(b);
                // console.log(player1, player2);
                console.log("Player 1: " + player1.length + ", Player 2: " + player2.length);
                // roundNum + 1;
                console.log("Type 'playWar.draw();' to continue!");
                return player1, player2, roundNum;
            } else if (player1[0].Rank === player2[0].Rank) {
                console.log("Round #" + roundNum);
                console.log(`Player 1: ${a.Rank} of ${a.Suit}, Player 2: ${b.Rank} of ${b.Suit}.`);
                console.log("WAR!!");

                this.warDraw();

                if (player1[2].Value > player2[2].Value) {
                    console.log(`Player 1: ${a.Rank} of ${a.Suit}, Player 2: ${b.Rank} of ${b.Suit}. Player 1 won Round ${roundNum}!`);
                    warDeck.splice(0, 6);
                    player1.push();
                    return console.log("Player 1: " + player1.length + ", Player 2: " + player2.length);
                } else if (player2[2].Value > player1[2].Value)
                    console.log(`Player 1: ${a.Rank} of ${a.Suit}, Player 2: ${b.Rank} of ${b.Suit}. Player 1 won Round ${roundNum}!`);
                    warDeck.splice(0, 6);
                    player2.push();
                    return console.log("Player 1: " + player1.length + ", Player 2: " + player2.length);
                    

            } else if (player1.length === 0) {
                console.log("Player 2 won the Game of War at Round " + roundNum + "! Yay!");
            } else if (player2.length === 0) {
                console.log("Player 1 won the Game of War at Round " + roundNUm + "! Yay!");
            }
        }
        this.draw();
    }
}



newGame = () => {
    deck = new Deck();
}

play = () => {
    playWar = new Game();
}



//COMMANDS TO PLAY GAME
console.log("Let's play a game of War! Type 'newGame();' to begin!");

// newGame();

// console.log("Ready to play! Type 'play();'!")

// play();
// play();






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