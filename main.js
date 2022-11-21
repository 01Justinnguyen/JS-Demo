/*Các hàm built-in trong JS
1. Alert
2. Console
3. Confirm
4. Prompt
5. Set timeout 
6. Set interval
*/

// confirm('Xác nhận đủ tuổi');
// prompt('Xác nhận đủ tuổi');


// setTimeout(function(){
//   alert('Anh yêu em nhiều lắm');
// }, 3000);

// setInterval(function(){
//   alert('Anh yêu em nhiều lắm');
// }, 3000);


/*------------------------------------------------------------------FUNCTION() IN JS----------------------------------------------------------------------------------*/

// function showDialog() {
//   setInterval(function() {
//     alert('Alo123');
//   }, 3000);
// }

// showDialog();

//Truyền tham số
// function writeLog(message) {
//   console.log(message);
// }

// writeLog('Hello world'); //truyền đối số

// function showMess() {
//   function showMess2(message) {
//     console.log(message);
//   }  
//   showMess2(123);
// }
// showMess();

/*-----------------------------------------------------------------------------------LÀM VIỆC VỚI CHUỖI TRONG JS---------------------------------------------------------------------------*/
//  let fullName = "Thanh Phuc Phuc Phuc Phuc";
//  //Độ dài chuỗi
// //  console.log(fullName.length);
// //tìm index của ký tự trong chuỗi - tham số thứ 2 quy định vị trí tìm kiếm
// console.log(fullName.indexOf('P', 7));
// //trả về index cuối cùng của ký tự cần tìm
// console.log(fullName.lastIndexOf('P'));
// //search(): tìm kiếm theo biểu thức chính quy, và ko có tham số thứ 2
// console.log(fullName.search('P'));
// //cut string: Gồm 2 tham số: vị trí bắt đầu và vị trí kết thúc
// console.log(fullName.slice(-16));
// //replace: gồm 2 tham số, chỉ thay thế 1 ký tự Phuc 
// console.log(fullName.replace('Phuc', 'Ngoc'));
// //replace bằng biểu thức chính quy sẽ thay thể tất cả các ký tự Phuc thành Ngoc
// console.log(fullName.replace(/Phuc/g, 'Ngoc'));
// //trim: xóa ký tự trắng trong chuỗi
// console.log(fullName.trim());
// //Split: Cắt một chuỗi thành 1 array - Cần 1 điểm chung để đưa nó vào array
// var languages = 'js, php, ruby, java';
// console.log(languages.split(', '));
// console.log(languages.split(' '));
// //charAt() Lấy ký tự từ vị trí
// console.log(fullName.charAt(1));
// console.log(fullName[1]);

// let numberObject = 1234.56789;
// // console.log(parseFloat(numberObject.toFixed(1)));
// console.log(typeof Number.isFinite(numberObject));
// let result = 20 / 'abc';
//Hàm check số không hợp lệ
// console.log(isNaN(result));

/*-----------------------------------------------------------------------------LÀM VIỆC VỚI MẢNG TRONG JS--------------------------------------------------------------------------------------*/
var languages = [
    'JS',
    'PHP',
    'JAVA',
    'RUBY',
];

var languages2 = [
    'Dart',
    'Python',
];
// console.log(languages.length);
// console.log(languages[1]);
// 1. To string(): chuyển đổi kiểu dữ liệu sang string
// console.log('1.' + languages.toString());
// 2. Join() : chuyển 1 mảng thành 1 chuỗi
// console.log(languages.join(' - '));
//3. Pop() : xóa phần tử cuối mảng và trả lại phần tử đã xóa - Nếu xóa mảng rổng thì trả về undefined
// console.log(languages.pop());
// console.log(languages);
// 4. Push() : thêm 1 hoặc nhiều phần tử vào cuối mảng - trả về độ dài mới sau khi thêm
// console.log(languages.push('Dart', 'Hover'));
// console.log(languages);
// 5. Shift() : xóa đi một 1 phần tử đầu mảng và trả về phần tử đã xóa - Nếu xóa mảng rổng thì trả về undefined
// console.log('Phần tử đã xóa: ' + languages.shift());
// console.log(languages);
// 6. Unshift() : thêm một hoặc nhiều phần tử vào đầu mảng - trả về độ dài mới sau khi thêm
// console.log(languages.unshift('Dart', 'Hover'));
// console.log(languages);
// 7. Splicing() : xóa cắt hoặc chèn phần tử vào mảng
// languages.splice(1, 1); //Cắt phần tử 
// languages.splice(1, 0, 'Dart'); //chèn phần tử Dart vào mảng tại index 1
// languages.splice(1, 0, 'Dart', 'Python'); //chèn phần tử Dart vào mảng tại index 1
// console.log(languages);
// 8. Concat : gộp mảng 
// console.log(languages.concat(languages2));
// 9. Slicing: cắt một vài hoặc toàn bộ element
// console.log(languages.slice(1,2));
// console.log(languages.slice(0)); //copy mảng

/*------------------------------------------------------------------------------------LÀM VIỆC VỚI OBJECT TRONG JS-----------------------------------------------------------------------------------*/
// Function --> Phương thức / Method
// Others --> Thuộc tính / property
let emailKey = 'email';
let myInfo = {
    name: 'Thanh Phuc',
    age: '18',
    gender: 'male',
    address: 'Quang Binh, VN',
    [emailKey]: 'phuc01112002@gmail.com',
    getName: function() {
        return this.name; //this ở đây là myInfo
    }
};
//Cách lấy giá trị không có trong object
// let myKey = 'address';
// console.log(myInfo[myKey]);
// myInfo.email = 'phuc01112002@gmail.com';
// myInfo.address = 'Đà nẵng, VN';
// myInfo['my_cr'] = 'Hong Ngoc';
//Xóa key-value trong object
// delete myInfo.address;
// console.log(myInfo.getName());
// console.log(myInfo.my_cr);

/*----------------Object Constructor--------------*/
// Quy ước phải đặt tên object constructor là chữ hoa
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let author = new User('Phuc', 'Nguyen', 'Avatar');
let user = new User('Vu', 'Nguyen', 'Avatar');

//Thêm thuộc tính cho các object mình định nghĩa
author.title = 'Share Information';
author['address'] = 'QB, VN';
user.comment = 'Good Lessons';
// console.log(author.getName());
// console.log(author.constructor);
// console.log(user.getName());

// Thêm thuộc tính cho object constructor
User.prototype.className = '12a2';
User.prototype.getAvatar = function() {
    return this.avatar;
}
// console.log(user.className);
// console.log(user.getAvatar());

/*-------------------------Date trong js--------------------*/
let date = new Date();
// console.log(typeof date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getDate());

/*------------------------Math object trong js----------------------*/
// console.log(Math.PI); // số PI
//round() : hàm làm tròn số thập phân thành số nguyên
// console.log(Math.round(1.49));
//abs() : hàm giá trị tuyệt đối
// console.log(Math.abs(-100));
//ceil() : hàm chỉ làm tròn trên
// console.log(Math.ceil(4.0000000001));
//floor : hàm chỉ làm tròn dưới
// console.log(Math.floor(5.99999999999999));
// random(): Trả về dãy số thập phân nhỏ hơn 1, thường dùng để dùng trong các bài toán ngẫu nhiên
// console.log(Math.floor(Math.random() * 100 ));
//Hàm max - min: trả về giá trị nhỏ nhất và lớn nhất
// console.log(Math.min(-100, 2, 3 , -10100));

let arr = ['Anh', 'Văn', 'Toán'];

function getRandomItem(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}
// console.log(getRandomItem(arr));

/*-----Toán tử 3 ngôi-------*/

let course = {
    name: 'JS',
    coin: 250,
}

// console.log((course.coin > 0) ? `${course.coin} coin` : 'Miễn phí');

/*------------------------------------------------------------------------------------VÒNG LẶP TRONG JS-----------------------------------------------------------------------------*/
function getTotal(arr) {
    let s=0, len;
    for(let i=0; len = arr.length, i<len; i++)
        if(Number.isFinite(arr[i])==true){
            s+=arr[i];
        }
        return s;
}
// Expected results
// console.log(getTotal([4, 5, 3, 5])); // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17

let arr2 = ['Anh', 'Văn', 'Toán', 'Sinh', 'Hóa'];
let len;
for(let i=0;len=arr2.length, i<len;i++)
{
    // console.log(arr2[i] + ' ');
}

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

// console.log(orders[0].price);

function getTotal(arr) {
    let len, s=0;
    for(let i=0;len=arr.length,i<len;i++)
    {
        s+=arr[i].price;
    }
    // console.log(s);
}

getTotal(orders);
// Expected results:
 // Output: 8700000
// console.log(getTotal(orders));

let user2 = {
    ten: 'tung',
    tuoi: 20,
    banBe:['vy', 'tung', 'tuan'],
    diaChi:{
    tỉnh: 'HCM',
    quan:'Q1',
    },
};
//Câu a: in ra array bạn bè
// console.log(user2.banBe);
// console.log(user2.banBe[user2.banBe.length - 1]);
// console.log(user2.diaChi);
// console.log(`${user2.diaChi.tỉnh} , ${user2.diaChi.quan}`);
// user2.diaChi.street = 'Nguyễn Tuân';
// user2.banBe.splice(0, 0, 'Thai');
// user2.banBe[user2.banBe.length] = 'Phuc'; //Cách này tối ưu nhất
// console.log(user2);

//Kiểm tra số nguyên dương
function isSoDuong(number) {
    return (Number.isFinite(number) && number >0 );
}
// console.log(isSoDuong(-1));

/*---------Vòng lặp For-in-----------*/
// Thường được sử dụng để lấy ra các key của đối tượng
let myInfo2 = {
    name: 'Phuc',
    age: 13,
    address: 'QB, VN', 
}
for(let key in myInfo2){
    // console.log(key);
    // console.log(myInfo2[key]);
}
let myString = 'Javascript';
for(let key in myString) {
    // console.log(key);
    // console.log(myString[key]);
}

/*---------Vòng lặp For-of-----------*/
// Sử dụng vòng lặp này trong những trường hợp muốn lấy ra những phần tử của 1 mảng hoặc lấy ra từng chữ cái của 1 chuỗi, với vòng lặp này thì không áp dụng được vói object nếu muốn sử dụng được thì phải biến đổi 1 chút
let languages3 = [
    'JS',
    'PHP',
    'Java',
];
for(let value of languages3){
    // console.log(value);
}
let myInfo3 = {
    name: 'Phuc',
    age: 18,
};
for(let value of Object.keys(myInfo3))
{
    // console.log(myInfo3[value]);
}
// console.log(Object.keys(myInfo3));
for(let i=100;i>0;i-=5){
    // console.log(i);
}

/*-------------------------------------------Lầm việc với Array with Function---------------------------*/
// Tất cả các phương thức này đều có 3 tham số: Giá trị, index, originArray: là array truyền vào kiểu như array cho trước để xử lý
let courses = [
    {
        id: 1,
        name: 'JS',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 350
    },
    {
        id: 3,
        name: 'Python',
        coin: 0
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 150
    },
    {
        id: 5,
        name: 'Dart',
        coin: 400
    }
];

// forEach(): dùng để duyệt qua từng phần tử của mảng
courses.forEach(function(course, index) {
    // console.log(index, course);
}); //Cách truyền 1 hàm qua tham số thì họ gọi là callback

//every(): dùng để kiểm tra các phần tử trong mảng phải thỏa mãn 1 điều kiện nào đó - trả về boolean
let isFree = courses.every(function(course, index){
    return course.coin === 0;
});
// console.log(isFree);

//some(): ngược lại với every, kiểm tra chỉ cần 1 ông thỏa mãn điều kiện - trả về boolean
let isFree2 = courses.some(function(course, index){
    return course.coin === 0;
});
// console.log(isFree2);

//find(): tìm kiếm kết quả trong phần tử nếu có thì trả về phần tử đó  - nếu không thì trả về undefined - luôn trả về cho ta 1 đối tượng đầu tiên khác với filter
let NAME = courses.find(function(course, index){
    return course.name === 'Ruby';
});
// console.log(NAME);

//filter(): tìm kiếm kết quả trong phần tử nếu có thì trả về phần tử đó - luôn trả về cho ta tất cả phần tử thỏa mãn điều kiện
let NAMEs = courses.filter(function(course, index){
    return course.name === 'Ruby';
});
// console.log(NAMEs);

//map() : sử dụng để chỉnh sửa thay đổi các element của 1 array
function courseHandler(course) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `coin ${course.coin}`,
    };
}
function getAllName(course) {
    return course.name;
}
let newCourses = courses.map(getAllName);
// console.log(newCourses);

//reduce() : sử dụng khi muốn nhận về một kết quả duy nhất sau khi tính toán và xử lý trên các phần tử trong array
// reduce có 2 tham số truyền vào function và initialValue: Biển lưu trữ
// let totalCoin = courses.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue.coin;
// },0);
// console.log(totalCoin);
let totalCoin = courses.reduce((a, b) => 
    a + b.coin,0
);
// console.log(totalCoin);

//Bài tập 1
const sports = [
    {name: 'Bóng rổ',like: 6},
    {name: 'Bơi lội',like: 5},
    {name: 'Bóng đá',like: 10},
]
function getMostFavoriteSport(arr) {
    let likes = arr.filter(function(course){
        return course.like > 5;
    });
    return likes;
}
// Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// Bài tập 2
var sportss = [
    { name: 'Bơi lội', gold: 11},
    { name: 'Boxing', gold: 3},
    { name: 'Đạp xe', gold: 4},
    { name: 'Đấu kiếm', gold: 5},
]
function getTotalGold(arr) {
    let total = arr.reduce(function(a, b){
        return a + b.gold;
    },0);
    return total;
}
// Expected results:
// console.log(getTotalGold(sportss)) // Output: 23
let number = [100, 200, 220, 240, 480]; //Nếu bạn mong muốn nhận được kiểu dữ liệu là gì, thì bạn đặt biến initial cùng kiểu dữ liệu đó
let totalCoins = number.reduce(function(total, number) {
    return total + number;
});
// console.log(totalCoins);

//BÀI TẬP
//Flat - "Làm phẳng mảng từ Depth array - ""Mảng sâu"
let depthArray = [1,2 , [3,4], 5, 6, [7,8,9]];
let flat = depthArray.reduce(function(output, value) {
    return output.concat(value);
}, []);
// console.log(flat);
//Lấy ra các khóa học đưa vào 1 mảng mới
let topics = [{topic: "Front-end",courses: [{id: 1,title: "HTML, CSS"},{id: 2,title: "Javascript"}]},{topic: "Back-end",courses: [{id: 1,title: "Java"},{id: 2,title: "PHP"}]}];
let flatCourses = topics.reduce(function(newCourse, value) {
    return newCourse.concat(value.courses);
}, []);
let htmls = flatCourses.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2>
            <p>${course.id}</p>
        </div>
    `;
});
// console.log(htmls.join(''));


function calculateRating(obj) {
    let dem=0;
    let directs = obj.filter(function(people){
        return people.Director === "Christopher Nolan";
    });
    // console.log(directs);
    let average = directs.reduce(function(avg, value){
        return avg + Number(value.imdbRating);
    }, 0);
    return average/directs.length;
}
//   console.log(calculateRating(watchList)); // Output: 8.675
 
function arrToObj(arr) {
    let results = arr.reduce(function(rs, value) {
        return value;
    }, {});
    return results;
}
 
// Expected results:
var array = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
// console.log(arrToObj(array)); // { name: 'Sơn Đặng', age: 18 }

//Chuỗi, hàm, mảng, object các methods quan trọng

/*Làm việc với object*/
Array.prototype.reduce2 = function(callback, result) {
    let i=0;
    if(arguments.length < 2) {
        i = 1;
        result = this[0]
    }
    for(;i<this.length;i++) {
        result = callback(result, this[i], i, this)
    }
    return result;
}
const numbers = [1,2,3,4,5];

const Result = numbers.reduce2((total, number) => {
    return total + number
}, 10)

console.log(Result);