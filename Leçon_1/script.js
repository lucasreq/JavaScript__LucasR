// 'use strict';

// console.log('bonjour');

// let username = "Lucas"
// let username; // 
// username = 'Lucas';
// username = 'poulet';
// username = 'crabe';
// username = 'tortue';

// const userStatus = 1;

// let myString = 'Hello';
// let myString1 = "Hello";
// let myString2 = `Hello`;

// let myNumber = 1.5;

// let myBoolean = true; //or false

// let myUndefined = undefined;

// let myNull = null;

//NaN


//enchainez (concatenate) 2 chaines de caratères

// console.log('Hello'+'world');
// const str1 = 'Hello';
// const str2 = 'world';

// console.log(`${str1} ${str2}`);


//ajoutez 10 et 32; Incrémentez le résultat de 8 avec l'opérateur +=

// let b = 10 + 32;
// b -= 8; //b = b - 8
// console.log('b',b);

//multipliez 5 par 7. Multipliez le résultat par 2 avec l'opérateur *=.

// let h = 10 * 32;
// h *= 2; //b = b * 8
// console.log('h',h);

//Divisez 10 par 2. Divisez le résultat par 2 avec l'opérateur /=.

// let p = 10 / 2;
// p -= 2; //b = b - 8
// console.log('p',p);

//Déclarez une variable avec la valeur 5.Incrémentez-la de 1 avec l'opérateur ++
//Déclarez une variable avec la valeur 5.Décrémentez-la de 1 avec l'opérateur --

// let c = 5;
// ++c; // c = c + 1
// --c; // c = c - 1

//console.log(c++);
//console.log(c--);

//console.log(c)

// console.log([1,2,3] * 3);

// console.log(+'3');
// console.log(+true)

// console.log('4'+ 3); // '43'
// console.log(3 + 4 + '7');
// console.log('3' + 4 + 7);



/*
<
<=
>
>=
===
!==
*/



// // Ecrivez en ligne de code un moyen de vérifier si 2 est supérieur à 1.
// console.log('2 > 1', 2 > 1);//true

// // Ecrivez en ligne de code un moyen de vérifier si 2 est inférieur à 1.
// console.log('2 < 1', 2 < 1);//false

// // Ecrivez en ligne de code un moyen de vérifier si 20 est supérieur ou égal à 10.
//  console.log('20 >= 10', 20 >= 10);//true

// Ecrivez en ligne de code un moyen de vérifier si 10 est supérieur ou égal à 10.
// console.log('10 >= 10', 10 >= 10);//true

// Ecrivez en ligne de code un moyen de vérifier si 4 n'est pas égal à 6.
// console.log(4 != '4'); //false
// console.log(4 !== '4'); //true
// Ecrivez en ligne de code un moyen de vérifier si '2' est égal à 2 avec l'opérateur d'égalité stricte.

// Ecrivez en ligne de code un moyen de vérifier si 0 n'est pas égal à '0'.
// Ecrivez en ligne de code un moyen de vérifier si 'hello' est égal à 'hello'.
// console.log('Hello' === 'Hello');
// Ecrivez en ligne de code un moyen de vérifier si 'hello' est égal à 'Hello'.



// || = ou
// && = et



// if(5 > 0 || 5 > 10){
//     console.log('1');
// }else {
//     console.log('2');
// }

// let a = 20/2;
// if (a > 10 || 20/2 < 115){
//     console.log("Yes")
// }else {
//     console.log("No")
// }

// let isPrivate = false;
// let isMember = false;
// if (condition){
//     console.log('1');
// } else if (condition2) {
//     console.log('2')
// } else {

// }

// if (!isPrivate || (isPrivate && isMember)){
//     console.log('can see the group');
// } else{
//     console.log(`Can't see the group`);
// }


// const today = 'lundi'

// switch (today){
//     case 'lundi':
//     console.log(`Aujourd'hui on est ${today}`);
//     break;
//     case 'mardi':
//     console.log(`Aujourd'hui on est ${today}`);
//     break;
//     case 'mercredi':
//     console.log(`Aujourd'hui on est ${today}`);
//     break;
//     case 'jeudi':
//     console.log(`Aujourd'hui on est ${today}`);
//     break;
//     case 'vendredi':
//     console.log(`Aujourd'hui on est ${today}`);
//     break;
// }

// let usernameuh = prompt('What is your name little gelly');

// console.log('username',usernameuh);


// if (username)
// alert('nice to meet you ${username}');
// alert(`don't be shy`)

// usernameuh !== null ?
// alert (`nice to meet you ${usernameuh}`):
// alert (`don't be shy`);
// alert (`aujourd'hui on est ${today}`)

// function myFunc(){
//     console.log("Hello world");
//     return
// }
// console.log('myFunc', myFunc());

// function myFunc2 = (text) => {
//     return text;
// }
// console.log ('myFunc2', myFunc2());

// const sum = (p1, p2) => {
//     return p1 + p2;
// }

// console.log(sum(4));

// const truncate = (str,length, trail) =>{
//     if (str.lenght > lenght){
//         return str.substring(0,lenght) + trail 
//     }else{
//         return str
//     }
// }

// const res2 = truncate('I will be truncated', 15, '->') // returns 'I will be trunc->'
// console.log('res1',res1);
// const res3 = truncate('I will be truncated', 5) // returns 'I wil...'
// console.log('res2',res2);
// const res3 = truncate('I will be truncated', 50) // returns 'I wil...'
// console.log('res3',res3);

// const myArray = [1,'Hello',[1,2,3]]
// console.log('myArray', myArray);
// console.log(typeof myArray);

// console.log(myArray[0])
// console.log(myArray[1])

// console.log(myArray.length)
// console.log(myArray[myArray.length -1]);

// const arr = [0,1,2,3,4,5,6,7,8,9];
// arr.map(x => {
//     console.log('x', x);
//     return x/2;
// });

// let res = [];
// arr.forEach(num => {
//     console.log('num', num);
//     res.push(num/2);
// })
// console.log('res',res);

// const myArr = [1, 2, 3];
// const myArr2 = myArr;
// myArr2[0] = 0;
// console.log(myArr) // [0, 2, 3] - What the heck? Why? How?
// console.log(myArr2) // [0, 2, 3]

// const myArr = [1, 2, 3];
// const myArr2 = [...myArr];

// const user = {
//     id: 1,
//     name: 'Lucas',
//     email: 'szfijdjif@gmail.com',
//     car: {
//         color:'red'
//     },
//     test:[1,2,3]
// }

// console.log(user.id);
// console.log(user['id']);
// console.log(user.car.color);

// const myProp = 'car';
// console.log(user[myProp].color);

// const cart = [
//     {item: 'a', price: 2, quantity: 1},
//     {item: 'a', price: 3, quantity: 1},
//     {item: 'a', price: 4, quantity: 1},
//     {item: 'a', price: 5, quantity: 1},
// ];

// const res = cart.reduce((acc, curVal) => {
// console.log('acc', acc);
// console.log('curVal', curVal);
// return acc += curVal.price * curVal.quantity
// }, 0);

// console.log('res', res)


//DEBUGGING:

// myCharacter = 'Luna Lovegood';

// myCharacterHouse = useSortingHat();



// function useSortingHat(char) {
//   let choice = ''
  
//   switch (char) {
//     case 'Harry Potter':
//       choice = 'Gryffindor';
//     case 'Draco Malfoy':
//       choice = 'Ravenclaw';
//     case 'Luna Lovegood':
//       choice = 'Ravenclaw';
//     default:
//       'Gryffindor'
//   }
// }

// const checkMyGringottAccount = (myCharacter) =>{
//   myMoney = Math.random() * 100

//   if (myMoney > 0 || myMoney < 30) {
//     return 'Hello Weasley'
//   } else if ( myMoney > 30 ||  myMoney < 75 ) {
//     return `Hey, that's cool`
//   } else{
//     return `You're reach!`
//   }
// }

// isMyCharacterRich = checkMyGringottAccount();