"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled" })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(1, { message: "This field has to be filled" })
    .regex(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s)/,
      "You must provide a strong password."
    ),
});

type SignInFormFields = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormFields>({
    resolver: zodResolver(signInSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<SignInFormFields> = async (data) => {
    try {
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="gap-y-4 flex flex-col">
      <Input
        {...register("email")}
        isInvalid={errors.email ? true : undefined}
        type="text"
        placeholder="Digite seu e-mail"
        label="Email"
        labelPlacement="outside"
        variant="bordered"
        size="lg"
        radius="sm"
      />

      {errors.email ? (
        <p className="px-2 -mt-4 text-danger text-sm font-light">
          {errors.email.message}
        </p>
      ) : null}

      <Input
        {...register("password")}
        isInvalid={errors.password ? true : undefined}
        type="password"
        placeholder="Sua senha"
        label="Senha"
        labelPlacement="outside"
        variant="bordered"
        size="lg"
        radius="sm"
      />

      {errors.password ? (
        <p className="px-2 -mt-4 text-danger text-sm font-light">
          {errors.password.message}
        </p>
      ) : null}

      <Button
        type="submit"
        isLoading={isSubmitting}
        className="w-full text-background"
        color="danger"
        size="lg"
        radius="sm"
      >
        Entrar
      </Button>
    </form>
  );
}
