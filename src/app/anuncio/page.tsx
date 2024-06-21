import { Button } from "@nextui-org/react";
import React from "react";

function AnnouncmentsPage() {
  return (
    <section className="text-gray-600 body-font container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/3">
          <div className="bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
            <div className="my-16">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                7 dias
              </h2>
              <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                1 subida / dia
              </h3>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                R$ 25
              </h1>
              <p className="leading-relaxed mb-3">R$ 3,57 / dia</p>
            </div>
            <Button className="w-full" color="primary">
              Contratar
            </Button>
          </div>
        </div>
        <div className="p-4 lg:w-1/3">
          <div className="bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
            <div className="my-16">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                7 dias
              </h2>
              <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                3 subida / dia
              </h3>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                R$ 35
              </h1>
              <p className="leading-relaxed mb-3">R$ 5 / dia</p>
            </div>
            <Button className="w-full text-white" color="warning">
              Contratar
            </Button>
          </div>
        </div>
        <div className="p-4 lg:w-1/3">
          <div className="bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
            <div className="my-16">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                7 dias
              </h2>
              <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                6 subida / dia
              </h3>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                R$ 55
              </h1>
              <p className="leading-relaxed mb-3">R$ 7,86 / dia</p>
            </div>
            <Button className="w-full" color="primary">
              Contratar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnnouncmentsPage;
