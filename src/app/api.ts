import { isDevMode } from '@angular/core';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
export const baseURL = isDevMode()
  ? `http://localhost:4001`
  : `https://VOR_DOMAIN.com`;
let client = axios.create({
  baseURL,
});
export const initializeAxios = (token: string | null) => {
  client = axios.create({
    baseURL,
    headers: token
      ? {
          'magic-token': token,
        }
      : {},
  });
};

function handleResponse(res: AxiosResponse) {
  return res.data;
}

async function axiosGet<T = any>(url: string, config?: AxiosRequestConfig) {
  try {
    const res = await client.get(url, config);
    return handleResponse(res) as T;
  } catch (e: any) {
    if (e instanceof AxiosError) {
      if (![401, 409].includes(e.response?.status ?? 0)) {
        alert(`Error: ${e.message}`);
      }
    }
    throw e;
  }
}

async function axiosPost<T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) {
  try {
    const res = await client.post(url, data, config);
    return handleResponse(res) as T;
  } catch (e: any) {
    if (e instanceof AxiosError) {
      if (![401, 409].includes(e.response?.status ?? 0)) {
        alert(`Error: ${e.message}`);
      }
    }
    throw e;
  }
}

async function axiosPut<T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) {
  try {
    const res = await client.put(url, data, config);
    return handleResponse(res) as T;
  } catch (e: any) {
    if (e instanceof AxiosError) {
      if (![401, 409].includes(e.response?.status ?? 0)) {
        alert(`Error: ${e.message}`);
      }
    }
    throw e;
  }
}

async function axiosDelete<T = any>(url: string, config?: AxiosRequestConfig) {
  try {
    const res = await client.delete(url, config);
    return handleResponse(res) as T;
  } catch (e: any) {
    if (e instanceof AxiosError) {
      if (![401, 409].includes(e.response?.status ?? 0)) {
        alert(`Error: ${e.message}`);
      }
    }
    throw e;
  }
}

const api = {
  get: axiosGet,
  post: axiosPost,
  delete: axiosDelete,
  put: axiosPut,
};

export default api;
