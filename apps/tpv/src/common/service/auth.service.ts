import { api } from "./api"

export const signUp = async (payload: any) => {
  return await api.post('auth/register', payload).then((res) => res.data)
}
export const signIn = async (payload: any) => {
  return await api.post('auth/login', payload).then((res) => res.data)
}
