import { env } from "../environment/environment";

export const URL={
    Faculty:{
        GETALL:`${env.baseUrl}/Faculty`,
        GETMAJORBYID:(Id:number)=>`${env.baseUrl}/Faculty/get-marjors-by-id/${Id}`
    },
    Subject:(pageIndex:number, pageSize:number)=> `${env.baseUrl}/Subject?PageIndex=${pageIndex}&PageSize=${pageSize}`,
    TEACHER:{
        ADD:`${env.baseUrl}/Teacher`,
        GET:`${env.baseUrl}/Teacher?PageIndex=1&PageSize=10`,
        UPDATE:`${env.baseUrl}/Teacher`,
        DELETE:(id:number)=> `${env.baseUrl}/Teacher/${id}`
    },
    STUDEN:{
        GET:`${env.baseUrl}/Student`,
        ADD:`${env.baseUrl}/Student`,
        DELETE:(id:number)=>`${env.baseUrl}/Student/${id}`
    }

} 