//1d ararys
const p = console.log;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// p(arr);
// p(arr.length)
// p(arr[0], arr[3], arr[arr.length - 1])
//p[arr[444]]//no error maybe undefined
// arr.push(3, 44);
// p(arr);
// p(arr.pop())
// p(arr)

// arr1 = [...arr]//copying
// arr1.push(3, 44, 44)
// p(arr, arr1)

// arr.splice(3, 1);
// p(arr)
// arr.shift()
// p(arr)
// arr.unshift(-1)
// p(arr)
// arr.splice(3, 0, 99)
// p(arr)

// let i = arr.indexOf(2);
// if (i != -1) arr.splice(i, 1);

// p(arr)

// for (item of arr) {
//     p(item)
// }

// for (index in arr) {
//     p(arr[index])
// }

// for (let i = 0; i < arr.length; i++) {
//     p(arr[i])
// }

// arr.push(3, 2, 99, 5)
// arr.sort()//inplace and returns as well
// p(arr)

// p(arr.sort().reverse())//returns as well

// p(arr)
// p(arr.slice(2, 7))
// p(arr.reverse())
// p(arr.reduce((x, y) => x + y))//for sum
// p(arr.reduce(((x, y) => {
//     if (x > y) return x;
//     return y;
// })))//as max similarly for min

// p(Math.max(...arr))
// p(Math.min(...arr))



//2d array

// let arr = [
//     [1, 2, 3, 4, 5],
//     [4, 5, 6, 7, 5],
//     [7, 8, 9, 8, 9]
// ]
// p(arr)
// p(arr.length, arr[0].length)
// p(arr[1])
// p(arr[0][2])
// p(arr.slice(0, 2))
// arr[1].sort().reverse()
// p(arr)
// fancy_index = []
// for (element of arr.slice(1, 3)) {
//     fancy_index.push(element.slice(1, 4))
// }
// p(fancy_index)

// for (element of arr) {
//     for (ele of element) {
//         p(ele)
//     }
// }

// let arr1 = []
// for (element of arr) {
//     arr1 = [...arr1, ...element]
// }
// p(Math.max(...arr1))
// p(Math.min(...arr1))


//strings
// let string = '0123456789'
// p(string)
// p(string.length)//not a function but a property
// p(string[0])//indexing is allowed
// p(string.slice(1, 5))
// p(Number(string))
// string += "hi  there"
// p(string)
// p(string.split("")) //if no argument then whole as one element of array
// p(string.split(" "))//if multiple spaces then one empty element there its like looking for spaces first then seeing what is between them and nothing is acceptable
// p(string.split("").join("")) //join by default uses comma
// p(string.split("").reverse().join(""))//to reverse
// p(String.fromCharCode(97))
// p(string.charCodeAt(7))
// p(string.charAt(3))
// string = "  hi there  "
// p(string.trim())

// p(string.indexOf("there"))
// p(string.replace("hi", "hey"))


//functions

// function add(arg1, arg2, arg3 = 33) {
//     return arg1 + arg2 + arg3;
// }
// p(add(1, 2, 3))
// p(add(1, 2))

//maps
// map = {}
// p(map)
// map['year'] = 33
// map[1] = 2
// p(map)
// p(map["year"])
// p(map[1])
// delete map["year"]
// p(map)

// map.get = function (key, def) {
//     if (this[key] === undefined) return def;
//     return this[key];
// }
// map["name"] = 44;
// p(map.get(1, -1))
// map[1] = map.get(1, 0) + 1;
// p(map)
// p(Object.entries(map))//list of list
// p(Object.keys(map))
// p(Object.values(map))
// p("name" in map)
// p(1 in [1, 2, 3])



//tree
tree = {
    0: [0, [1, 2]],
    1: [1, [3, 4]],
    2: [2, [5, 6]],
    3: [3, []],
    4: [4, []],
    5: [5, []],
    6: [6, []]
}
// function inorder(root, tree) {
//     let children = tree[root][1]
//     if (children.length != 0 && children[0] != -1) {
//         inorder(children[0], tree)
//     }
//     p(tree[root][0])
//     if (children.length != 0 && children[1] != -1) {
//         inorder(children[1], tree)
//     }
// }

// inorder(0, tree)

function preorder(root, tree) {
    let children = tree[root][1]
    p(tree[root][0])
    if (children.length != 0 && children[0] != -1) {
        preorder(children[0], tree)
    }
    if (children.length != 0 && children[1] != -1) {
        preorder(children[1], tree)
    }
}
preorder(0, tree)