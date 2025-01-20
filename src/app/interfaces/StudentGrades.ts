export interface StudentGrades{
    id: number,
    studentId: number,
    subjectId: number,
    practicalGrade: number,
    homeworkGrade: number,
    examGrade: number,
    attendanceGrade: number,
    version:number
}


export interface AddGradeStudent{
    studentId: number,
    subjectId: number,
    practicalGrade: number,
    homeworkGrade: number,
    examGrade: number,
    attendanceGrade: number,
    version: number
  }