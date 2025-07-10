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
  numero: z
    .string()
    .optional(),
  conta: z
    .string()
    .optional(),
}).superRefine((data, ctx) => {
  if (["mpesa", "emola", "mkesh"].includes(data.metodo)) {
    if (!data.numero || !/^\+258\d{9}$/.test(data.numero)) {
      ctx.addIssue({
        path: ["numero"],
        code: z.ZodIssueCode.custom,
        message: "Número deve estar no formato +258XXXXXXXXX (9 dígitos após +258)",
      });
    }
  }
  
  if (data.metodo === "bci" && (!data.conta || !/^\d{13}$/.test(data.conta))) {
    ctx.addIssue({
      path: ["conta"],
      code: z.ZodIssueCode.custom,
      message: "Número de conta inválido para BCI (13 dígitos)",
    });
  }
  if (data.metodo === "mileniumbim" && (!data.conta || !/^\d{11}$/.test(data.conta))) {
    ctx.addIssue({
      path: ["conta"],
      code: z.ZodIssueCode.custom,
      message: "Número de conta inválido para Millennium BIM (11 dígitos)",
    });
  }
  if (data.metodo === "standardbank" && (!data.conta || !/^\d{13}$/.test(data.conta))) {
    ctx.addIssue({
      path: ["conta"],
      code: z.ZodIssueCode.custom,
      message: "Número de conta inválido para Standard Bank (13 dígitos)",
    });
  }
  if (data.metodo === "fnb" && (!data.conta || !/^\d{10}$/.test(data.conta))) {
    ctx.addIssue({
      path: ["conta"],
      code: z.ZodIssueCode.custom,
      message: "Número de conta inválido para FNB (10 dígitos)",
    });
  }
});

export const Donate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(donateSchema),
    mode: "onBlur",
  });

  const metodo = watch("metodo");

  const onSubmit = (data: any) => {
    alert("Doação enviada com sucesso!\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div className="min-h-screen flex flex-col p-4 items-center bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 font-sans">
      <Button
        value={"ghost"}
        className="absolute top-20 left-1.5 bg-transparent hover:bg-green-100 text-blue-600 text-sm"
      >
        <a href="/">Voltar</a>
      </Button>

      <section className="text-center py-7 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-green-600 drop-shadow-md tracking-wider">
          QUER APOIAR A MARMO?
        </h1>
      </section>

      <img
		    src="https://res.cloudinary.com/dtopurogz/image/upload/v1752137312/mar_neqgan.jpg"
		    alt="Marmo Pic"
		    className="h-[400px] object-cover mb-2 shadow-md w-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center p-4 "
      >
        <section className="max-w-xl mb-4 text-blue-900 dark:text-white">
          <article className="text-base text-gray-600 dark:text-blue-100">
            A sua doação fortalece nossa missão de proteger os ecossistemas marinhos de Moçambique. Utilize um dos métodos abaixo para contribuir de forma rápida e segura.
          </article>
        </section>

        <div className="w-full max-w-md shadow-xl border border-blue-100 bg-white dark:bg-[#1a263b] dark:text-white transition-transform hover:scale-105 mb-5 p-6 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="grid gap-2">
              <Label htmlFor="nome">
                <span className="font-bold">Nome</span>
              </Label>
              <Input
                id="nome"
                {...register("nome")}
                placeholder="Seu nome"
                className="rounded-md border border-blue-600 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
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
                className="rounded-md border border-blue-600 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400 py-2 px-3"
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

            {["mpesa", "emola", "mkesh"].includes(metodo) && (
              <div className="grid gap-2">
                <Label htmlFor="numero">
                  <span className="font-bold">Número de Telefone</span>
                </Label>
                <div className="flex items-center">
                  <span className="px-2 py-2 rounded-l-md border border-blue-600 bg-gray-100 dark:bg-[#28335a] dark:text-white border-r-0 select-none">
                    +258
                  </span>
                  <Input
                    id="numero"
                    {...register("numero")}
                    maxLength={9}
                    minLength={9}
                    pattern="\d{9}"
                    placeholder="Ex: 841234567"
                    className="rounded-l-none rounded-r-md border border-blue-600 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
                    inputMode="numeric"
                    autoComplete="off"
                  />
                </div>
                {errors.numero && (
                  <span className="text-red-500 text-sm">{errors.numero.message}</span>
                )}
                <div className="mt-1 text-xs text-blue-600 dark:text-blue-200">
                  Digite apenas os 9 dígitos do número (ex: 841234567)
                </div>
              </div>
            )}

            {["bci", "mileniumbim", "standardbank", "fnb"].includes(metodo) && (
              <div className="grid gap-2">
                <Label htmlFor="conta">
                  <span className="font-bold">Número da Conta</span>
                </Label>
                <Input
                  id="conta"
                  {...register("conta")}
                  placeholder={
                    metodo === "bci"
                      ? "13 dígitos"
                      : metodo === "mileniumbim"
                      ? "11 dígitos"
                      : metodo === "standardbank"
                      ? "13 dígitos"
                      : "10 dígitos"
                  }
                  className="rounded-md border border-blue-600 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
                />
                {errors.conta && (
                  <span className="text-red-500 text-sm">{errors.conta.message}</span>
                )}
                <div className="mt-1 text-xs text-blue-600 dark:text-blue-200">
                  {metodo === "bci" && "Insira 13 dígitos"}
                  {metodo === "mileniumbim" && "Insira 11 dígitos"}
                  {metodo === "standardbank" && "Insira 13 dígitos"}
                  {metodo === "fnb" && "Insira 10 dígitos"}
                </div>
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="valor">
                <span className="font-bold">Valor (MZN)</span>
              </Label>
              <Input
                id="valor"
                type="number"
                {...register("valor", { valueAsNumber: true })}
                placeholder="Montante a doar"
                className="rounded-md border border-blue-600 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
              />
              {errors.valor && (
                <span className="text-red-500 text-sm">{errors.valor.message}</span>
              )}
            </div>

            <Button
              type="submit"
              className="w-full mt-4 rounded-full bg-green-600 text-white font-semibold hover:scale-105 hover:bg-green-600 transition"
            >
              Doar
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
