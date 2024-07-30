export default function getStudentIdsSum(studentList) {
  if (studentList instanceof Array) {
    return studentList.reduce((acc, currentStudent) => acc + currentStudent.id, 0);
  }
  return [];
}
