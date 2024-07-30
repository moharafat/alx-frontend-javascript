export default function getStudentsByLocation(stList, location) {
  return stList.fiter(elementStudent => elementStudent.location);
}
