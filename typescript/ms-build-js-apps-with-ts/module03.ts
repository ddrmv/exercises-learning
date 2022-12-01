///////////////
// Interfaces
///////////////

interface EmployeeX {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: EmployeeX = {
  firstName: "Emil",
  lastName: "Andersson",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
};

// properties (members) can be required, optional? or readonly
// interface IceCream {
//   flavor: string; // required by default
//   scoops?: number; // optional
//   readonly solid: boolean; // only modified when an object is created
// }

interface IceCream {
  flavor: string;
  scoops: number;
}

let myIceCream: Sundae = {
  flavor: "vanilla",
  scoops: 2,
  sauce: "caramel",
  nuts: true,
};

console.log(myIceCream.flavor);

const tooManyScoops = (dessert: Sundae): string => {
  if (dessert.scoops >= 4) {
    return dessert.scoops + " is too many scoops";
  } else {
    return "Your order will be ready soon!";
  }
};

console.log(
  tooManyScoops({ flavor: "chocolate", scoops: 22, sauce: "chocolate" })
);

interface Sundae extends IceCream {
  sauce: "chocolate" | "caramel" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: boolean;
}

//////////////////////////
// indexable arrays
//////////////////////////

interface IcecreamArray {
  [index: number]: string;
}

let myIcecream: IcecreamArray;
myIcecream = ["chocolate", "vanilla", "strawberry"];
let myStr: string = myIcecream[0];
console.log(myStr);

// describe a JavaScript API using an interface
const fetchURL = "https://jsonplaceholder.typicode.com/posts";
// interface describing the shape of json data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (url: string) => {
  let response = await fetch(url);
  let body = await response.json();
  return body as Post[];
};

const showPost = async () => {
  let posts = await fetchPosts(fetchURL);
  // display the contents of the first item in the response
  let post = posts[0];
  console.log("Post #" + post.id);
  // if the userId is 1, then thisplay a not that it's an administrator
  console.log(
    "Author: " + (post.userId === 1 ? "Administrator" : post.userId.toString())
  );
  console.log("Title: " + post.title);
  console.log("Body: " + post.body);
};

showPost();

//////////////////////////////////////////
// Lab - Use interfaces in TypeScript
//////////////////////////////////////////

interface Loan {
  principal: number;
  interestRate: number; // interest rate for percent (14 is for 14%)
}

interface conventionalLoan extends Loan {
  months: number; // total number of months
}

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

const calculateInterestOnlyLoanPayment = (loanTerms: Loan): string => {
  // Calculates the monthly payment of an interest only loan
  let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
  let payment;
  payment = loanTerms.principal * interest;
  return "The interest only loan payment is " + payment.toFixed(2);
};

/*  TODO: Update the calculateConventionalLoanPayment function. */

const calculateConventionalLoanPayment = (loanTerms: conventionalLoan) => {
  // Calculates the monthly payment of a conventional loan
  let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
  let payment;
  payment =
    (loanTerms.principal * interest) /
    (1 - Math.pow(1 / (1 + interest), loanTerms.months));
  return "The conventional loan payment is " + payment.toFixed(2);
};

let interestOnlyPayment = calculateInterestOnlyLoanPayment({
  principal: 30000,
  interestRate: 5,
});
let conventionalPayment = calculateConventionalLoanPayment({
  principal: 30000,
  interestRate: 5,
  months: 180,
});

console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"
