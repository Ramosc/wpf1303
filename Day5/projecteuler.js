//i=0 - start from 0
//i < 1000 - check number from 0 - 1000
//i++ - number + 1

//Problem 1
var total = 0 ;

for (var i = 0; i < 1000; i++) {
    if ((i % 3 == 0) || (i % 5 == 0)){
        total += i;
    }
}
console.log(total);

//Problem 2
var max = 4000000;
var a = 1;
var b = 2;
var c = 0;//accumulator
var evenfib = [];
var total2 = 0;


while (a < max){
    if (a % 2 == 0){
        total2 += a;
        evenfib.push(a);
    }
   c = a + b;
   a = b;
   b = c;
}
console.log(total2);








