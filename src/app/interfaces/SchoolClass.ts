export interface SchoolClass {
    Code:string,
    HomeroomTeacherId:string,
    MaxStudents:number,
    Status:number
  }


export interface GetSchoolClass{
      id: number,
      code: string,
      homeroomTeacherId?: number,
      maxStudents: number,
      availableSlots: number,
      status: number,
      majorId: number,
      majorName: string
}
  