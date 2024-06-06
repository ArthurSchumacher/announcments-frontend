import { Image } from "@nextui-org/react";

function SingleCard() {
  return (
    <div className="shadow-lg col-span-1 cursor-pointer border-1 border-content3 bg-content2 rounded-md p-2 transition-all hover:scale-105 text-center text-sm">
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full mb-4">
          <Image src={``} alt={``} className="object-contain w-full h-full" />
        </div>
        <div className="self-start text-start py-1">
          <p className="text-black antialiased sm:text-base text-sm ">Teste</p>
        </div>
        <div className="self-start text-start py-1">
          <p className="text-black antialiased sm:text-2xl text-base font-bold">
            Teste
          </p>
        </div>
        <div className="self-start text-start py-1">
          <p className="text-black antialiased sm:text-base text-xs">Teste</p>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
