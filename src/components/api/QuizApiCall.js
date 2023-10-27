
import { apiClient } from "./ApiClient";



export const createQuizWithForm=(category,num,title,token)=>apiClient.post(`/quiz/create?category=${category}&num=${num}&title=${title}`,category,num,title,token)