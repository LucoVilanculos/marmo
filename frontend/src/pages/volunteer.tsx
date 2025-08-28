import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { sendVolunteerForm } from "../services/volunteer";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  surname: z.string().min(2, "Apelido obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .regex(/^(8[234567])\d{7}$/, "Número deve começar com 82/83/84/85/86/87 e ter 9 dígitos"),
  gender: z.enum(["masculino", "feminino", "outros", "prefiro não dizer"], {
    required_error: "Selecione o sexo",
  }),
});

type FormData = z.infer<typeof schema>;

export const Volunteer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await sendVolunteerForm(data);
      alert("Obrigado por se candidatar! ☺");
    } catch (error: any) {
      alert(
        error?.response?.data?.message ||
        "Erro ao enviar candidatura. Tente novamente."
      );
    }
  };

  return (
    <main
      className="font-sans bg-gradient-to-b from-blue-100 to-green-100 dark:from-gray-900 dark:to-gray-800 min-h-screen"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Hero Section */}
      <div className="relative w-full h-[400px] mb-2">
        <img
          src="https://res.cloudinary.com/dtopurogz/image/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg"
          alt="Voluntariado MARMO"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-blue-900/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl md:text-7xl font-black text-blue-600 dark:text-green-600 drop-shadow-md tracking-wider text-center">
            QUER SER VOLUNTÁRIO?
          </h1>
        </div>
      </div>

      <section className="flex flex-col items-center gap-10 w-full max-w-6xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl text-center md:text-left"
        >
          <p className="text-lg text-gray-700 dark:text-green-100">
            A <span className="font-bold text-green-600 dark:text-green-600">MARMO</span> convida você a fazer parte da transformação. Seja voluntário e ajude a proteger o mar moçambicano e suas comunidades costeiras.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-md"
        >
          <Card className="shadow-xl border border-blue-100 bg-white dark:bg-[#1a263b] dark:text-white transition-transform hover:scale-105 active:scale-95 mb-5">
            <CardHeader>
              <CardTitle className="text-green-600 text-center text-xl">Candidatura a Voluntário</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" {...register("name")} />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="surname">Apelido</Label>
                  <Input id="surname" {...register("surname")} />
                  {errors.surname && <p className="text-red-500 text-sm">{errors.surname.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register("email")} />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Número de Telefone</Label>
                  <div className="flex gap-2">
                    <span className="px-3 py-2 bg-blue-100 dark:bg-blue-900 text-sm rounded-l-md text-gray-600 dark:text-white">+258</span>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="84xxxxxxx"
                      className="flex-1 rounded-l-none"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
                <div>
                  <Label htmlFor="gender">Sexo</Label>
                  <Select {...register("gender") as any}>
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="masculino">Masculino</SelectItem>
                      <SelectItem value="feminino">Feminino</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                      <SelectItem value="prefiro não dizer">Prefiro não dizer</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
                </div>
                <Button
                  type="submit"
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold"
                >
                  Submeter
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
};
