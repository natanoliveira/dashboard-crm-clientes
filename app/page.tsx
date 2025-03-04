import { Quantities } from "@/components/quantities";
import { Graphics } from "@/components/graphics";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function Home() {

  // const form = useForm()

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

      <section className="mt-4 flex flex-col md:flex-row gap-4">

      </section>

    </main>
  );
}
