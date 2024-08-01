interface DirectorInterface {
  workFromHome() : string,
  getCoffeeBreak() : string,
  workDirectorTasks() : string
}

interface TeacherInterface {
  workFromHome() : string,
  getCoffeeBreak() : string,
  workTeacherTasks() : string
}


class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director

export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}
export function executeWork(employee: Director | Teacher): string {
  if (employee instanceof Director ){
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = 'Math' | 'History';
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
