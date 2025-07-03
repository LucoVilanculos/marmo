export interface VolunteerProps {
  name: string;
  surname: string;
  email: string;
  phone: string;
  gender: "masculino" | "feminino" | "outros" | "prefiro não dizer";
  createdAt?: Date;
}