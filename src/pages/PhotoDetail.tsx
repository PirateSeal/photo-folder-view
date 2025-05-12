
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPhotoById } from '@/services/PhotoService';
import { Photo } from '@/types/Photo';
import { formatFileSize } from '@/utils/photo-utils';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const PhotoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPhoto = async () => {
      if (!id) {
        setError('Photo ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const fetchedPhoto = await getPhotoById(id);
        
        if (!fetchedPhoto) {
          setError('Photo not found');
        } else {
          setPhoto(fetchedPhoto);
          setError(null);
        }
      } catch (err) {
        console.error('Error loading photo:', err);
        setError('Failed to load photo details');
      } finally {
        setLoading(false);
      }
    };

    loadPhoto();
  }, [id]);

  return (
    <div className="min-h-screen bg-gallery">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Gallery
            </Link>
          </Button>
          
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-8 w-2/3" />
              <Skeleton className="h-[60vh] w-full" />
            </div>
          ) : error ? (
            <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-red-700">
              <p>{error}</p>
            </div>
          ) : photo ? (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{photo.name}</h1>
                <div className="text-muted-foreground mt-2">
                  <span className="mr-4">Added on {photo.createdAt.toLocaleDateString()}</span>
                  <span>{formatFileSize(photo.size)}</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-2 md:p-4 flex justify-center">
                <img
                  src={photo.src}
                  alt={photo.altText || photo.name}
                  className="max-h-[70vh] rounded object-contain animate-zoom-in"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium mb-2">Photo Details</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-500">Dimensions</span>
                      <span>{photo.width} × {photo.height}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">File Size</span>
                      <span>{formatFileSize(photo.size)}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Date Added</span>
                      <span>{photo.createdAt.toLocaleDateString()}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default PhotoDetail;
