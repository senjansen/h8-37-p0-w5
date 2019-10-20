// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 5 - Multiplication (Recursion)

// Create function to multiply all digits in a number using recursion
function kaliTerusRekursif(angka) {
    let number = angka.toString();

    if (number.length > 1) {
        let result = 1;
        for (let i = 0; i < number.length; i++) {
            result *= parseInt(number[i]);
        } 
        return kaliTerusRekursif(result);
    } else {
        return angka;
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6