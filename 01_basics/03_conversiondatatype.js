let score  = 33
console.log(typeof(score));
let strng = String(score)
console.log(typeof(strng))
// similarly when following are converted we got
//"33" = 33
// "33abc" = NaN i.e (not a number though it will convert it into a number)
// true = 1 , false = 0


let isloggedin = "kartik"
let booleanisloggedin  = Boolean(isloggedin)
console.log(typeof(booleanisloggedin))
console.log(booleanisloggedin) // give ouput true
// therefore some observations are
// 1 = true, 0 = false
// "" = false
// "Kartik" = true

let num = 12
let num2 = String(num)
console.log(typeof(num2));
console.log(num2);
// yes it gets converted to string and gives 12 as string
let somenum  = "abc"

// *********************operations*****************************

let val = 3
let negval = -val
console.log(negval); //=> -3
 
let str1 = "Kartik"
let str2  =" Kharodh"
let str3 = str1 + str2
console.log(str3); //=> Kartik Kharodh

//similarly other arthmetic operations can also be done
console.log(2+4);
console.log(2-9);
console.log(2/3);
console.log(2*3);
console.log(2**3);
console.log(2%3);


//some more interesting things
console.log("1" + "2");//=>12
console.log(1 + "2");//=>12
console.log("1" + 2);//=>12
console.log("1" + 2 + 4);//=>124
console.log(1 + 2 + "5");//=>35

console.log(+true);//this will convert true to number i.e 1
console.log(+"");//=> 0

let int1,int2,int3
int1 = int2 = int3 = 5+3
console.log(int2);

//here we can see the operator precedence
let x = 4
console.log(x++); //=>4
console.log(++x); //=>5
