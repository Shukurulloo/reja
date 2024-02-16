// console.log("TRAIN AREA!");

// B-TASK


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'gri boshliq tanlang va ko'proq hato qiling", // 20-30
//     "ozingizga ishlashni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yo'q", // 60
// ];

// // CALLBACK function
// function maslahatBering (a, callback) {
//     if(typeof a !== "number") callback("insert number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         // setTimeout(function () {
//         //     callback(null, list[5]);
//         // },5000);
//         setInterval(function () {
//             callback(null, list[5]);
//         },1000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });
// console.log("passed here 1");



// ASYNC function
// async function maslahatBering (a) {
//     if(typeof a !== "number") throw new Error("insert number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => { // resolve => return, reject => throw new Error
//             setTimeout(() => {                                            
//                 resolve(list[5]);   
//             },5000);
//             // setInterval(() => {                                            
//             //     resolve(list[5]);   
//             // },1000);
//           });
//        }
//     }

// call qilindi then/catch orqali
// console.log("passed here 0");
// maslahatBering(20)
// .then(data => {
//     maslahatBering(30)
//      .then(data => {
//         maslahatBering(40)
//          .then(data => {
//             console.log("javob:", data);
//         })
//         .catch((err) => {
//             console.log("ERROR:", err);
//         });
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
//     console.log("javob:", data);
// })
// .catch((err) => {
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");


// call qilindi (via) async/await orqali
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(52);
//     console.log(javob);
// }
// run();



// A-TASK
// function countLetter(letter, word) { //
//     let count = 0; 
//     for(let i = 0; i < word.length; i++){
//         if (word.charAt(i) === letter){
//             count++; 
//         }
//     }
//     return count; 
// }

// console.log("check1:",countLetter("u", "Shukurullo")); 
// console.log("check2:",countLetter("l", "Shukurullo")); 

// richwebdeveloper



// B-TASK

// function raqamniAniqlsh(str) {
//     let count = 0;
  
//     for (let r of str) {
//       if (r >= "0" && r <= "9") {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   console.log(raqamniAniqlsh("6s5sc 43dfs4dd841v23#"));


  // CHALLENG TASKlar

  
// C-TASK
const moment = require('moment');
const time = moment().format("YYYY-MM-DD HH:mm");

class Shop {
  constructor(non, sharbat, chicken){
    this.non = non;
    this.sharbat = sharbat;
    this.chicken = chicken;
  }

  qoldiq() {
    
    console.log(`Hozir ${time}da ${this.non}ta non, ${this.sharbat}ta sharbat va ${this.chicken}ta chicken bor.`);    
  }

  sotish(mahsulot, miqdor){
    
    console.log(`Hozir ${time}da ${miqdor}ta ${mahsulot} sotildi`);
    if( mahsulot === "non"){
      this.non -= miqdor;
    }else if(mahsulot === "sharbat" ) {
      this.sharbat -= miqdor;
    }else if(mahsulot === "chicken"){
      this.chicken -= miqdor;
    }
  }

  qabul(mahsulot, miqdor){
    
    console.log(`Hozir ${time}da ${miqdor}ta ${mahsulot} qabul qilindi.`);
    if(mahsulot ===  "non" ){
      this.non += miqdor;
    }else if(mahsulot === "sharbat" ) {
      this.sharbat += miqdor;
    }else if(mahsulot === "chicken"){
      this.chicken += miqdor;
    }
  }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish('non', 3);
shop.qoldiq();
shop.qabul('sharbat', 3); 
shop.qoldiq();






