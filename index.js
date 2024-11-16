// function mesaj() {
//     console.log("bes saniye bitdi");
// }

// setTimeout(mesaj, 5000);
  




// let eded = 65.4345;
// let yuvarlaqEded = Math.round(eded);
// console.log(yuvarlaqEded); 




// function randomEded() {
//     return Math.random() * 10;
// }
// console.log(randomEded());




// function Tarix() {
//     const tarix = new Date();
//     const il = tarix.getFullYear();
//     const ay = tarix.getMonth() + 1; 
//     const gun = tarix.getDate();
//     return `İl: ${il}, Ay: ${ay}, Gün: ${gun}`;
// }
// console.log(Tarix());




// function zaman() {
//     const tarix = new Date();
//     const saat = tarix.getHours();
//     const deqiqe = tarix.getMinutes();
//     const saniye = tarix.getSeconds();
//     return `Saat: ${saat}, Dəqiqə: ${deqiqe}, Saniyə: ${saniye}`;
// }
// console.log(zaman());




// let words=['kitab','defter','qelem','pozan']
// let index = words.indexOf('qelem')
// if (index !== -1) {
//     words.splice(index, 1)
// }
// words.push('jurnal','karandas');
// console.log(words)






// let arr=[2,5,32,12,6]
// let numbers=arr.every(num=>num%2===0)
// console.log("Bütün elementlər cütdürmü?:",numbers)

// let num=arr.some(num=>num%2!==0)
// console.log("En az bir tek  element varmi?:",num)




// let arr = [-23, 5, 34, 3, -3, 0];
// let result = arr
//     .filter(num => num > 0) 
//     .map(num => num * 2)    
//     .sort((a, b) => b - a)    
//     // niye - yazilir > yazilmir
// console.log("Netice:", result);










// let choice=["save","cancel","update"]
// let mychoice="save"
// switch (mychoice) {
//     case "save":
//         console.log(" yadda saxlandi");
//         break;
//     case "cancel":
//         console.log(" cixildi ");
//         break;
//     case "update":
//         console.log("deyisiklikler yadda saxlandi");
//         break;

//     default:
//         console.log(" qebul edilmedi");
//         break;
// }






// let arr=[4,6,3,2,5,7]
// let result=arr.map(el=>(el%2===0?"cut":"tek"))
// console.log(result)




// let title='abcdefgh'
// let result=title.split("")
// console.log(result)




// let obj1 = { cloud: 'bulud', book: 'kitab', juice: 'lemonade' };
// let obj2 = { phone: 'telephone', window: 'pencere' };
// let birge = Object.assign({} ,obj1,obj2);
// let son = Object.values(birge);
// console.log("Birləşdirilmiş obyekt:", birge);
// console.log("Dəyərlərin massivi:", son);







