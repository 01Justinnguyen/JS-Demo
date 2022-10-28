// let myString = `Hoc JS tại JS JS F8! JS`;

// console.log(myString.length);

// console.log(myString.indexOf('JS'));
// console.log(myString.lastIndexOf('JS'));

// console.log(myString.search('JS'));

// console.log(myString.slice(-3));


// console.log(myString.replace(/JS/g, 'Javascript'));


// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

// function strToArray(str) {
//     console.log(str.split(', '));
// }

// // Expected results
// console.log(strToArray(coursesStr)) 

// function number(value) {
//     return isNumber(value);
// }

// console.log(number(999))


//Cach tao mang 
// var languages = [
//     'JS',
//     'PHP',
//     'Ruby',
//     'C#',
//     null,
//     undefined,
//     function(){},
//     {},
// ];

// var languages2 = new Array(
//     'JS',
//     'PHP',
//     'Ruby',
//     'C#',
//     null,
//     undefined,
//     function(){},
//     {},
// );


//ktr array
// console.log(Array.isArray(languages));
// console.log(Array.isArray({}));

// console.log(languages2);
// console.log(languages);
// console.log(`Độ dài của mảng là: `+ languages.length);
//Láy chỉ mục
// console.log(languages[0]);


/*----------------------------ARRAY METHODS----------------------------*/
// let arr = [
//     'JS',
//     'PHP',
//     'Ruby',
//     'C#',
//     'Python',
// ];

// let arr2 = [
//     'Dart',
//     'C++',
// ];

// console.log(arr.toString()); // chuyển arr thành chuỗi
// console.log(arr.join(' - ')); gần giống với toString()
// console.log(arr.pop()); //Xóa phần tử cuối mảng và trả về phần tử đã xóa;
// console.log(arr);
//console.log(arr.push('123')); //thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mảng mới
//console.log(arr);
//console.log(arr.shift()); xóa phần tử đầu mảng và trả về phần tử đã xóa
// console.log(arr.unshift('123455')); Thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài của mảng mới

// arr.splice(1, 2); xóa vị trí bất kỳ trong array
//arr.splice(2, 0, 'Dart'); //chèn vị trí bất kỳ trong mảng ; Tham số 1: Vị trí con troe; tham số 2: số lượng element muốn xóa; Tham số 3: những element muốn truyền vào 
//console.log(arr);

// console.log(arr.concat(arr2)); //hợp nhất 2 mảng lại thành 1

// console.log(arr.slice(1,2)); //dùng để cắt toàn bộ hoặc 1 vài element;
// console.log(arr.slice(0)); // dùng để copy mảng

// console.log(arr.slice(-2, -1));

//console.log(`phan tu cuoi cùng trong mang la: ` + arr[arr.length-1]); //lay phan tu cuoi cung

/*--------------------------------------------------------------------------OBJECT------------------------------------------------------------------*/
// let emailKey = 'email';

// let myInfo = {
//     name: 'Nguyen Thanh Phuc',
//     age: 18,
//     gender: 'Man',
//     address: "Quảng Bình, Việt Nam",
//     [emailKey]: 'phuc01112002@gmail.com',
// };
// //Lấy value trong object
// console.log(myInfo.name);
// console.log(myInfo.age);
// console.log(myInfo.address);

// console.log(myInfo['address']); //cách 2 lấy value

// myInfo.years = "2022";
// delete myInfo.years; // xóa key value trong object
// console.log(myInfo)

//---------------------------------Object Contructor----------------------------------------- 

// function People(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// /*---------------------------------Object prototype-------------------------------------*/
// People.prototype.className = 'F8';
// People.prototype.getClassName = function() {
//     return this.className;
// }
// /*---------------------------------End Object prototype-------------------------------------*/

// var author = new people('Nguyen', 'Thanh', 'Avatar');
// var user = new people('Phi', 'Hoang', 'Avatar');

// author.title = "Yêu thật nhiều";
// user.comment = "Bài viết rất hay";

// console.log(author.getName());
// console.log(user.getName());

/*-------------------------------------------------------------Date---------------------------------------------*/

// let date = new Date();

// let year = date.getFullYear();
// console.log(year);
// let month = date.getMonth() + 1;
// console.log(month);
// let day = date.getDate();
// console.log(day);

// let now = `${day}/${month}/${year}`;
// console.log(now);

// function getNextYear() {
//     return new Date().getFullYear() + 1;
// }

// console.log(getNextYear());

/*-----------------------------------------------------------------------Math Object------------------------------------------------------------------*/
// let random = Math.floor(Math.random() * 100); //random từ 1 đến 99

// if(random < 5){
//     console.log('Cường hóa thành công');
// }else{
//     console.log('Cường hóa thất bại');
// }

// let arr = [1,2,3,4,5];
// //Math.random() lấy từ 0 đến 0.9. Nếu b nhân cho 10 hoặc số khác, thì trường hợp độ dài mảng dài hơn số đó hàm sẽ trả về undefined. Vậy nhân cho array.length dù mảng có dài bao nhiêu thì vẫn lấy được.
// function getRandomItem(arr){
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// console.log(getRandomItem(arr));

/*---------------------------------------------------------------If-Else--------------------------------------------------------*/
// function run(a) {
//     if(a%3===0){
//         return 1;
//     }else if(a%5===0){
//         return 2;
//     }else if(a%15===0){
//         return 3;
//     }else{
//         return 0;
//     }
// }

// // Kỳ vọng
// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3
/*---------------------------------------------Tạo danh sách số ngẫu nhiên--------------------------------------------------*/
// function getRandNumbers(min, max, length) {
//     let arr = [];
//     for(let i =0;i<length;i++)
//     {
//         arr[i] = (Math.random() * (max - min) + min).toFixed();
//     }
//     return arr;
// }

// console.log(getRandNumbers(11, 20, 5));

// var myArray = [
//     'JS',
//     'PHP',
//     'Java',
//     'Dart',
//     'Ruby',
//     'Python',
// ];

// let arrayLength = myArray.length; //Viết như này bởi vì nó sẽ tăng performance cho vòng lặp sẽ nhanh hơn

// for(let i = 0;i<arrayLength;i++)
// {
//     console.log(`Phan tu thu ${i+1} : ${myArray[i]}`);
// }


// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// function getTotal(arr){
//     let s=0;
//     let lengthArr = arr.length;
//     for(let i=0;i<lengthArr;i++)
//     {
//         s+=arr[i].price;
//     }
//     return s;
// }

// // Expected results:
// console.log(getTotal(orders))  // Output: 8700000

/*--------------------------------------------------For/in Loop--------------------------------------------------*/

// var myInfo = {
//     name: 'Son Dang',
//     age: 18,
//     address: 'Thanh Khe',
// };

// for(var key in myInfo){
//     console.log(myInfo[key]);
// }

//for/in dùng chủ yếu để lấy key trong object
// function run(object) {
//     let results = [];
//     for(var key in object)
//     {
//         results.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
//     }
//     return results;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));

/*----------------------------------------------------------------For/of--------------------------------------------------------------*/
// var myArray = [
//     'JS',
//     'PHP',
//     'Java',
//     'Dart',
//     'Ruby',
//     'Python',
// ];

// var people = {
//     name: 'Thanh Phúc',
//     age: 18,
// }

// // for(let value of myArray)
// // {
// //     console.log(value);
// // }

// for(let value of Object.keys(people))
// {
//     console.log(`${value} : ${people[value]}`);
//     // console.log(people[value]);
// }

// let myArray = [
//     [1,2],
//     [3,4],
//     [5,6],
//     [7,8],
// ];

// for(let i=0;i<myArray.length;i++)
// {
//     for(let j=0;j<myArray[i].length;j++)
//     {
//         console.log(myArray[i][j]);
//     }
// }

// let array = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'];
// console.log(new Set(array)); //trả lại 1 đối tượng Set
// console.log([...new Set(array)]);//Dùng toán tử Spread trong ES6 - toán tử giải - Giải những phần tử vào trong mảng

/*-----------------------------------------------------------------------------Đệ Quy-----------------------------------------------------------------*/

// function countDown(num)
// {
//     if(num < 0) return;
//     else {
//         console.log(num);
//         return countDown(num-1);
//     }
// }

// countDown(5);

// function giaiThua(num){
//     let output = 1;
//     for(let i = 1;i<=num;i++)
//     {
//         output*=i;
//     }
//     return output;
// }

// console.log(giaiThua(3));

// function deQuy(num){
//     if(num===1) return 1;
//     else return num * deQuy(num-1);
// }

// console.log(deQuy(3));


/*------------------------------------------------------------------------Array methos--------------------------------------------------------------------*/
/*
    ALL METHODS:
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/

// let courses = [
//     {id: 1, name:'JS', coin:250},
//     {id: 2, name:'Java', coin:50},
//     {id: 2, name:'Java', coin:50},
//     {id: 3, name:'HTML, CSS', coin:0},
//     {id: 4, name:'Python', coin:350},
// ];

// //duyệt qua từng phần tử của mảng  
// courses.forEach(function(course, index) {
//     console.log('index:',index,course);
// });
// //trả về boolean: kiểm tra điều kiện tất cả phần tử trong mảng  phải đúng mới trả về true
// let isFree = courses.every(function(course, index) {
//     return course.coin === 0;
// });

// //trả về boolean: kiểm tra điều kiện chỉ một phần tử trong mảng đúng mới trả về true
// let isFree2 = courses.some(function(course, index) {
//     return course.coin === 0;
// });
// //Hàm find chỉ trả ra một đối tượng duy nhất
// let getName = courses.find(function(course, index){
//     return course.name === 'Java';
// });

// console.log(getName);

// //Hàm filter chỉ trả ra tất cả đối tượng nó tìm thấy
// let getName2 = courses.filter(function(course, index){
//     return course.name === 'Java';
// });

// console.log(getName2);

// console.log(isFree);
// console.log(isFree2);

// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function getMostFavoriteSport(arr)
// {
//     let getSports = arr.filter(function(sport){
//         return sport.like > 5;
//     });
//     return getSports;
// }

// // Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

/*----------------------------------------------------------------------------Array Map()------------------------------------------------------------------*/
// Dùng phương thức Map() nếu bạn muốn thay đổi hoặc chỉnh sửa element của 1 array

// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function sportHandLer(spt, index)
// {
//     return {
//         name: `Môn thể thao: ${spt.name}`,
//         like: `Số like là: ${spt.like + 1}`,
//         price: 30000 + 'vnd',
//         index: index,
//     };
// }

// var newSports = sports.map(sportHandLer);

// console.log(newSports);


/*------------------------------------------ Reduce() method ------------------------------------------------- */

// let courses = [
//     {id: 1, name:'JS', coin:250},
//     {id: 2, name:'Java', coin:50},
//     {id: 2, name:'Java', coin:50},
//     {id: 3, name:'HTML, CSS', coin:0},
//     {id: 4, name:'Python', coin:350},
// ];

// let totalCoin = courses.reduce(function(a, b){
//     return a + b.coin;
// }, 0);

// console.log(totalCoin);

// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]

// function getTotalGold(arr){
//     return arr.reduce(function(a, b){
//         return a + b.gold;
//     }, 0);
// };

// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23
 
//Flat - "Làm phẳng mảng" từ Depth array - "Mảng sâu"
// let depthArray = [1, 2, [3, 4], 5, 6, [7,8,9]];

// let flatArray = depthArray.reduce(function(flatOutput, depthItem){
//     return flatOutput.concat(depthItem);
// }, []);

// console.log(flatArray);

//Lấy ra các khóa học đưa vào 1 mảng mới
// let topics = [
//     {
//         topic: "Front-end",
//         courses: [
//             {
//                 id: 1,
//                 tittle: "HTML, CSS"
//             },
//             {
//                 id: 2,
//                 tittle: "JS",
//             }
//         ]
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 tittle: "PHP",
//             },
//             {
//                 id: 2,
//                 tittle: "NodeJS",
//             }
//         ]
//     }
// ];

// let newCourses = topics.reduce(function(course, topic){
//     return course.concat(topic.courses);
// },[]);

// console.log(newCourses);

// let htmls = newCourses.map(function(course){
//     return `
//         <div>
//             <h2>${course.tittle}</h2>
//             <p>ID: ${course.id}</p>
//         </div>
//     `;
// });

// console.log(htmls.join(''));
// let app = document.querySelector('.append');
// app.append(htmls.join(''));
// có 2 biến ban đầu là biến tích trữ và giá trị hiện tại, thứ 3 là index chỉ mục thứ 4 là mảng gốc (ít dùng)v  
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  
  function calculateRating(arr){
      let directs = arr.filter(function(direct){
          return direct.Director === 'Christopher Nolan';
      });
      console.log(directs);
      let IMDB = directs.reduce(function(a, b){
        return (a + Number(b.imdbRating));
        }, 0);
        return IMDB/(directs.length);
  }
  
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675
  
  
  
  
  
  
  
  
  
  
  
  
  
  


