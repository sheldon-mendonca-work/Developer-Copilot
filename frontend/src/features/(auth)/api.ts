import { apiGet } from "@/lib/api-client";

export const getHello = () => apiGet("/hello");