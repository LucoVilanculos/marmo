import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, PhoneCall, PhoneCallIcon, LocateIcon } from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  subject: z.string().min(2, "Assunto é obrigatório"),
  description: z.string().min(5, "Mensagem muito curta"),
});

export const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: any) => {
    alert("Mensagem enviada com sucesso!");
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 font-sans">
      <section className="text-center py-7 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-green-600 drop-shadow-md tracking-wider">
          FALE CONOSCO
        </h1>
      </section>

      <img
		    src="https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/live_ad6irp.jpg"
		    alt="Marmo Pic"
		    className="h-[400px] object-cover mb-2 shadow-md w-full"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl p-4"
      >
        <section className="flex-1 max-w-md text-blue-900 dark:text-white">

          <article className="text-base mt-4 text-gray-6 mb-5 dark:text-blue-100">
            A <span className="font-semibold text-green-600 dark:text-blue-900">MARMO</span> está sempre aberta ao diálogo. Se você tiver dúvidas, sugestões ou quiser apoiar nossa missão, envie-nos uma mensagem através do formulário. Nossa equipa responderá o mais breve possível.
          </article>

          <section className="bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 backdrop-blur-md transition-transform hover:scale-105 rounded-2xl p-6 w-full max-w-xl shadow-2xl space-y-6 animate-fade-in">
            <div className="text-left space-y-3">
              <p className="flex"><span className="font-semibold text-blue-950 dark:text-green-600 flex mr-1"><Mail size={24}/> Email:</span> <a href="mailto:marmo@gmail.com" className="underline">marmo@gmail.com</a></p>
              <p className="flex"><span className="font-semibold text-blue-950 dark:text-green-600 flex mr-1"><PhoneCall size={24}/> Contacto:</span> +258 86 000 0000</p>
              <p className="flex"><span className="font-semibold text-blue-950 dark:text-green-600 flex mr-1"><PhoneCallIcon size={24}/> Opcional:</span> +258 83 114 0000</p>
              <p className="flex"><span className="font-semibold text-blue-950 dark:text-green-600 flex mr-1"><LocateIcon size={24}/> Endereço:</span> Av. Mao Tse Tung</p>
            </div>
          </section>
          
        </section>
        

        <Card className="w-full max-w-md shadow-xl border border-blue-100 bg-white dark:bg-[#1a263b] dark:text-white transition-transform hover:scale-105">
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="py-4">
              <div className="flex flex-col gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">
                    <span className="font-bold">Nome</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="rounded-md border border-blue-6 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
                  />
                  {errors.name && <span className="text-sm text-red-600">{errors.name.message}</span>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">
                    <span className="font-bold">E-mail</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="rounded-md border border-blue-6 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
                  />
                  {errors.email && <span className="text-sm text-red-600">{errors.email.message}</span>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">
                    <span className="font-bold">Assunto</span>
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    {...register("subject")}
                    className="rounded-md border border-blue-6 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
                  />
                  {errors.subject && <span className="text-sm text-red-600">{errors.subject.message}</span>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">
                    <span className="font-bold">Mensagem</span>
                  </Label>
                  <textarea
                    id="description"
                    rows={4}
                    {...register("description")}
                    className="rounded-md border border-blue-6 focus:ring-2 focus:ring-blue-400 bg-white py-2 px-4 dark:bg-[#28335a] dark:text-white dark:border-blue-400"
                  />
                  {errors.description && <span className="text-sm text-red-600">{errors.description.message}</span>}
                </div>
              </div>
              <CardFooter className="flex-col gap-2 px-0">
                <Button
                  type="submit"
                  className="w-full mt-6 rounded-full bg-green-600 text-white font-semibold hover:scale-105 hover:bg-green-800 transition"
                >
                  Submeter
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
