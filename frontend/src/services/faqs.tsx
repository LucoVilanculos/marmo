import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export interface FaqData {
  question: string;
  answer?: string; 
}

export async function createFaq(data: { question: string }) {
  const res = await axios.post(`${BASE_URL}/faq`, data);
  return res.data;
}

export async function updateFaq(id: string, data: { answer: string }, token: string) {
  const res = await axios.put(`${BASE_URL}/faq/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
}

export async function getFaqs() {
  const res = await axios.get(`${BASE_URL}/faq`);
  return res.data.faqs;
}