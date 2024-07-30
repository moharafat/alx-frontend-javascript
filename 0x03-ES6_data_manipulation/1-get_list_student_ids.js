export default function getListStudentIds(stList) {
  if (stList instanceof Array) {
    return stList.map((elementStudent) => elementStudent.id);
  }
  return [];
}
