// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText('test'); // 문자열 test
// logText(10); // 숫자 10

function logText<T>(text: T):T {
  console.log(text);
  return text;
}

logText<string>('하이');
