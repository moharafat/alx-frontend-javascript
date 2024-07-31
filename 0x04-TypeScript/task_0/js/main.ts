interface Student {
  firstName : string,
  lastName : string,
  age : number,
  location : string
}

let Mohamed: Student = {
  firstName: "Mohamed",
  lastName: "Arafat",
  age: 27,
  location: "Egypt"
}

let a7ma: Student = {
  firstName: "A7ma",
  lastName: "Khalil",
  age: 25,
  location: "Egypt"
}

let  studentList: Student[] = [Mohamed, a7ma];

function render_Table() {
  document.createElement("DIV");
}

render_Table()
