import axios from "axios";
import { getCookie } from 'cookies-next';
export const isProd = process.env.NODE_ENV === 'production';
export const api = axios.create({
    baseURL: isProd ? 'http://localhost:8000/' : 'http://localhost:8000/api/',
    timeout: 10000,
    headers: {
        'X-Custom-Header': 'foobar',
        // Authorization: `Bearer ${getCookie("token")}`,
    }
});
export const setTokenApi = (token: string) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // @ts-ignore
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
    return api
}