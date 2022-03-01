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