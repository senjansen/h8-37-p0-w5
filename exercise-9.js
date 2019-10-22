// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 9 - Find The Perpretator (Regex)

// Create function to find the frequency that 'abc' appears in a string using Regex
function cariPelaku(str) {
    str = str.match(/abc/g).length;
    return str;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2