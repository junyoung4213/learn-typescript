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

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}
// function askSomeone(someone: Developer | Person) {
//   someone.name;
//   someone.skill;  // 위에서 유니온 타입으로 Developer, Person을 정의했지만 skill과 age는 불러올 수 없다.
//   someone.age;  // 유니온 타입으로 정의했다 하더라도, 인터페이스간에 중복된 값만 불러올 수 있는데 이는 보장된 속성이 아닌 것을 불러오려고 하면 에러 발생 위험이 있기 때문이다.
// }

function askSomeone(someone: Developer & Person) { // 인터섹션은 Developer와 Person의 속성을 전부 포함하기 때문에 모두 접근이 가능하다
  someone.name;
  someone.skill;  
  someone.age;
}


// var seho: string | number | boolean;
// var capt: string & number & boolean;