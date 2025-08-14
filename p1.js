function totalFine(fare) {
    // You have to write your code here
    let fine = fare + fare * (20 / 100) + 30;
    return fine;
}
let fine = totalFine(200);
console.log(fine);

