import { Quantities } from "@/components/quantities";
import { Graphics } from "@/components/graphics";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      {/* Seções de cards */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Quantities />
      </section>
      {/* Seções de gráfico */}
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <Graphics />
      </section>
    </main>
  );
}
