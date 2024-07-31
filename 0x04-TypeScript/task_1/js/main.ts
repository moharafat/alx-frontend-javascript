interface Teacher {
  readonly firstName : string,
   readonly lastName : string,
  fullTimeEmployee : boolean,
  yearsOfExperience? : number,
  location : string
  [ket: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
