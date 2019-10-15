// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 1 - Most Frequent Largest Numbers

// Function to sort
function sorting(arrNumber) {
    let n = arrNumber.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arrNumber[j] > arrNumber[j + 1]) {
                temp = arrNumber[j];
                arrNumber[j] = arrNumber[j + 1];
                arrNumber[j + 1] = temp;
            }
        }
    }
    return arrNumber;
}

// Function to display the largest number and its frequency
function getTotal(arrNumber) {
    let biggestNum = arrNumber[arrNumber.length - 1];
    let count = 0;

    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] === biggestNum) {
            count++;
        }
    }
    if (biggestNum) {
        return 'angka paling besar adalah ' + biggestNum + ' dan jumlah kemunculan sebanyak ' + count + ' kali';
    } else {
        return '';
    }
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''