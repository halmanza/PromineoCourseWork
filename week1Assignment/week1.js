const numArray = [3, 9, 23, 64, 2, 8, 28, 93];

/* lastElement holds the last element in array and updates each time a number is added to the array */
const lastElement = () => {
  return numArray[numArray.length - 1]
}
/* numAdd adds first and last numbers in array */
const numAdd = () => {
  numArray.filter(item => {
    if (item === numArray[0]) {
      console.log(item + lastElement())
    }
  })
}
/* adder pushes number into array */
const adder = (num) => {
  numArray.push(num)
}

/* for loop that averages the integers in the array */

const loopAverage = () => {
  let total = 0;
  for (let x = 0; x < numArray.length; x++) {
    total += numArray[x]

  }

  return total / numArray.length
}

// for loop for adding each names length and averaging the total value

const nameLengthAvg=()=>{
let total=0;
for(let x=0; x < nameArray.length;x++){
	total += nameArray[x].length
}
return total/nameArray.length;
}

const nameArray=["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

adder(15)

console.log(numArray)

numAdd()

console.log('Average of array values',loopAverage())
console.log('Average of length of names',nameLengthAvg())