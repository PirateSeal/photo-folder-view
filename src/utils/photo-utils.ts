
import { Photo, SortConfig, SortOption, SortDirection } from "../types/Photo";

// Function to sort photos based on the provided configuration
export const sortPhotos = (photos: Photo[], sortConfig: SortConfig): Photo[] => {
  return [...photos].sort((a, b) => {
    const { option, direction } = sortConfig;
    const modifier = direction === 'asc' ? 1 : -1;

    switch (option) {
      case 'name':
        return a.name.localeCompare(b.name) * modifier;
      case 'date':
        return (a.createdAt.getTime() - b.createdAt.getTime()) * modifier;
      case 'size':
        return (a.size - b.size) * modifier;
      default:
        return 0;
    }
  });
};

// Function to get dimensions for displaying a photo in a responsive grid
export const getPhotoDisplayDimensions = (
  photo: Photo,
  maxWidth: number = 400,
  maxHeight: number = 300
): { width: number; height: number } => {
  const aspectRatio = photo.width / photo.height;

  if (aspectRatio > 1) {
    // Landscape photo
    const width = Math.min(maxWidth, photo.width);
    const height = width / aspectRatio;
    return { width, height };
  } else {
    // Portrait or square photo
    const height = Math.min(maxHeight, photo.height);
    const width = height * aspectRatio;
    return { width, height };
  }
};

// Function to format file size in human-readable format
export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
};
