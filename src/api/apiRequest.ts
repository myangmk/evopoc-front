import { backendApi } from "./config";

export async function executeGet<T>(path: string, onGet: any, onError?: any) {
  const response = await backendApi.get(path);
  onGet(response);
  return response;
}

export async function executePost<T>(
  path: string,
  newItem: object | FormData,
  onPost: any,
  configParam?: object,
  onError?: any,
) {
  const config =
    configParam === undefined
      ? { headers: { "Content-Type": "application/json" } }
      : configParam;
  const response = await backendApi.post(path, newItem, config);
  onPost(response);
  return response;
}

export async function executePut<T>(
  path: string,
  updatedItem: object | FormData,
  onPut: any,
  configParam?: object,
  onError?: any,
) {
  const config =
    configParam === undefined
      ? { headers: { "Content-Type": "application/json" } }
      : configParam;
  const response = await backendApi.put(path, updatedItem, config);
  onPut(response);
  return response;
}
