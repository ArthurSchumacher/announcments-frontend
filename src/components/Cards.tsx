import { Image } from "@nextui-org/react";
import SingleCard from "./SingleCard";

function Cards() {
  return (
    <section className="sm:py-20 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <SingleCard />
      </div>
    </section>
  );
}

export default Cards;
