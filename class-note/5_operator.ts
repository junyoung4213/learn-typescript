// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var seho: string | number | boolean;
function logMessage(value: string | number) { // 하나의 타입 이상을 쓸 수 있게 하는 Union Type
  if(typeof value === 'number'){ // number 타입일 경우, value의 타입을 number로 인식하여 인텔리센스 작동.
    value.toLocaleString();
  }
  if(typeof value === 'string'){ // string 타입일 경우, value의 타입을 string으로 인식하여 인텔리센스 작동.
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);