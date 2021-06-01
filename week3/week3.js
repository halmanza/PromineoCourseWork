const numArray = [3, 9, 23, 64, 2, 8, 28, 93];
const nameArray = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

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



// Following code is for console logging the results in a formatted method
console.log(`\nHere is the original array : ${numArray}\n`);
console.log(
  `Adding first and last element in array that results in the sum of ->`,
  numAdd()
);

adder(15);
console.log("Now adding the integer 15 to the end of the array\n", numArray);

console.log(
  "Here is the new result of adding the first number with the new last array value:\n",
  numAdd()
);

console.log("\nAverage of array values", loopAverage());

console.log("\nArray of names ", nameArray);
console.log("Average of length of names", nameLengthAvg());
