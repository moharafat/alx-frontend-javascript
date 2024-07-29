export default function getListStudentIds(stList) {
  if (stList instanceof Array) {
    return stList.map((student) => student.id);
  }
  return [];
}
