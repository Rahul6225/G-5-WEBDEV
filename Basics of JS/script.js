console.log("Hello");
let arr = [2, 3, 5, 6, 8, 10];
function Double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}
function binary(x) {
  return x.toString(2);
}

const output = arr.filter((x) => x % 2 == 0);
const newArr = arr.map(Double);
const ReduceArr = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0); //this reduce function takes two arguments => function and initialization of accumulator value and inside function it
// take another two arguments accumulator,current
//this basically accumulates the logic the values to single

const reduceMax = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);
console.log(reduceMax);
console.log(arr);
console.log(newArr);
console.log(output);
console.log(ReduceArr);

const Set = [
  { firstname: "Rahul", lastname: "Singh", age: 26 },
  { firstname: "Kuldeep", lastname: "Singh", age: 18 },
  { firstnam:"full", lastname: "Singh", age: 44 },
  { firstname: "full", lastname: "Singh", age: 30 },
  { firstname: "full", lastname: "Singh", age: 40 },
];

console.log(Set);
const Ans = Set.filter((x)=>x.age>30).map((x)=>x.firstname);
console.log(Ans);

apply=we pass argukenmts  as array
bind=we have to call the function manually



