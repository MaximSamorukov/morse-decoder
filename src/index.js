const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' '
};
const table = {
    '10': '.',
    '11': '-',
    '00': '',
    '**': '**'
}

function decode(expr) {
    // write your solution here
    let strArray = [];
    const recursiveFunc = (str) => {
        const str1 = str.slice(0, 10);
        strArray.push(str1);
        if (str.length >= 10) {
            const newString = str.slice(10);
            recursiveFunc(newString);
        }
    }
    recursiveFunc(expr);

    const recursiveFunc2 = (str, ar = []) => {
        const item = str.slice(0, 2);

        if (item !== '') {
            ar.push(item);
        }
        if (str.length > 2) {
            const newStr2 = str.slice(2);
            recursiveFunc2(newStr2, ar);
        }
    return ar
    }
    const finalArray = strArray.map((i) => {
        const element = recursiveFunc2(i);
        return element;
    });
    const letterArray = finalArray
    .map((i) => i.map((ii) => table[ii])
    .join(''))
    .map((i) => MORSE_TABLE[i]).join('');
    return letterArray;

}

module.exports = {
    decode
}