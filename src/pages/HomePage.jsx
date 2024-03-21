import { CarsList } from "../components/CarsList/CarsList";
import { Filters } from "../components/Filters/Filters";

export default function HomePage() {
  return (
    <section>
      <Filters />
      <CarsList />
    </section>
  );
}
