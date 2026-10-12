import "server-only";
import { API_TIMEOUT_MS, FORGE_BACKEND_URL } from "./globalConstants";


export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

type Options = {
  parse ?: string,
  signal?: AbortSignal
};


export async function apiGet<T = string>(
  path: string,
  { parse = "text", signal }: Options = {}
): Promise<T>{
  const res = await fetch(`${FORGE_BACKEND_URL}${path}`, {
    method: "GET",
    cache: "no-store",
    signal: signal ?? AbortSignal.timeout(API_TIMEOUT_MS),
  });
  if (!res.ok) throw new ApiError(res.status, `GET ${path} failed`);
  return (parse === "json" ? res.json() : res.text()) as Promise<T>;
}