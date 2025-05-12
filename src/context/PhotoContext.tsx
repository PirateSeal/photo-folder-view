
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Photo, SortConfig } from '../types/Photo';
import { getPhotos } from '../services/PhotoService';
import { sortPhotos } from '../utils/photo-utils';
import { useToast } from '@/components/ui/use-toast';

interface PhotoContextType {
  photos: Photo[];
  loading: boolean;
  error: string | null;
  sortConfig: SortConfig;
  setSortConfig: (config: SortConfig) => void;
  refreshPhotos: () => Promise<void>;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider = ({ children }: { children: React.ReactNode }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    option: 'date',
    direction: 'desc'
  });
  const { toast } = useToast();

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const fetchedPhotos = await getPhotos();
      setPhotos(sortPhotos(fetchedPhotos, sortConfig));
      setError(null);
    } catch (err) {
      console.error('Error fetching photos:', err);
      setError('Failed to load photos. Please try again later.');
      toast({
        title: 'Error',
        description: 'Failed to load photos. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  useEffect(() => {
    setPhotos(sortPhotos(photos, sortConfig));
  }, [sortConfig]);

  const refreshPhotos = async () => {
    await fetchPhotos();
  };

  return (
    <PhotoContext.Provider
      value={{
        photos,
        loading,
        error,
        sortConfig,
        setSortConfig,
        refreshPhotos,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotoContext = (): PhotoContextType => {
  const context = useContext(PhotoContext);
  if (context === undefined) {
    throw new Error('usePhotoContext must be used within a PhotoProvider');
  }
  return context;
};
