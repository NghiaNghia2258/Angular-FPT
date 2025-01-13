import { env } from "../environment/environment";

export const URL={
    Faculty:`${env.baseUrl}/api/Faculty`,
    Subject:(pageIndex:number, pageSize:number)=> `${env.baseUrl}/api/Subject?PageIndex=${pageIndex}&PageSize=${pageSize}`,
    TEACHER:{
        ADD:`${env.baseUrl}/api/Teacher`,
        GET:`${env.baseUrl}/api/Teacher?`,
        UPDATE:`${env.baseUrl}/api/Teacher`,
        DELETE:(id:number)=> `${env.baseUrl}/api/Teacher/${id}`
    }
} 