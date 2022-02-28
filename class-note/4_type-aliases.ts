interface Person {
  name: string;
  age: number;
}

// type Person  = {
//   name: string;
//   age: number;
// }

/* type은 확장이 불가능하나, interface는 extends로 확장이 가능하므로 가능하면 interface를 쓰도록 하자 */

var seho: Person = {
  name: '세호',
  age: 30,
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}