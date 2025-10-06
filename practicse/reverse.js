const sentence = "Playwright automation is fun";
const words = sentence.split(" ");
console.log(words);
const reversedWords =words.map(word=>word.split("").reverse().join(""));
console.log(reversedWords);
const result = reversedWords.join(" ");
console.log(result);

