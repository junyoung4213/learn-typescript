// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

function logMessage(value: string | number) { // 하나의 타입 이상을 쓸 수 있게 하는 Union Type
  console.log(value);
}

logMessage('hello');
logMessage(100);