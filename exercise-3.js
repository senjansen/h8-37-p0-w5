// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 3 - All You Can Eat (Recursion)

// Create function to reduce 15 minutes for every dishes that was eaten
function makanTerusRekursif(waktu) {
    if (waktu > 0) {
        return makanTerusRekursif(waktu - 15) + 1;
    } else {
        return 0;
    }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0