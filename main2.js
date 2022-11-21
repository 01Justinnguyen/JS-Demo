// Bài 1
let user = {
}
user.name = 'David';
user.surname = 'Xuan';
user.name = 'Cafedev';
delete user.name;
// console.log(user);

//Bài 2
//Cách họ làm 
function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }
    return true;
}
//Cách phúc làm
function isEmpty(obj) {
    return JSON.stringify(obj) === '{}';
}
let schedule = {
};
// console.log(isEmpty(schedule));
//Bài 3
let salaries = {
}
//Cách họ làm
for(let key in salaries) {
    sum+=salaries[key];
}
//Cách phúc làm
function getMoney(obj) {
    let s=0;
    for(let i=0;i<Object.values(obj).length;i++)
    {
        s += Object.values(obj)[i];
    }
    return s;
}
// console.log(getMoney(salaries));
// Bài 4
let menu = {
    width: 200,
    height: 300,
    title: "My menu cafedev",
};
function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
    // console.log(obj);
}
// multiplyNumeric(menu);
//Bài 5: Kết quả của việc truy cập ref của nó là gì? Tại sao lại như vậy?
function makeUser() {
    return {
      name: "David",
      ref: this,
    };
  }
  let user3 = makeUser();
//   console.log( user3.ref.name );
//   RESULT: Undefined bởi vì đặt tên object trùng với something của JS
//Bài 6
let computer = {
    read : function(num1, num2) {
        
    },
    sum : function() {

    },
    mull : function() {

    },
}
//Bài 7

function run(object) {
    let arr = [];
    for(let key in object){
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return arr;
}

console.log(run({ name: 'Nguyen Van A', age: 16 }));


