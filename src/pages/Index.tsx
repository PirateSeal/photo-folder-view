
import React from 'react';
import Header from '@/components/Header';
import PhotoGrid from '@/components/PhotoGrid';
import SortControls from '@/components/SortControls';
import { usePhotoContext } from '@/context/PhotoContext';
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const { photos, loading, error, sortConfig, setSortConfig } = usePhotoContext();

  return (
    <div className="min-h-screen bg-gallery">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Photo Gallery</h2>
            {loading ? (
              <div className="text-muted-foreground">
                <Skeleton className="h-4 w-[150px]" />
              </div>
            ) : (
              <p className="text-muted-foreground">
                {photos.length} photos
              </p>
            )}
          </div>
          
          <SortControls sortConfig={sortConfig} onSortChange={setSortConfig} />
        </div>
        
        {error ? (
          <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-red-700 my-4">
            <p>{error}</p>
          </div>
        ) : (
          <PhotoGrid photos={photos} loading={loading} />
        )}
      </main>
    </div>
  );
};

export default Index;
