"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
// import { signIn } from "../../../auth";
import { SessionProvider, signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";

const authSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export default function LoginPage({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
  });

  const session = useSession();

  const router = useRouter();

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof authSchema>) => {
    try {
      const result = await signIn("credentials", {
        username: values.username,
        password: values.password,
      });
      if (result?.ok) {
        toast.success("Sucesso.", {
          description: `Usuário Logado com Sucesso`,
          duration: 3000,
        });
        router.push("/dashboard");
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {session ? (
        <>
          <div>
            <h1 className="text-2xl font-bold">Usuário Já logado Aguarde</h1>
          </div>
          {router.push("/dashboard")}
        </>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn("flex flex-col gap-6", className)}
            {...props}
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">BEM VINDO</h1>
              <p className="text-balance text-sm text-muted-foreground">
                Entre com seu email e senha:
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <FormField
                  name="username"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="col-span-2 md:col-span-1">
                      <FormLabel>Nome de Usuário</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="johnd"
                          className="text-md border-orangeead bg-white"
                          required
                          autoFocus
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <>
                      <FormItem className="col-span-2 md:col-span-1 ">
                        <div className="flex items-center">
                          <FormLabel>Senha</FormLabel>
                          <a
                            href="#"
                            className="ml-auto text-sm underline-offset-4 hover:underline"
                          >
                            Esqueceu a Senha?
                          </a>
                        </div>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-orangeead bg-white"
                            required
                            autoFocus
                            placeholder="m38rmF$"
                            type="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />
              </div>
              <Button disabled={isLoading} type="submit" className="w-full">
                <>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logando...
                    </>
                  ) : (
                    "Login"
                  )}
                </>
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
