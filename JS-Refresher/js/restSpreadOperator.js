const person = {
  personName: "John",
  age: 30,
  adress: {
    city: "New York",
    state: "NY",
    country: "USA",
  },
};

const { personName, age, ...rest } = person;
console.log(personName, age, rest);

const personArray = ["John", 30, "New York", "NY", "USA"];
const [personNameArray, ageArray, ...restArray] = personArray;
console.log(personNameArray, ageArray, restArray);

const frontEnd = ["HTML", "CSS", "JavaScript"];
const backEnd = ["Node.js", "Express", "MongoDB"];
const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);

const userObj = {
  name: "Ramesh",
  age: 34,
};

const adminUserObj= {
  ...userObj,
  isAdmin: true,
}
console.log(adminUserObj);
const engineerUser={
  ...userObj,
  isAdmin: false,
  isEngineer: true
}
console.log(engineerUser);

//create array with genres
const genres= ["classical", "fictional" , "horror" , "Thriller"];
const [classG, fictG, ...restG]= genres;
console.log(classG, fictG, restG);
const genresNew= [...genres, "Epic Fantasy"];
console.log(genresNew);


