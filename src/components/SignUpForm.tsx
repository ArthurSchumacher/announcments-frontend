"use client";

import * as actions from "@/actions";
import { paths } from "@/paths";
import { UserDto } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LuDot } from "react-icons/lu";
import { z } from "zod";

const signUpSchema = z.object({
  name: z.string().min(4, { message: "This field has to be filled" }),

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

  c_password: z
    .string()
    .min(1, { message: "This field has to be filled" })
    .regex(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s)/,
      "You must provide a strong password."
    ),

  tos: z.boolean(),
});

type SignUpFormFields = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormFields>({
    defaultValues: { tos: false },
    resolver: zodResolver(signUpSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpFormFields> = async (data) => {
    try {
      if (!data.tos) {
        return;
      }

      if (data.tos === true && data.password === data.c_password) {
        const userDto: UserDto = {
          name: data.name,
          email: data.email,
          password: data.password,
        };

        await actions.signUp(userDto);
      }
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="gap-y-4 flex flex-col">
      <Input
        {...register("name")}
        isInvalid={errors.name ? true : undefined}
        type="text"
        placeholder="Digite seu nome e sobrenome"
        label="Nome"
        labelPlacement="outside"
        variant="bordered"
        size="lg"
        radius="sm"
      />

      {errors.name ? (
        <p className="px-2 -mt-4 text-danger text-sm font-light">
          {errors.name.message}
        </p>
      ) : null}

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

      <div className="flex flex-row flex-nowrap gap-x-4">
        <div className="w-1/2">
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
            <p className="px-2 text-danger text-sm font-light">
              {errors.password.message}
            </p>
          ) : null}
        </div>

        <div className="w-1/2">
          <Input
            {...register("c_password")}
            isInvalid={errors.c_password ? true : undefined}
            type="password"
            placeholder="Confirme sua senha"
            label="Confirmar a senha"
            labelPlacement="outside"
            variant="bordered"
            size="lg"
            radius="sm"
          />

          {errors.c_password ? (
            <p className="px-2 text-danger text-sm font-light">
              {errors.c_password.message}
            </p>
          ) : null}
        </div>
      </div>

      <ul className="w-full pl-2 flex flex-col">
        <p className="text-sm">Padrão de senha:</p>
        <li className="text-xs pl-2 inline-flex items-center">
          <LuDot size={32} />
          Mínimo 8 caracteres
        </li>
        <li className="text-xs pl-2 inline-flex items-center">
          <LuDot size={32} />
          Letra Minúscula
        </li>
        <li className="text-xs pl-2 inline-flex items-center">
          <LuDot size={32} />
          Letra Maiúscula
        </li>
        <li className="text-xs pl-2 inline-flex items-center">
          <LuDot size={32} />
          Números
        </li>
        <li className="text-xs pl-2 inline-flex items-center">
          <LuDot size={32} />
          Carácter especial
        </li>
      </ul>

      <Controller
        control={control}
        name="tos"
        render={({ field: { onChange, value } }) => (
          <Checkbox
            defaultSelected
            onChange={onChange}
            isSelected={value}
            className="inline-flex items-center pl-2"
          >
            Concordo com os{" "}
            <Link className="text-sm text-danger" href={paths.home()}>
              termos e condições
            </Link>
          </Checkbox>
        )}
      />

      {errors.root ? (
        <div className="w-full p-2 bg-danger-200 border border-danger-400 rounded-sm">
          <p className="text-danger-700">{errors.root.message}</p>
        </div>
      ) : null}

      <Button
        type="submit"
        isLoading={isSubmitting}
        className="w-full text-background"
        color="danger"
        size="lg"
        radius="sm"
      >
        Cadastrar
      </Button>
    </form>
  );
}
