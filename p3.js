function bestTeam(player1, player2) {
    // You have to write your code here
    if (typeof player1 === "object" && typeof player2 === "object") {

        let pone = player1.foul + player1.cardY + player1.cardR;
        let ptwo = player2.foul + player2.cardY + player2.cardR;
        if (pone > ptwo) {
            return player2.name;
        }
        else if (ptwo > pone) {
            return player1.name;
        }
        else if (ptwo == pone) {
            return "Tie";
        }
    }
    else {
        return "Invalid";
    }
}

let t1 = { name: "Germany", foul: 12, cardY: 0, cardR: 0 };
let t2 = 'Sweden';
console.log(bestTeam(t1, t2));
