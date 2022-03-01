// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText('test'); // 문자열 test
// logText(10); // 숫자 10

// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }

// logText<string>('하이');


/* 단순히 맞는 타입을 받기 위해 중복으로 함수를 선언하게 되서 비효율적이게 된다. */
function logText(text: string) {
  console.log(text);
  // text.split('').reverse().join('');
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

logText('a');
logText(10);
const num = logNumber(10);
logText(true);