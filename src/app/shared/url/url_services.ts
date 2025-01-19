import { env } from "../environment/environment";

export const URL={
    Faculty:{
        GETALL:`${env.baseUrl}/Faculty`
    },
    Subject:(pageIndex:number, pageSize:number)=> `${env.baseUrl}/Subject?PageIndex=${pageIndex}&PageSize=${pageSize}`,
    TEACHER:{
        ADD:`${env.baseUrl}/Teacher`,
        GET:`${env.baseUrl}/Teacher?`,
        UPDATE:`${env.baseUrl}/Teacher`,
        DELETE:(id:number)=> `${env.baseUrl}/Teacher/${id}`
    }

} 