let words = ["apple", "java", "python", 'ruby', 'scala', 'matlab', "kotlin", 'go', 'swift',
    'computer', 'program', 'execution', 'data', 'info', 'euro', 'knight', 'money', 'solution',
    'solve' , 'exe' , 'like' , 'dislike' , 'comment' , 'love' , 'ap' , 'etc' , 'luck','best'];
let chooseWord = () => {
    let word = words[Math.floor(Math.random() * words.length)];
    return word;
}

let ch_word = chooseWord();
export default ch_word;