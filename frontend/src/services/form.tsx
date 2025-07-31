import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  description: string;
}

export async function sendContactForm(data: ContactFormData) {
  const response = await axios.post(`${BASE_URL}/form`, data);
  return response.data;
}