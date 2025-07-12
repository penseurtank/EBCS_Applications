const users = [
  { firstName: "Ravi", lastName: "Kumar", age: 25, location: "Delhi" },
  { firstName: "Sneha", lastName: "Sharma", age: 30, location: "Mumbai" },
  { firstName: "Amit", lastName: "Verma", age: 28, location: "Bangalore" },
  { firstName: "Pooja", lastName: "Rathi", age: 22, location: "Pune" },
  { firstName: "Raj", lastName: "Singh", age: 35, location: "Delhi" },
];

// Map()
// using arrow funtion...
const resArF = users.map((user) => {
  return user.firstName;
});

// using anonymous function to achive output
const resAF = users.map(function (user) {
  return user.lastName;
});

// using named funtion to achive output
function getUserFName(user) {
  return user.firstName;
}
const resNF = users.map(getUserFName);

//output:-
console.log(
  "result1 map() using arrow fn:",
  resArF,
  "isArray",
  Array.isArray(resArF)
);
console.log(
  "result2 map() using normal fn:",
  resAF,
  "isArray",
  Array.isArray(resAF)
);
console.log(
  "result3 map() using normal fn:",
  resNF,
  "isArray",
  Array.isArray(resNF)
);

// Filter

const resFilter = users
  .filter((user) => user.age < 30)
  .map((user) => {
    const updatedUser = () => {
      return `${user.firstName} ${user.lastName}`;
    };
    return updatedUser();
  });
console.log(
  "showing result who have age less than 30:",
  resFilter,
  "isArray",
  Array.isArray(resFilter)
);

document.getElementById("output").innerHTML = resFilter.join("<br>");

// Reduce
const totalUsersCount = users.reduce((acc, curr) => {
  // toal users count
  return acc + 1;
}, 0);

console.log("total user count:", totalUsersCount);

// total age after adding all users
const totalAge = users.reduce((acc, curr) => {
  // toal users count
  return acc + curr.age;
}, 0);
console.log("total age :", totalAge);

// group by location
const groupbyLocation = users.reduce((acc, curr) => {
  // lets create new array for grouping user by location
  const key = curr.location;
  if (!acc[key]) {
    acc[key] = []; // create new array for that location if doesn't exist
  }
  acc[key].push(curr); // if location is already exist then add user in it.
  return acc; // return updated accumlator
}, {});
console.log("user group by location", groupbyLocation);
