console.log(2 > 1)
console.log(2 == 1)
console.log(2 <= 1)

console.log("2" > 1)// in this string gets converted into the number but remember these type of
console.log("02" > 1)//conversions are not prefered therefore while comparing the datatypes must
//be same


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//in the above three cases comparision operaters converts null into number treating it as 0
// therfore in (1) null>0 is false and in (3)null >=0 is true

console.log(undefined == 0);
console.log(undefined <= 0);
console.log(undefined > 0);
//in all the above 3 cases we will get false due to undefined

// === syntax
console.log("2" == 2) //in this == it will convert the datatype i.e string to number and than compare
console.log("2" === 2)// here in === it is strict comparatoe i.e it will compare without conversion