
import React from 'react';
import { Link } from 'react-router-dom';
import { Photo } from '@/types/Photo';
import { formatFileSize } from '@/utils/photo-utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

interface PhotoItemProps {
  photo: Photo;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ photo }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md group animate-fade-in">
      <Link to={`/photo/${photo.id}`}>
        <div className="relative overflow-hidden">
          <AspectRatio ratio={photo.width / photo.height} className="bg-slate-100">
            <img
              src={photo.src}
              alt={photo.altText || photo.name}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </AspectRatio>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
        </div>
        <CardContent className="p-3">
          <div className="flex justify-between items-start">
            <div className="truncate">
              <h3 className="font-medium text-sm truncate" title={photo.name}>
                {photo.name}
              </h3>
              <p className="text-xs text-gray-500">
                {formatFileSize(photo.size)}
              </p>
            </div>
            <div className="text-xs text-gray-500">
              {photo.createdAt.toLocaleDateString()}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PhotoItem;
