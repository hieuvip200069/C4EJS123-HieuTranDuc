
/*
Bai 1

let str_input = prompt(`Enter input`);

let result = '';

for(let i = str_input.length() -1 ; i >= 0; i --){
    result += str_input.charAt(i);
}
alert(result);


*/
/*
Bai 2

let str_input = prompt(`Enter input`);
str_input = str_input.split(' ');


str_input[0].charAt(0) = str_input[0].charAt(0).toUpperCase();

let result = '';
str_input.forEach(element => {
    result += element+' ';
});

console.log(result);

*/

/*
Bai 3
let arr = prompt(`Enter Array`);

arr = arr.split(',');

for(let i = 0 ; i < arr.length ; i++){
    for(let j = i + 1 ; j < arr.length ; j ++){
        if(arr[i].trim() == arr[j].trim() ){
            arr.splice( j , 1 );
            j--;
        }
    }
}
console.log(...arr);
*/


/* 
bai 4
const employee1 = {
    name: `Demo1`,
    age: 18,
    salary: 1000,
    role: 'AS1',
}
const employee2 = {
    name: `demo2`,
    age: 18,
    salary: 1000,
    role: 'AS2',
}
const employee3 = {
    name: `demo3`,
    age: 18,
    salary: 1000,
    role: 'AS3',
}
let arr = [employee1, employee2, employee3];
var status = new Boolean(true);
let indexcheck = 3;

while (status) {
    let key = '';
    while (key.toUpperCase() != 'C' && key.toUpperCase() != 'R' && key.toUpperCase() != 'U' && key.toUpperCase() != 'D') {
         key = prompt(`Employee Manager: (R,C,U,D) or (RT)`);
    }

    switch (key.toUpperCase()) {
        case 'C':
            let name = prompt(`Enter Name: `);
            let age = prompt(`Enter Age: `);
            let salary = prompt(`Enter Salary: `);
            let role = prompt(`Enter Role: `);
            const temp1 = {
                name: name,
                age: age,
                salary: salary,
                role: role,
            }
            arr.push(temp1);
            console.log(...arr);
            break;
        case 'R':
            for(let index1 = 0 ; index1 < arr.length ; index1 ++){               
                console.log(`Employee {
                Name: ${arr[index1].name},
                Age: ${arr[index1].age},
                Salary: ${arr[index1].salary}
                Role: ${arr[index1].role} 
                }`);
            };
            break;
        case 'U':
            let index = Number(prompt('Enter Index up load~'));
            if (index >= 0 && index < arr.length) {
                arr[index].name = prompt(`Enter new Name: `);
                arr[index].age = prompt(`Enter New Age: `);
                arr[index].salary = prompt(`Enter New Salary: `);
                arr[index].role = prompt(`Enter New Role: `);
            }
            break;
        case 'D':
            let temp = prompt(`Enter the position you want to remove`);
                  if(temp < arr.length && temp >=0){
                    arr.splice(temp,1);
                    alert(`Done`);
                  }
            break;
        case 'RT':
            status = false;
            break;          
        default:
            status = false;
            break;
    }
   
}
*/
// Fution use to check date 


/*
Bai 5
function checkDate(strDate) {
    // create array 
    var comp = strDate.split('/')

    var d = parseInt(comp[0], 10)
    var m = parseInt(comp[1], 10)
    var y = parseInt(comp[2], 10)
    var date = new Date(y,m-1,d);
    if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
      return true
    }
    return false
}


let date =prompt(`enter Date (dd/MM/yyyy):`);
if(checkDate){
    alert(`Date: ${date} is Correct --`);
}else{
    alert(`Date: ${date} is Incorrect --`);
}
*/
