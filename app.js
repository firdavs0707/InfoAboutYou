alert ('Welcome to our site!')
var name = prompt('Enter your name: ', 'Firdavs').trim();
var lastName = prompt('Enter your lastName: ', 'Fayozov').trim();
var age = prompt('Enter your age: ', '15').trim();
var occupation = prompt('Enter your occupation: ', 'Web dev').trim();
var orint = prompt('Enter your address: ', 'Toshkent').trim();
alert('Thanks for the information 👦🏼 ')
console.log(`
Ismingiz: ${name}
Familiyangiz: ${lastName}
Yoshingiz: ${age}da
Kasbingiz ${occupation}
Manzilingiz: ${orint}`)
document.getElementById('infoHumanName').innerHTML = 'Ism: '+ name;
document.getElementById('infoHumanLastName').innerHTML = 'Familiya: '+ lastName;
document.getElementById('infoHumanAge').innerHTML = 'Yosh: '+ age + 'da';
document.getElementById('infoHumanOccupation').innerHTML = 'Kasb: '+ occupation;
document.getElementById('infoHumanOrint').innerHTML = 'Manzil: '+ orint;






































// // const suu = prompt('lyuboy soz kiriting:  ');

// // if (suu.length == 0) {
// //   document.getElementById('demo').innerHTML = 'Siz harf kiritmadingiz😡😡';
// // }else if (suu.length > 10){
// //   alert('error')
// //   document.getElementById('demo').innerHTML = 'Siz kop harf yoki son kiritib yubordigiz😡😡';
// // }else if (suu.length < 10) {
// //   document.getElementById('demo').innerHTML = suu;
// // }

// var geme = prompt('ismingizni kiriting:  ', 'Firdavs')

// console.log(geme)