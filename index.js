const first_name = "Genesis";
const last_name = "Pro";

function first_promise() {
  return new Promise(function (resolve, reject) {
    resolve(`my name is ${first_name} ${last_name}`);
  });
}

function second_promse(data) {
  return new Promise(function (resolve, reject) {
    resolve(data + " & i'm a software engineer");
  });
}
first_promise().then(function (data) {
  return second_promse(data).then(function (data) {
    console.log(data);
  });
});

//Data types

//numbers
let size_in_meters = 20; //integar
console.log(size_in_meters);
let size_in_inches = 2.1024; //floating point number
console.log(size_in_inches);
let maxsize = Infinity; //positive infinity
console.log(maxsize);
let minsize = -Infinity; //negative infinity
let not_a_number = NaN; //not a number

//BigInt = This are number values that are larger for integars to hold
let very_Big_int = 8990590088588585888585885858n;
let another_very_big_number = BigInt(699605049449484938490339838993388494);

//Boolean
let is_big_size = true;
let is_small_size = false;

//Null = is a datatype representing nothing or empty...
let size = null;
console.log(size === null);

//Undefined = means no value have been assigned
let weight; //the variable size is set to be undefined by default..
let weighty = undefined; //this can be done explicitly, but not recommended...
console.log(weight);

//objects = used to store a collection of different typs of values.
let User1 = {}; //recommended when creating objects...

let User2 = new Object(); //barely used and explicit...

User1["name"] = "genesis";
User1["age"] = 20;
User1["username"] = "genesis_44";
User1["profile settings"] = { theme: "dark", font_size: 20 };
//console.log(User1["profile settings"]) SQUARE BRACKETs NOTATION..
console.log(User1.name); //Dot Notation...

let user = {
  name: "genesis",
  age: 17,
  job: "SE",
};
delete user.name;
console.log(user);

//Updating a value in an Object...

user["age"] = 16;
delete user.job;
console.log(user);

//get all values in an object
console.log(user.values); //or

console.log(Object.values(User1));
console.log(Object.keys(User1));

//Note : single values are called primitive types...

//Strings = used to manipulate a sequence of characters
let name1 = "Genesis Pro"; //double qoute
let name2 = "King Prec"; //single qoute
let name3 = `jeez`; //backtick

let fullname = `${name1} and ${name2} are coursemates`;
console.log(fullname);

let message =
  "hello friends\n my name is Genesis \n and I am a software engineer "; // \n is a special character in javascript representing next line....
console.log(message.toUpperCase());

console.log(message.startsWith("hello")); //returns true

console.log(message.indexOf("my")); //return the position of a substring

console.log(message.endsWith("engineer"));

console.log(message.includes("Genesis"));

console.log("\u{1F600}");
console.log("\u{1F60D}");
console.log("\u{1F606}");
console.log("\u{1F603}");
console.log("\u{1F602}");
console.log("\u{1F601}");
console.log("\u{1F607}");
console.log("\u{1F608}");
console.log("\u{1F609}");
console.log("\u{1F502}");
console.log("\u{1F403}");
console.log("\u{1F703}");
console.log("\u{1F60}");
console.log("\u{1F60d}");

//Operators = is a reserved syntax consisting of puntuation an alphanumeric characters used for built-in function
//An operator can be Urany, binary or tenary...

//mathematical operators

let sum = 20 + 20;

let substract = 20 - 10;

let muliply = 20 * 2;

let division = 20 / 10;

let remainder = 20 % 2;

let exponetial = 2 ** 2;

//comparison operators = comparison operators return a boolean value

//greater than
console.log(2 > 1);

//less than
console.log(1 < 2);

//greater than or equal to
console.log(2 >= 2);

//less than or equal to
console.log(2 <= 1);

//Equality
console.log(2 == 1);

//inEquality
console.log(2 != 1);

//Assignment Operators

let quantity = 21;

if (quantity == 20) {
  console.log("quantity is equal to 20");
} else {
  console.log("quantity is not equal to 20");
}

//increment operator
quantity++; //increase the value of the quantity by 1....

console.log(quantity);

//Decrement operator
quantity--; //decreases the value of the quantity by 1....

console.log(quantity);

//Boolean operators

//Logical OR(||)

console.log(true || true);
console.log(false || true);
console.log(false || false);

//Logical AND (&&)
console.log(true && true);
console.log(false && true);
console.log(false && false);

//Logical NOT (!)
console.log(!true);
console.log(!false);

//Precedence

let principal = 1000;
let rate = 0.05;
let years = 10;

let simpleinterest = (principal * rate * years) / 100;

console.log(simpleinterest);

console.log(`i'm so handsome \u{1F60d}\u{1F60d}`);

//Conditionals...

//if statement...

let day = "sunday";

if (day == "saturday") {
  console.log("today is the same ol day");
}

let sixers = 20; //points

if (sixers == 20) {
  console.log("yooooooo \u{1F60d} \u{1F60d} \u{1F60d}");
  console.log("thank you");
}

//if-else statement...

if (sixers == 25) {
  console.log("hey lets hoop");
  console.log("thanks");
} else {
  console.log("i ain't getting involved in that shit");
}

//nested if-else statement..

if (day == "saturday") {
  console.log("yoo, i just finished my memorial");
} else if (day == "tuesday") {
  console.log("i have meeting to attend on tuesday");
} else if (day == "monday") {
  console.log("here we keep grinding again");
} else {
  console.log("today neither tuesday, monday nor saturday");
}

//tenary operator = they usually operates on three values....

let age = "18";

let canCode = age >= 18 ? true : false;
console.log(canCode);

//Note: unary operates on one value while binary operates on two values...

//Switch statement = can replace multiple (if) checks. It gives a clearer way of comparing a value with multiple variats

let drip = "shirt";

switch (drip) {
  case "shirt":
    console.log("hey");
    break;
  case "trousers":
    console.log("xup")
    break;
  case "socks":
    console.log("yooo")
    break;
  default:
    console.log("A'yo out");
    break;
}

//Loops = loops are used to create repeated actions base on a condition..
// A single excution in a loop is called an iteration....

//for..loop
for (let i = 0; i < 10; i++) {
  console.log("is now", i);
}

//while...loop
let b = 0;
while (b < 10) {
  console.log(b);
  b++;
}

//do-while....loop = the code runs atleast once before the loop start
let j = 0;

do {
  console.log(j);
  j++;
} while (j < 3);

//for-of...loop = it is used to loop over iteratable properties...

const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}

//for-in...loop = loops over enumerable properties of an object...

const dave = {
  name: "john",
  age: 20,
  city: "lagos",
};

for (const key in user) {
  console.log(key);
  console.log(`this key is ${user[key]} and the value is : ${user[key]}`);
}

// const person = {
//    name: "Genesis",
//    age: 17,
//    carrer: "software engineer",
// }
// localStorage.setItem("name", person.name)

// sessionStorage.setItem("name", person.name)

//functions = functions are blocks of code used to perform a specific task....
//used to write many codes without repitition...

function summ() {
  let result = 20 + 20;
  console.log(`the result is ${result}`);
}
summ();

let count = 0;

//without parameters.....

function addtocount() {
  let localcount = 0;
  count = count + 1; //adding to global variable count
  localcount = localcount + 1;

  console.log("count is ", count);
  console.log("localcount is: ", localcount);
}

addtocount();

//function with parameters... are datas passed down using parathesis;;
function para(firstname = "", secondname = "", age = "16", height = "6") {
  console.log(firstname + " " + secondname + " " + age + " " + height);
}
para("genesis", "pro");

function plus(a, b) {
  console.log("the sum is :", a + b);
}
plus(2, 2);

//function with returns

function ret(first = "", last = "") {
  const fully = first + " " + last;
  return fully;
}
let names = ret("genesis", "pro");
console.log(names);

function subb(b, c) {
  const subbb = b - c;
  return subbb;
}

const process = subb(4, 2);
console.log(process);

function performmathoperation(num1, num2, operationtype) {
  if (operationtype == "add") {
    const result = num1 + num2;
    return result;
  } else if (operationtype == "sub") {
    const result = num1 - num2;
    return result;
  } else {
    console.log("operation not supported");
  }

  console.log("end of function!!!");
}

const sumResult = performmathoperation(30, 20, "div");
console.log(sumResult);

//fucntion expression..... it is called function expression because yor assigning a variable to the function.
const sayhello = function () {
  console.log("hello world");
};
sayhello();

const sayMyName = function (mainname) {
  console.log(`your name is ${mainname}`);
};

sayMyName("genesis pro the OG");

//calllback function.... are like values , and they can be assigned as well as passed around just like variables

function displayUser(displaytype, showfullname, showUsername) {
  if (displayUser == "full") {
    showfullname();
  } else {
    showUsername();
  }
}

function showfullname() {
  console.log("john doe");
}

function showUsername() {
  console.log("davidson");
}

displayUser("full", showfullname, showUsername);

const sayhi = function (mainmessage) {
  return console.log(`Hi from ${mainmessage}`);
};
sayhi("genesis");

function performops(name1, name2, optype) {
  if (optype == "firstname") {
    const name = name1;
    console.log(name);
  } else if (optype == "lastname") {
    const name = name2;
    console.log(name);
  } else if (optype == "fullname") {
    const name = name1 + " " + name2;
    console.log(name);
  } else {
    console.log("unsuported format");
  }
  console.log("thanks");
}
const fullinfo = performops("genesis", "pro", "fullname");
console.log(fullinfo);

const saymyname = function (myname) {
  console.log(`my name is ${myname}`);
};
saymyname("genesis");


const company = {}

company["brand"] = "base";
company["age"] = 3;
company["token"] = "$BASE";

console.log(company.token)

 
console.log("\u{1F600}");