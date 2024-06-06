import Cards from "@/components/Cards";
import Highlights from "@/components/Highlights";

export default function Home() {
  return (
    <main className="container mx-auto px-5">
      <Highlights />
      <Cards />
    </main>
  );
}
