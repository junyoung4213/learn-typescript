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
// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

/* 유니온 타입을 이용한 선언 방식을 사용하면 string과 number타입을 모두 받을 수 있지만, 
  split과 같은 문자열 분리 함수를 사용할 때 에러가 발생한다(number타입의 경우 split이 안되기 때문) */
// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText('a');
// logText(10);
// const num = logNumber(10);
// logText(true);


/* 제네릭 타입으로 선언시, 타입을 각각 정의할 필요가 없이 호출시에 선언할때마다 정의내릴 수 있기 때문에
  함수 정의시 여러 타입에 대한 대응을 할 수 있고, 리턴값으로 호출시에 선언된 타입에 맞는 함수를 사용할 수 있다 */
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);


// logText('a');
// logText(10);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false};

interface Dropdown<T> {
  value: T;
  selected: boolean;  
}
const obj: Dropdown<number> = { value: 10, selected: false};

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function(text) {
//     console.log(text);
//   });
//   return text;
// }
// logTextLength<string>(['hi','abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
/* interface로 length를 가진 객체만 받도록 정의*/
interface LengthType {
  length: number;
}
/* extends를 이용해 interface를 상속받아서 length를 가진 객체를 포함한 타입만 받게 선언한다*/
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength('abc'); // 문자열은 length를 가지고 있으므로 사용 가능
logTextLength(10); // 숫자형은 length를 가지고 있지 않으므로 사용 불가능