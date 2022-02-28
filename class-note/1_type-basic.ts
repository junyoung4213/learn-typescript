// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1,2,3];
let items: number[] = [1,2,3]; // 위와 동일
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk']

// TS 튜플

let address: [string, number] = ['gangnam', 1]; // 배열의 각각 인덱스에 타입을 정의

// TS 객체
let obj: object = {};
// let person: object = { // 객체를 단순하게 정의할 때
//   name: 'capt',
//   age: 100
// };
let person: { name: string, age: number} = { // 객체를 구체적으로 정의할 때
  name: 'thor',
  age: 1000
}

// TS 진위값
let show: boolean = false;