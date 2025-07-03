import { motion } from "framer-motion";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const donateSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  metodo: z.string().min(1, "Selecione um método válido"),
  valor: z
    .number({ invalid_type_error: "Digite um valor válido" })
    .positive("O valor deve ser maior que zero"),
});

export const Donate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(donateSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    alert("Doação enviada com sucesso!" + JSON.stringify(data));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-indigo-300 dark:from-gray-800 dark:to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl p-4"
      >
        <Button
          value={"ghost"}
          className="absolute top-20 left-1.5 bg-transparent hover:bg-green-100 text-indigo-600 text-sm"
        >
          <a href="/">Voltar</a>
        </Button>
        <section className="flex-1 max-w-md text-blue-900 dark:text-white">
          <h1 className="text-3xl font-bold text-indigo-900 dark:text-green-600 mb-6">Apoie a MARMO</h1>
          <article className="text-base mt-6 text-gray-700 dark:text-blue-100">
            A sua doação fortalece nossa missão de proteger os ecossistemas marinhos de Moçambique. Utilize um dos métodos abaixo para contribuir de forma rápida e segura.
          </article>
        </section>

        <div className="w-full max-w-md bg-white dark:bg-[#1a263b] shadow-xl rounded-lg p-6 border border-blue-100 dark:border-blue-800">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="grid gap-2">
              <Label htmlFor="nome">
                <span className="font-bold">Nome</span>
              </Label>
              <Input
                id="nome"
                {...register("nome")}
                placeholder="Seu nome"
                className="rounded-md border border-blue-700 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
              />
              {errors.nome && (
                <span className="text-red-500 text-sm">{errors.nome.message}</span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="metodo">
                <span className="font-bold">Método de Doação</span>
              </Label>
              <select
                id="metodo"
                {...register("metodo")}
                className="rounded-md border border-blue-700 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400 py-2 px-3"
              >
                <option value="">Selecione um método</option>
                <option value="mpesa">M-Pesa</option>
                <option value="emola">E-Mola</option>
                <option value="mkesh">M-Kesh</option>
                <option value="bci">BCI</option>
                <option value="mileniumbim">Millennium BIM</option>
                <option value="standardbank">Standard Bank</option>
                <option value="fnb">FNB</option>
              </select>
              {errors.metodo && (
                <span className="text-red-500 text-sm">{errors.metodo.message}</span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="valor">
                <span className="font-bold">Valor (MZN)</span>
              </Label>
              <Input
                id="valor"
                type="number"
                {...register("valor", { valueAsNumber: true })}
                placeholder="Montante a doar"
                className="rounded-md border border-blue-700 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
              />
              {errors.valor && (
                <span className="text-red-500 text-sm">{errors.valor.message}</span>
              )}
            </div>

            <Button
              type="submit"
              className="w-full mt-4 rounded-full bg-green-600 text-white font-semibold hover:scale-105 hover:bg-green-700 transition"
            >
              Doar
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
