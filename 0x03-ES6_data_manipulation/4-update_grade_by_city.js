export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((elementStudent) => elementStudent.location === city)
    .map((elementStudent) => {
      const grade = newGrades.filter((newGrade) => newGrade.studentId === elementStudent.id);
      if (grade.length === 0) {
        grade.push({ studentId: elementStudent.id, grade: 'N/A' });
      }
      return { ...elementStudent, grade: grade[0].grade };
    });
}
