// const str = "hi there"
// console.log(str)
// const int = 7
// const float = 7.7
// const boolean = true;
// console.log(int, float, boolean)


// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// firstFloatingPoint = 3.33
// secondFloatingPoint = 4.4
// console.log(firstFloatingPoint + secondFloatingPoint)
// console.log(firstFloatingPoint - secondFloatingPoint)
// console.log(firstFloatingPoint * secondFloatingPoint)
// console.log(firstFloatingPoint / secondFloatingPoint)

// let x = 77
// console.log(typeof x)
// console.log(typeof x === 'number')
// console.log(typeof typeof x)

// console.log(2 ** 0.5)//power

// console.log(Math.sqrt(4))
// console.log(Math.random())//0inclusive 1 exclusive
// console.log(Math.PI)
// console.log(Math.sin(Math.PI))
// console.log(Math.floor(Math.random() * 10))

//primitive data types
// const int = 7
// const float = 4.4
// const boolean = true
// const string = 'hi there'

// console.log(int, float, boolean, string)

//int to binary string
// const int = 12
// const negative = -12
// console.log(int.toString(16))
// console.log(int.toString(2))
// console.log(~negative)

//binary string to int

// const str = "1111"
// console.log(parseInt(str, 2))
// const hexa = 'a'
// console.log(parseInt(hexa, 16))

// const float = 1.2e3
// console.log(float)



// boolean
// const boolean1 = true
// const boolean2 = false

// console.log(boolean1 + boolean2, boolean1 + boolean1)//1 2 true as 1 false as 0
// console.log(true / false)//infinity


//template string
// const str =
//     `
// there is only onle lord of the rings
// only one who can command its will.

// hi
// `
// console.log(str)


// string slicing
// let string = "000123456789"
// console.log(string[0], string[1])
// console.log(string.substr(1, 3), string.substr(0, 4))
// console.log(string.substr(0,))//for whole
// console.log(string.substr(, 4))//error
// console.log(string.substr(3, 5))//5 is the length
// console.log(string.substring(0, 4))//initial and final index

// console.log("hit " + "there")

// const string = "hi there"
// console.log(string.length)


//typecasting
// const float = Number("3.3")
// const int = parseInt(float)
// const f = parseFloat(int)
// const str = String(float)
// const bool = Boolean(float)
// console.log(float, int, f, str, bool)

// console.log("hi" === "hi")//true

//array
// const arr = []
// arr.push(2, 3, 4)
// arr.pop()
// arr.shift()
// arr.unshift(1, 2, 3, 3)
// arr.splice(1, 0, 7)
// arr.splice(0, 1)//like remove by index
// console.log(arr.slice(1, 4))
// console.log(arr.reverse())
// console.log(arr.sort())
// console.log(arr)
// console.log(arr.length)
// console.log(arr.indexOf(7))
// const obj = {
//     name: "rayon",
//     rollno: 7
// }
// console.log(obj.name, obj.rollno)
// console.log(obj["name"])
// obj.color = 7
// obj[7] = 77
// console.log(obj)

// console.log(obj.sell === undefined)
// console.log(true && false);
// console.log(3 & 4, 3 | 4, 3 ^ 4, ~3);
// console.log(10 << 2, 10 >> 2)


// ternary
// let n = 0 > 3 ? 4 : 5
// console.log(n);

//membership
// console.log(1 in [1, 2, 3])
// console.log('rayon' in { 'rayon': 7 })
// console.log('a' in "asrar")//error

// let firstName = "asrar"
// console.log(firstName.indexOf('sr'))
// console.log(firstName.length)
// console.log(firstName.slice(1, 3))
// console.log(firstName.split("r"))
// console.log(firstName.toLowerCase())



// l1 = [1, 2, 3]
// l2 = l1
// l2.push(3, 4, 5)
// console.log(l1, l2)//shows in both

// let l3 = Object.assign([], l1)
// l3.push(3, 4, 5)
// l2 = [...l3]
// console.log(l1, l3, l2)


//taking input
// const readline = require("readline").createInterface({//it is async
//     input: process.stdin,
//     output: process.stdout
// })
// let record = "";
// readline.question("what is your name? ", name => {
//     record = name
//     console.log(name)
//     readline.close();
// })
// console.log(record, "hi")



//formatted string
// let firstName = "asrar"
// let lastName = "bhat"
// console.log(`your first Name is ${firstName} and your last name is ${lastName}`)

//delete statement

// let sales = "hi there"
// delete sales//doesn't work only works for objects
// console.log(sales);
// let obj = { name: "rayon" }
// delete obj.name //works
// console.log(obj)

//character to number
// console.log(String.fromCharCode(97))
// console.log("a".charCodeAt(0))


// let string = "  hithere   ";
// // console.log(string.trim())
// console.log(string.replace('hi', 'b'))


//string to list
// let string = "there is only one lord of the rings"

// let list = string.split(' ')
// console.log(list)
// console.log(list.join(' '))
// console.log(string.toUpperCase(), string.toLowerCase())
// console.log(string.includes("lord"))
// console.log(string.startsWith("there"))


// l = [5, 6, 34, 4]
// l.reverse()
// console.log(l.sort((a, b) => a - b))//for ascending
// console.log(l.sort((a, b) => b - a))//for descending

// d = {
//     name: "rayon",
//     rollno: 17
// }
// console.log(Object.keys(d), Object.values(d))//gives list

//functions
// function square(x) {
//     return x * x;
// }
let print = console.log;
// print(square(3))
// let m = 7
// function add() {//works here
//     m += 1
// }
// add()
// print(m)

// l = [1, 2, 32]
// function append() {//works
//     l.push(3, 4)
// }
// append()
// print(l)

//equivalent of lambda expressions

// const squareIt = (x, y) => x * x + y * y;
// print(squareIt(3, 4))

// let l = [1, 2, 3]
// print(l.filter(num => num > 1))
// print(l.map(num => num + 1))
// print(l.reduce((num1, num2) => num1 - num2))


//simulating sleep
// setTimeout(() => { console.log("hey") }, 2000)
// print("hhhi")


//object destructuring
// let obj = {
//     named: "rayon",
//     usn: 22
// }
// let { named, usn } = obj;
// print(named, usn);

// let l = [1, 2, 3]
// for (let x of l) {
//     print(x);
// }
// for (let index in l) {
//     print(index)
// }
// let obj = {
//     named: 777
// }
// for (let key in obj) {
//     print(key)
// }

//default arguments
// function first(size, shape = "square") {
//     console.log(size, shape);
// }
// first(1, 2)
// first(1)


//typecasting
// let n = 3
// let m = String(n)
// let l = Number(m)
// print(l, m, n, Boolean(l))


//undefined is a type and value,usually the uninitialzed ones

//only object types can be assigned null,i.e if its null then it is an object

//if value not passed then that value passed as undefined

//concatenation
// print("asrar" + " " + "bhat")


//%works on float in both python and js

// print(1 == "1", 1 === "1")type coersioh

//falsy undefined,null,0,false,'',NaN

//everything else is truthy

//shortcircuiting

//every operator is either a function or a relation
// let n = "asrar"
// switch (n) {
//     case "asa": console.log("hi");
//         break;
//     case "asrar": print("asrar");
//         break;
//     default: print("uypp");
// }


//we also have do while;

//for in for list and objects for of only for lists

// if(truthy){}
// print(typeof "hi" === 'string')
//typeof returns string


// let obj1 = { name: "rayon" }
// let obj2 = Object.assign({ rollno: 23 }, obj1)
// let obj3 = { year: 1099, ...obj2 }
// print(obj1, obj2, obj3)

//to get time
// let d = new Date()
// print(d.getTime())


//indexOf returns -1 if not found or of first occurence

//lastIndexof

// let l = [1, 2, 3, 4]
// print(l.slice(1, 3))


//rest operator in functins
// function first(...args) {
//     print(args)
// }
// first(1, 2, 3)
// first("hi")


// can do first(a,b,...c)

























