//运算相关
const a = 2;
/* if(a==2) alert('hello');*/
console.log(a);
console.log(Boolean(5) + 2);
console.log(true + 3);

//doucument.write()
document.write('my age is' + 18)

//函数
const sum = function(a, b) {
	return a + b;
};
console.log(sum(100, 2));

//创建对象
function createPerson(name, age) {
	const person = new Object();
	person.name = name;
	person.age = age;
	person.eat = function(food){
		alert('我吃'+food);
	};
	return person;
}
const yj = createPerson('yujian', 20);
console.log(yj);
yj.eat('葡萄');

/*************************/
function Person(name, age) {
	this.name = name;
	this.age = age;
}
const yjj = new Person('yjj', 21);
console.log(yjj);
