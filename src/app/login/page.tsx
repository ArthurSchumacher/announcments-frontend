import SignInForm from "@/components/SignInForm";
import { paths } from "@/paths";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <section className="w-full container mx-auto px-5 py-20">
      <div className="flex flex-col sm:flex-row gap-14">
        <div className="w-full sm:w-1/2">
          <Card className="bg-content2">
            <CardHeader className="sm:text-2xl text-lg font-extralight text-black">
              Acesse sua conta
            </CardHeader>
            <CardBody>
              <SignInForm />
            </CardBody>
          </Card>
        </div>
        <div className="w-full sm:w-1/2 flex items-start justify-center flex-col">
          <h2 className="sm:text-3xl text-xl font-light text-black pb-6">
            Criar uma conta é rápido, fácil e gratuito!
          </h2>
          <p className="sm:text-lg font-extralight text-black mb-6">
            Com a sua conta da {`Garotas Online`} você tem acesso a criação de
            anúncios e muito mais!
          </p>
          <Button
            variant="ghost"
            color="warning"
            className="w-full text-black"
            as={Link}
            href={paths.signUp()}
            size="lg"
            radius="sm"
          >
            Criar minha conta
          </Button>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
