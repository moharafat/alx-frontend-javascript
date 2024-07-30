export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by the specified city
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the grade for the current student
      const gradeEntry = newGrades.find((grade) => grade.studentId === student.id);
      // Return the updated student object with grade
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: gradeEntry ? gradeEntry.grade : 'N/A',
      };
    });
}
