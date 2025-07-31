import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export interface VolunteerFormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  gender: "masculino" | "feminino" | "outros" | "prefiro não dizer";
}

export async function sendVolunteerForm(data: VolunteerFormData) {
  const response = await axios.post(`${BASE_URL}/volunteer`, data);
  return response.data;
}

export async function getVolunteers(token: string) {
  return axios
    .get(`${BASE_URL}/volunteer`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);
}

export async function deleteVolunteer(id: string, token: string) {
  return axios
    .delete(`${BASE_URL}/volunteer/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);
}