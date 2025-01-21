export interface RegisterPostData {
  fullName: string;
  email: string;
  password: string;
}

export interface User {
  email: string;
}

export interface Login{
    accessToken: string
}


export interface Account{
  id:number,
  username:string,
   rolegroupName:string
}