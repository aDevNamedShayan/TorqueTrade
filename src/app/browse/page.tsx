'use client'

import React, { useState, useEffect } from 'react';
import { CarCardGrid, CarCardList } from '@/components/ui/CarCard';

export default async function BrowsePage() {


  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    
            // {viewMode === 'grid' ? (
            //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            //     {Cars.map(car => (
            //       <CarCardGrid key={car.id} {...car} />
            //     ))}
            //   </div>
            // ) : (
            //   <div className="space-y-6">
            //     {Cars.map(car => (
            //       <CarCardList key={car.id} {...car} />
            //     ))}
            //   </div>
            // )}
            null
  );
}
