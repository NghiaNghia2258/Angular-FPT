export interface Teacher{
    Code:string,
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