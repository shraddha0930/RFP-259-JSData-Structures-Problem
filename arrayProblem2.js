let numbers = new Array;

for (var i = 0; i < 10; i++) {
    let number = Math.round(Math.random() * 900 + 100);
    numbers.push(number);
}
console.log(numbers);
var temp;
for (var i = 0; i < 10; i++) {
    for ( var j = i; j < 10; j++){
        if(numbers[i] < numbers[j]){
            temp = numbers[i];
            numbers[i] = numbers [j];
            numbers[j] = temp;  
        }
    }
}

console.log(numbers);
console.log(`second largest ${numbers[1]} second smallest ${numbers[8]}`);
