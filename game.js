import {defs, tiny} from './tiny-graphics/common.js';

const {
    Vector, Vector3, vec, vec3, vec4, color, hex_color, Shader, Matrix, Mat4, Light, Shape, Material, Scene,
} = tiny;


/**
 * Game object that manages all game logic and events.
 */
export class Game {
    constructor() {
        // super();
        // keeping track of which player's turn it is, player1 goes first
        this.isPlayer1 = true;

        // keeping track of current round
        this.curr_round = 1;

        // starting number of chips
        this.numChips1 = 4; // we can decide how many chips to start with
        this.numChips2 = 4;


    }

    // USAGE: use this function twice in each round
    //          first usage triggers player1's turn
    //          second usage triggers player2's turn and immediately plays animation once player2's turn is over
    play() {
        if (this.isPlayer1) {
            // player1's turn
        } else {
            // player2's turn
            // game animation
        }

        this.isPlayer1 = !this.isPlayer1;
    }

    // USAGE: this function should be used once after the total number of chips knocked out on both sides is known when the current round ends
    //          it allows for us to consider to possibility of a tie
    knockout(p1, p2) {
        this.numChips1 -= p1;
        this.numChips2 -= p2;

        if (this.numChips1 === 0 && this.numChips2 === 0) {
            return "draw";   // can decide on the output later
        } else if (this.numChips1 === 0) {
            return "Player 2 wins, game over!";
        } else if (this.numChips2 === 0) {
            return "Player 1 wins, game over!";
        } else {
            return "next round";
        }
    }

    //  GAME LOGIC, play turns:
    //      player1 chooses the direction and strength for each available chip1
    //      player2 chooses the direction and strength for each available chip2
    //      game animation
    //      update on remaining chips for each side

    //  GAME LOGIC, play until:
    //      no chips for one player ==> other player wins
    //      no chips for both players ==> draw
}
