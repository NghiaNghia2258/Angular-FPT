export interface Student {
    Code: string;
    FullName: string;
    EnrollmentYear: number;
    Status: number;
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
  