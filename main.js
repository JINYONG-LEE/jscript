// // array
// let fruits = ['apple', 'banana', 'cherry']

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// console.log(new Date('2022-12-21').getDay());
// console.log(new Date('2022-12-25').getDay());
// console.log(new Date('2022-12-31').getDay());

// // 한줄 메모
// /* 한줄 메모 */

// /*
//  * 여러줄
//  * 메모1
//  * 메모2
//  */


// let myName = "jinyong"
// let email = 'ljy616@hanmail.net'
// let hello = `hello ${myName}`

// console.log(myName);
// console.log(email);
// console.log(hello);

// let number = 123;
// let opacity = 1.57;

// console.log(number);
// console.log(opacity);


// let checked = true;
// let isShow = false;

// console.log(checked) ; 
// console.log(isShow);


// // undefined

// let undef;
// let obj = { abc: 123};

// console.log(undef);
// console.log(obj.abc);
// console.log(obj.xyz);

// // 어떤 값이 의도적으로 비어있음을 의미 
// let empty = null;
// console.log(empty);

// // object
// let user = { 
//     name: 'jinyong',
//     age: 51, 
//     isValid: true
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.isValid);

// function helloFunc() {
//     console.log(1234);
// }

// helloFunc();

// function returnFunc() {
//     return 5678;
// }

// let a = returnFunc();
// console.log(a);

// function sum(a,b) {
//     return a+b;
// }

// let aa = sum(1, 2);
// let b = sum(7,12);
// let c = sum(2,4);

// console.log(aa,b,c);

// let world = function() { 
//     console.log('kakakaka')
// }

// world();

// const jin = {
//     name: 'yong',
//     age: 51,
//     getName: function() {
//         return this.name;
//     }
// }

// const hisName = jin.getName();
// console.log(hisName);
// console.log(jin.getName());

// let isShowed = true;
// let checkeded = false;

// if (isShowed){
//     console.log('show');
// }

// if (checkeded) {
//     console.log('checked');
// }

// const boxEl = document.querySelector('.box');

// console.log(boxEl);

//boxEl.addEventListener();
//boxEl.addEventListener(1,2);
//boxEl.addEventListener('click',2);
// boxEl.addEventListener('click', function(){
//     console.log('clicke~!');
//     boxEl.classList.add('active');
//     console.log(
//         boxEl.classList.contains('active')
//     );
//     boxEl.classList.remove('active');
//     console.log(
//         boxEl.classList.contains('active')
//     );
// });

//boxEl.classList.add('active')
//let isContains = boxEl.classList.contains('active');
//console.log(isContains);

//boxEl.classList.remove('active')
//let isContainss = boxEl.classList.contains('active');
// console.log(isContainss);

// const boxEls = document.querySelectorAll('.box');


// boxEls.forEach(function(boxEl, index){

//     boxEl.classList.add(`order-${index + 1}`);
//     console.log(index.boxEl);
// });


// const boxEl = document.querySelector('.box');

// console.log(boxEl.textContent);

// boxEl.textContent = 'jinyong?!';
// console.log(boxEl.textContent);

import _ from 'lodash';

console.log('hello world');

console.log(_.camelCase('hello world'));

