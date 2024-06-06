import SignUpForm from "@/components/SignUpForm";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import React from "react";

function RegisterPage() {
  return (
    <section className="w-full container mx-auto px-5 py-20">
      <div className="flex flex-col sm:flex-row gap-14">
        <div className="w-full sm:w-1/2">
          <Card className="bg-content2">
            <CardHeader className="text-2xl font-extralight text-black">
              Crie sua conta
            </CardHeader>
            <CardBody>
              <SignUpForm />
            </CardBody>
          </Card>
        </div>
        <div className="w-full sm:w-1/2 flex items-start justify-center flex-col">
          <h2 className="text-xl font-light text-black pb-6">
            Criar uma conta é rápido, fácil e gratuito!
          </h2>
          <p className="text-md font-extralight text-black">
            Com a sua conta da {`Garotas Online`} você tem acesso a anúncios e
            muito mais!
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
