function isValid(str) {
  const s = str.replace(/\s+/g, '');

  const stack = [];

  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}

const str1 = '()';
const str2 = '({} ([]))';
const str3 = '}}';

console.log(isValid(str2)); //true
