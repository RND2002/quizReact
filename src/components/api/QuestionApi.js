import { apiClient } from "./ApiClient";

export const getQuestion=()=>apiClient.get(`/question/allQuestion`)