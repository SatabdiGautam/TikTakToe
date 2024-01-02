// function countAndSortVowels(inputString) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelCounts = {};

  // Initialize vowelCounts with zeros
  for (const vowel of vowels) {
    vowelCounts[vowel] = 0;
  }

  // Count the occurrences of vowels
  for (const char of inputString.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCounts[char]++;
    }
  }

  // Filter out vowels with count > 0, sort alphabetically by vowel
  const sortedVowels = Object.keys(vowelCounts)
    .filter(vowel => vowelCounts[vowel] > 0)
    .sort();

  // Construct the output string with count before vowel
  let result = '';
  for (const vowel of sortedVowels) {
    const count = vowelCounts[vowel];
    result += `${count}${vowel}`;
  }

  // If there are no vowels, return 'none'
  if (result === '') {
    return 'none';
  }

  return result;
}

// Example usage:
const inputString1 = 'Hello, World!';
console.log(countAndSortVowels(inputString1)); // Output: '1e1o2'

const inputString2 = 'Rhythm';
console.log(countAndSortVowels(inputString2)); // Output: 'none'