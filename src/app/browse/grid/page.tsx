import { getCars } from '@/api/GetCars';
import { CarCardGrid } from '@/components/ui/CarCard';

export default async function page() {
  const Cars = await getCars();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Cars.map(car => (
        <CarCardGrid key={car.id} {...car} />
      ))}
    </div>
  );
}