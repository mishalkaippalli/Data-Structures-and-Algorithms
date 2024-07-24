//function to replace each alphabet in the given string with another alphabet occurring at the n-th position from each of them.

function shiftAlphabetByN(str, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetLength = alphabet.length;
    
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (char.match(/[a-z]/i)) {
            let isUpperCase = char === char.toUpperCase();
            char = char.toLowerCase();

            let currentIndex = alphabet.indexOf(char);
            let newIndex = (currentIndex + n) % alphabetLength;

            if (newIndex < 0) newIndex = alphabetLength + newIndex;
            
            let newChar = alphabet[newIndex];
            result += isUpperCase ? newChar.toUpperCase() : newChar;
        } else {
            result += char;
        }
    }

    return result;
}

// Example usage:
console.log(shiftAlphabetByN('Hello, World!', 3)); 

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString('Hello, World!')); // !dlroW ,olleH

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('Hello, World!')); // false

