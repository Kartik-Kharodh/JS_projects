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