const numArray = [3, 9, 23, 64, 2, 8, 28, 93];
const nameArray = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
const nameLengths = [];
const secArray = new Array(4).fill(12);

/* lastElement holds the last element in array and updates each time a number is added to the array */
const lastElement = () => {
  return numArray[numArray.length - 1];
};
/* numAdd adds first and last numbers in array */
const numAdd = () => {
  let total = 0;
  numArray.filter((item) => {
    if (item === numArray[0]) {
      total += item + lastElement();
    }
  });
  return total;
};
/* adder pushes number into array */
const adder = (num) => {
  numArray.push(num);
};

/* for loop that averages the integers in the array */

const loopAverage = () => {
  let total = 0;
  for (let x = 0; x < numArray.length; x++) {
    total += numArray[x];
  }

  return total / numArray.length;
};

// for loop for adding each names length and averaging the total value

const nameLengthAvg = () => {
  let total = 0;
  for (let x = 0; x < nameArray.length; x++) {
    total += nameArray[x].length;
  }
  return total / nameArray.length;
};

// for loop for concatenate the names together separated by a space;
const concatName = () => {
  let name = "";
  for (let x = 0; x < nameArray.length; x++) {
    name += " " + nameArray[x];
  }
  return name;
};

// for loop that takes namesArray and adds the length of each name to the nameLength array
const addNameLength = () => {
  for (let x = 0; x < nameArray.length; x++) {
    nameLengths.push(nameArray[x].length);
  }
};

// for loop that sums the total values of nameLength array
const totalNames = () => {
  let nameTotal = 0;
  for (let x = 0; x < nameLengths.length; x++) {
    nameTotal += nameLengths[x];
  }
  return nameTotal;
};

// function that intakes a word and uses n for how many times it should be repeated
const wordRepeat = (word, n) => {
  return word.repeat(n);
};

// function that intakes two string values for first and last name then separates them by a space
const fullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};

// intake array that passes and array and compares if sum of values is greater than 100 returning true.
const intakeArray = (arr) => {
  let arraySum = arr.reduce((add, current) => (add += current));
  if (arraySum > 100) {
    return true;
  }
};

// intakes array and returns the average
const averageNumber = (arr) => {
  return arr.reduce((add, current) => (add += current)) / arr.length;
};

// compares the average of the first array with second and returns true or false
const compareArray = (firstArr, secondArr) => {
  let firstVal = firstArr.reduce((add, current) => (add += current));
  let secondVal = secondArr.reduce((add, current) => (add += current));

  return firstVal / firstArr.length > secondVal / secondArr.length
    ? true
    : false;
};

// willBuyDrink intakes a boolean value of true or false and number value to determine if drink will be bought

function willBuyDrink(isHotOutside = false, moneyInPocket = 0.0) {
  if (isHotOutside === true && moneyInPocket > 10.5) {
    return true;
  } else {
    return false;
  }
}

// simple function using filter to return odd numbers from an array
const selectOdds=(arr)=>{
  let odds= arr.filter(item=>(item % 2) !== 0)
  return odds
  }

// Following code is for console logging the results in a formatted method
console.log(`\n Here is the original array : ${numArray}`);
console.log(
  "\n Adding first and last element in array that results in the sum of ->",
  numAdd()
);

adder(15);
console.log("\n Now adding the integer 15 to the end of the array\n", numArray);

console.log(
  "\n Here is the new result of adding the first number with the new last array value:\n",
  numAdd()
);

console.log("\n Average of array values", loopAverage());

console.log("\n Array of names ", nameArray);
console.log("\n Average of length of names", nameLengthAvg());
console.log("\n Names concatenated together: ", concatName());

addNameLength();
console.log(
  "\n nameArray's length values added to nameLength array",
  nameLengths
);
console.log("\n Sum of length values from nameLength array ", totalNames());

console.log(
  "\n wordRepeat function that intakes a string and repeats it based on number argument provided:",
  wordRepeat("hello", 3)
);

console.log("\n Is sum of numArray greater than 100?  ", intakeArray(numArray));

console.log("\n average of numArray ", averageNumber(numArray));

console.log(
  "\nIs numArray average greater than secArray average: ",
  compareArray(numArray, secArray)
);

console.log("\nits hot outside and I have 11 dollars, can I buy a drink?",willBuyDrink(true,11.00))

console.log("\nAll the odd numbers in numArray: ", selectOdds(numArray))