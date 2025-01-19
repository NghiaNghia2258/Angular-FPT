export interface Student {
    id: number,
      code: string,
      fullName: string,
      country: string,
      city: string,
      district: string,
      ward: string,
      gender: string,
      identityCardNumber: string,
      dateOfBirth: Date,
      enrollmentYear: number,
      status: number
  }
  
  export interface StudentAdd {
    fullName: string,
    country: string,
    city: string,
    district: string,
    ward: string,
    gender: string,
    identityCardNumber: string,
    dateOfBirth: Date,
    majorId: number,
    majorCode: string
  }
  