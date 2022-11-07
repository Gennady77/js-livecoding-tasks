function isValid(str) {
  str.replace(/\s+/g, '');

  const stack = [];

  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);

  console.log(str);
}

const str1 = '()';
const str2 = '({} ([]))';
const str3 = '}}';

isValid(str1);
