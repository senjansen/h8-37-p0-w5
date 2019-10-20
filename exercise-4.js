// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 4 - Total Digit (Recursion)

// Create function to add total digit in a number using recursion
function totalDigitRekursif(angka) {
    let number = angka.toString();
    
    if (number.length > 1) {
        let firstNumber = parseInt(number[0]);
        let temp = '';

        for (let i = 1; i < number.length; i++) {
            temp += number[i];
        }

        let nextNumber = parseInt(temp);
        
        return firstNumber + totalDigitRekursif(nextNumber);
    } else {
        return angka;
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5