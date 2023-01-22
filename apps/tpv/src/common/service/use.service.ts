import { api } from "./api"

export const getUser = async () => {
  return await api.get(`user`).then((res) => res.data)
}
export const update = async (payload: any) => {
  return await api.put(`user/${payload._id}`, payload).then((res) => res.data)
}
