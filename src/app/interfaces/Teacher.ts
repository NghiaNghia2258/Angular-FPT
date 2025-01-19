export interface Teacher{
    Code:number,
    FullName:string,
    Email:string,
    Phone:string,
    IdKhoa:number
}


export interface addTeacher{
    fullName: string,
    email: string,
    phone: string,
    facultyId: number,
    subjectIds: number[]
}


export interface GetTeacher{
    id: number,
      code: string,
      fullName: string,
      email: string,
      phone: string
      isDepartmentHead: boolean,
      facultyId: number
}