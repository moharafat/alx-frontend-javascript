export default function getListStudentIds(stList) {
  if (stList instanceof Array) {
    return stList.map((element) => element.id);
  }
  return [];
}
