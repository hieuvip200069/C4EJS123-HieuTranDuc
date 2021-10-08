
// let a = 5;
// let b = 6;
// console.log(a,b);
// // let temp = a;
// // a = b;
// // b = temp;
// [a, b] = [b , a];
// console.log(a,b);

// const s = 'Hello beauty there';

// const a = Array(s);

// console.log(a);

// const s = 'Hello beuty there';

// a = s.split(' ');

// console.log(a);a


// const a = [4, 5, 7, -8];

// console.log(...a);


// BAI 4
// let list = ['Jeans', 'T-Shirt', 'Socls'];
// while(true){
 
//   let x = '';
//   while (x.toUpperCase() != 'C' && x.toUpperCase() != 'R' && x.toUpperCase() != 'U' && x.toUpperCase() != 'D') {
//     if (x != '') {
//       alert('This command is not supported');
//     }
//     console.log(x);
//     x = prompt('Hi there, welcome to shop admin panel, What do yeu want(C, R, U, D)?');
  
//   }
//   switch (x.toUpperCase) {
//     case 'C':

//       let temp = prompt(`Enter new iteam`);
//       list.push(temp);
//       break;
//     case 'R':
//       console.log('The current items are:');
//       for (let index = 0; index < list.length; index++) {
//         console.log(index + 1 + ', ' + list[index]);
  
//       }
//       break;
//     case 'U':
//       let temp = prompt(`Enter the position you want to update`);
//       if(temp < list.length && temp >=0){
//         list[temp] = prompt(`Enter new name`);
//       }
//       break;
//     case 'D':
//       let temp = prompt(`Enter the position you want to remove`);
//       if(temp < list.length && temp >=0){
//         list.splice(temp,1);
//         alert(`Done`);
//       }
      
//       break
//     default:
//       break;
//   }
// }

// bai 5
// let temp = prompt(`Enter a squence ò Number, separated bt commas(,)`);
// let list = temp.split(',');

// let result = 0;
// for (let index = 0; index < list.length; index++) {
//   let tm = Number(list[index])
//   result +=  tm;
// }
// console.log(result);
// alert(`The sum of them is ${result}`);


// Bai 6
// let temp = prompt(`Enter a squence ò Number, separated by ","`);
// let list = temp.split(',');
// let smallest = list[0];
// for (let index = 1; index < list.length; index++) {
//   if(smallest> list[index]){
//     smallest = list[index];
//   } 
// }
// alert(`The smallest number is ${smallest}`);

// Bai7
// const arr = [3,4,6,-9,-10,-88,2];
// let x = prompt(`Enter a Number`);
// let check = false;
// for (let index = 0; index < arr.length; index++) {
//   if(x == arr[index]){
//     alert(`${x} is FOUND in my array at index ${index}`);    
//   }
  
// }
// if(check){
//   alert(`${x} is NOT found in my array `);    
// }

// bai 8
// let arr = [5,7,300,90,24,50,73];
// console.log(`hello, my name is Phuong Nam and here is my sheep sizes`);
// console.log(...arr);

// let max = arr[0];
// for (let index = 1; index < arr.length; index++) {
//   if(max < arr[index]){
//     max = index;
//     arr.splice(index,1);

//   }  
// }

// console.log(`Now my biggest sheep has size ${max}, let's shave it`);

// console.log(`After shearing, here is my flock`);

// console.log(...arr);

// for(let i = 1 ; i <= 4; i++){
//   console.log(`MOUNTH ${i}`);
//   console.log(`After shearing, here is my flock`);
//   for (let index = 0; index < arr.length; index++) {
//         arr[index] += 50;
    
//   }
//   console.log(...arr);
// }
// let total = 0;
// for (let index = 0; index < arr.length; index++) {
//   total += arr[index]; 
// }
// console.log(`My flock has size in total: ${total}`);
// console.log(`I Would get ${total} * 2$ = ${total*2}`);