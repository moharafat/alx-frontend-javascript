export default function getStudentsByLocation(stList, city) {
  if (stList instanceof Array) {
    return stList.filter((elementStudent) => elementStudent.location === city);
  }
  return [];
}
