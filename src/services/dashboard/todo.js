import { baseApi } from "@/plugins/axios";

const api = '/api/todo';

const list = () => baseApi.get(`${api}`);
const add = (body) => baseApi.post(`${api}`, body)
const del = (id) => baseApi.delete(`${api}/${id}`);
const getById = (id) => baseApi.get(`${api}/${id}`)
const update = (id, body) => baseApi.put(`${api}/${id}`, body);


export { add, list, getById, del, update };