export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

function caesarCipher(string, shift) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  string = string.toLowerCase();

  let encryptedString = "";

  for (let i = 0; i < string.length; i++) {
    let cipherIndex = alphabet.indexOf(`${string[i]}`) + shift;

    if (cipherIndex > 25) {
      cipherIndex -= 26;
    }

    if (!alphabet.includes(string[i])) {
      encryptedString += string[i];
    } else {
      encryptedString += alphabet[cipherIndex];
    }
  }

  return encryptedString;
}

function analyzeArray(array) {
  if (!isValidArray(array)) {
    return "not an array";
  }

  let average =
    array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0) / array.length;
  let min = Math.min(...array);
  let max = Math.max(...array);
  let length = array.length;

  return {
    average,
    min,
    max,
    length,
  };
}
