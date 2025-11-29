const initialArr= [2,4,6,8,10];
const transformedArray= initialArr.map(num => num * 2);
console.log(transformedArray);


console.log(transformedArray.filter(num => num > 10));
const sum= transformedArray.reduce((acc, num) => acc + num, 0);
console.log(sum);

console.log(transformedArray.slice().sort((a, b) => b - a));