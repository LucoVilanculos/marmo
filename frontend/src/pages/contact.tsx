import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0e1a2b]">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl p-4"
      >
        {/* Texto de contato */}
        <section className="flex-1 max-w-md text-blue-900 dark:text-white">
          <h1 className="text-3xl font-bold text-green-600 mb-6">Fale Connosco</h1>
          <article className="text-base mt-6 text-gray-700 dark:text-blue-100">
            A <span className="font-semibold text-green-600">MARMO</span> está sempre aberta ao diálogo. Se você tiver dúvidas, sugestões ou quiser apoiar nossa missão, envie-nos uma mensagem através do formulário. Nossa equipa responderá o mais breve possível.
          </article>
        </section>

        {/* Formulário */}
        <Card className="w-full max-w-md shadow-xl border border-blue-100 bg-white dark:bg-[#1a263b] dark:text-white">
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
                    className="rounded-md border border-blue-700 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
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
                    className="rounded-md border border-blue-700 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
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
                    className="rounded-md border border-blue-700 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
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
                    className="rounded-md border border-blue-700 focus:ring-2 focus:ring-blue-400 bg-white py-2 px-4 dark:bg-[#28335a] dark:text-white dark:border-blue-400"
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
