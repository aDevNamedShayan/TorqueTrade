import { getCars } from "@/api/GetCars";
import { CarCardList } from "@/components/ui/CarCard";

export default async function page() {
  const Cars = await getCars();
  return (
    <div className="space-y-6">
      {Cars.map(car => (
        <CarCardList key={car.id} {...car} />
      ))}
    </div>
  );
}
