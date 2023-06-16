// 1. removing duplicates and sorting Array
var arr1 = [ 10, 20, 30, 45, 50]
var arr2 = [ 20, 15, 25, 26, 35]

var arr3 = arr1.concat(arr2.filter((el)=>arr1.indexOf(el)<0)).sort((a,b)=>a-b);
console.log(arr3)

var a = [1, 2, 3], b = [101, 2, 1, 10]
var c = a.concat(b.filter((item) => a.indexOf(item) < 0)).sort((a,b)=>a-b)
console.log(c)

//********************************************************************************************************************************//

// 2. Get max count of conjugative 1's in given below array
var nums = [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1];
const maxOne=(nums)=>{
    let cnt = 0;
    let tempArr = [];
    nums.forEach(element => {
        if(element!==0){
            tempArr.push(element);
        }else{
            cnt = cnt<tempArr.length?tempArr.length:cnt;
            tempArr = []
        }
    });
    return cnt;
}
console.log(maxOne(nums))

//approach2 --->

const maxOnes = (nums) => {
  let cnt = 0;
  let tempCnt = 0;
  nums.forEach((element) => {
    if (element !== 0) {
      tempCnt++;
      cnt = Math.max(cnt, tempCnt);
    } else {
      tempCnt = 0;
    }
  });
  return cnt;
};

console.log(maxOnes(nums));

//********************************************************************************************************************************//

// 3. Get the count of persons group by country in give array of persons
var person = [
  {
    name: "xyz",
    address: {
      line_1: "street 1",
      line_2: "",
      city: "test city",
      state: "TX",
      country: "US",
    },
  },
  {
    name: "ABC",
    address: {
      line_1: "street 1",
      line_2: "",
      city: "test city",
      state: "TX",
      country: "US",
    },
  },
  {
    name: "ghk",
    address: {
      line_1: "street 1",
      line_2: "",
      city: "test city",
      state: "TX",
      country: "IN",
    },
  },
];

const groupBy=(arr)=>{
  let countryCount = {};
  arr.forEach(el => {
    if(countryCount[el.address.country]){
      countryCount[el.address.country]++;
    }else{
      countryCount[el.address.country] = 1;
    }
  });
  return countryCount;
}

console.log(groupBy(person))

//********************************************************************************************************************************//

//4. Find out the largest string from a sentenc

var sentence = "Welcome to hellow world";
const largestString = (sentence) => {
  let arr = sentence.split(" ");
  let narr = arr.sort((a, b) => b.length - a.length);
  return narr[0];
};

console.log(largestString(sentence));

//********************************************************************************************************************************//

// 5. What is the output for below snippet and how ? How can we correct below snippet to print 1, 2 and 3 ?

for (var i = 0; i < 3; i++) {
setTimeout(() => console.log(i), 1);
}

// Solution -->

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i+1), 1);
  }

//********************************************************************************************************************************//

// 6. Convert input array to output array as shown below
var InputArr = [{ p: 4 }, { p: 2 }, { p: 9 }, { p: 6 }];
var outputArr = [{ p: 2 }, {}, { p: 4 }, {}, { p: 6 }, {}, {}, { p: 9 }];

const arrayManipulate = (arr) => {
  arr = arr.sort((a, b) => a.p - b.p);
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let diff = arr[i + 1].p - arr[i].p;
    if (diff > 1) {
      result.push(arr[i]);
      for (let i = 0; i < diff - 1; i++) {
        result.push({});
      }
    }
  }
  result.push(arr.pop());
  return result;
};

console.log(arrayManipulate(InputArr));

//********************************************************************************************************************************//

// 7. Expected Output: [{id:1,name:["a","d"]},{id:2,name:"b"},{id:3,name:["c","e"]}
let input = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 1, name: "d" },
  { id: 3, name: "e" },
];

const groupById = (arr) => {
  let outputArr = [];
  arr.forEach((obj) => {
    let existingObj = outputArr.find((item) => item.id === obj.id);

    if (existingObj) {
      if (!Array.isArray(existingObj.name)) {
        existingObj.name = [existingObj.name];
      }
      existingObj.name.push(obj.name);
    } else {
      outputArr.push({ id: obj.id, name: obj.name });
    }
  });
  return outputArr;
};

console.log(groupById(input));

//********************************************************************************************************************************//

// 8. write a program for printing fibonacci series with memoization

const fibonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];

  if (n <= 2) return 1;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};

console.log(fibonacci(50));

//********************************************************************************************************************************//

// 9. remove duplicates in a const array
const array = [1, 2, 3, 1, 4, 5, 3];
// 1: "Set"
let res1 = [... new Set(array)]
console.log(res1);
// 2: "Filter"
let res2 = array.filter((e,i)=>array.indexOf(e)===i);
console.log(res2);
//3: set
const uniqueElements = (array) => {
  const set = new Set();
  return array.filter((e) => !set.has(e) && set.add(e));
};
console.log(uniqueElements(array));

//********************************************************************************************************************************//
