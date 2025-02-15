import { env } from "../environment/environment";

export const URL={
    Faculty:{
        GETALL:`${env.baseUrl}/Faculty`,
        GETMAJORBYID:(Id:number)=>`${env.baseUrl}/Faculty/get-marjors-by-id/${Id}`
    },
    Subject:(pageIndex:number, pageSize:number)=> `${env.baseUrl}/Subject?PageIndex=${pageIndex}&PageSize=${pageSize}`,
    Subject_IDKhoa:(idKhoa:number)=>`${env.baseUrl}/Subject?FacultyId=${idKhoa}&PageIndex=1&PageSize=50`,
    TEACHER:{
        ADD:`${env.baseUrl}/Teacher`,
        GET:`${env.baseUrl}/Teacher?PageIndex=1&PageSize=10`,
        GET_BY_ID:(id:number)=>`${env.baseUrl}/Teacher/${id}`,
        UPDATE:`${env.baseUrl}/Teacher`,
        DELETE:(id:number)=> `${env.baseUrl}/Teacher/${id}`,
        GETGRADE_IdClass_IdSubject:`${env.baseUrl}/Teacher/get-grade-by-classId-subjectId?`,
        UPDATE_GRADE_STUDENT:`${env.baseUrl}/Teacher/update-grade`,
        GETTEACHERREVIEW_BY_ID:(id:number)=>`${env.baseUrl}/Teacher/get-feedbacks?TeacherId=${id}&PageIndex=1&PageSize=10`
    },
    STUDEN:{
        GET:`${env.baseUrl}/Student`,
        ADD:`${env.baseUrl}/Student`,
        DELETE:(id:number)=>`${env.baseUrl}/Student/${id}`,
        GETSTUDENT_IDCLASS:(Id:number)=>`${env.baseUrl}/Student/get-by-class-id?schoolClassId=${Id}`,
        GETGRADEBYID:(Id:number)=>`${env.baseUrl}/Student/get-grades/${Id}`,
        TEACHEREVIEW:`${env.baseUrl}/Student/feedback`,
    },
    CLASS:{
        GET:`${env.baseUrl}/SchoolClass`,
        GET_ByID:(id:number)=>`${env.baseUrl}/SchoolClass/${id}`,

        UPDATE:`${env.baseUrl}/SchoolClass`,
        DELETE:(Id:number)=>`${env.baseUrl}/SchoolClass/${Id}`,
        ADD_STUDENT:`${env.baseUrl}/SchoolClass/add-students-to-class`,
        DEL_STUDENT:(idStudent:number,idClass:number)=> `${env.baseUrl}/SchoolClass/remove-student-from-class?studentId=${idStudent}&schoolClassId=${idClass}`
    },
    ACCOUNT:{
        GET:`${env.baseUrl}/Auth/get-all?PageIndex=1&PageSize=10`,
        UPDATE:`${env.baseUrl}/Auth/change-pass`,
    }

} 