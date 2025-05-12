
import React from 'react';
import PhotoItem from './PhotoItem';
import { Photo } from '@/types/Photo';
import { Skeleton } from '@/components/ui/skeleton';

interface PhotoGridProps {
  photos: Photo[];
  loading: boolean;
}

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <Skeleton className="w-full h-48 rounded-md mb-2" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, loading }) => {
  if (loading) {
    return <LoadingSkeleton />;
  }

  if (photos.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-medium text-gray-600">No photos found</h3>
        <p className="text-gray-500 mt-2">
          Add some photos to the /photos directory to get started
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoGrid;
