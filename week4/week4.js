const splicedValue = ["Hello", "Everyone", "Out", "There"];

function nameIntake(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const askAreWeThereYet = () => {
  return alert("Are we there yet?");
};

const processSplicedValue = (array, indexNum, response) => {
  let splicer = array.splice(indexNum, 1);
  response(splicer);

  if (typeof callback === "function") {
    callback(splicer);
  }
};

const customCallBackFunction = (str) => {
  console.log(`The last spliced word is ${str}`);
};

console.log(nameIntake('Anthony','Almanza'))
console.log(fullName('Captain','America'))

window.setTimeout(()=>alert('Time is up!'), 4000)

window.setInterval(askAreWeThereYet, 12000);

processSplicedValue(splicedValue, 0, console.log);
processSplicedValue(splicedValue, 1, alert);
processSplicedValue(splicedValue, 0, () => alert(splicedValue));
processSplicedValue(splicedValue, -1, customCallBackFunction);
