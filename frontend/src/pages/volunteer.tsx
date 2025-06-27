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

const schema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  apelido: z.string().min(2, "Apelido obrigatório"),
  email: z.string().email("Email inválido"),
  telefone: z
    .string()
    .regex(/^(8[234567])\d{7}$/, "Número deve começar com 82/83/84/85/86/87 e ter 9 dígitos"),
  sexo: z.enum(["masculino", "feminino", "outros", "prefiro-nao-dizer"], {
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

  const onSubmit = (data: FormData) => {
    alert("Obrigado por se candidatar! ☺");
    console.log({ ...data, telefone: "+258" + data.telefone });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0e1a2b] px-6 py-12 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl">
        {/* LOGO + TEXTO */}
        <div className="flex-1 text-center md:text-left">
          <img src="/marmo-logo.png" alt="Logo MARMO" className="h-24 mx-auto md:mx-0 mb-4" />
          <p className="text-lg text-gray-800 dark:text-gray-200">
            A <span className="font-bold text-green-600">MARMO</span> convida você a fazer parte da transformação. Seja voluntário e ajude a proteger o mar moçambicano e suas comunidades costeiras.
          </p>
        </div>

        {/* FORMULÁRIO */}
        <Card className="w-full max-w-md shadow-xl border border-blue-100 bg-white dark:bg-[#1a263b] dark:text-white">
          <CardHeader>
            <CardTitle className="text-green-600 text-center text-xl">Candidatura a Voluntário</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div>
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" {...register("nome")} />
                {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
              </div>
              <div>
                <Label htmlFor="apelido">Apelido</Label>
                <Input id="apelido" {...register("apelido")} />
                {errors.apelido && <p className="text-red-500 text-sm">{errors.apelido.message}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email")} />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="telefone">Número de Telefone</Label>
                <div className="flex gap-2">
                  <span className="px-3 py-2 bg-blue-100 dark:bg-blue-900 text-sm rounded-l-md text-gray-700 dark:text-white">+258</span>
                  <Input
                    id="telefone"
                    {...register("telefone")}
                    placeholder="84xxxxxxx"
                    className="flex-1 rounded-l-none"
                  />
                </div>
                {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone.message}</p>}
              </div>
              <div>
                <Label htmlFor="sexo">Sexo</Label>
                <Select {...register("sexo") as any}>
                  <SelectTrigger id="sexo">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="feminino">Feminino</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                    <SelectItem value="prefiro-nao-dizer">Prefiro não dizer</SelectItem>
                  </SelectContent>
                </Select>
                {errors.sexo && <p className="text-red-500 text-sm">{errors.sexo.message}</p>}
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
      </div>
    </div>
  );
};
