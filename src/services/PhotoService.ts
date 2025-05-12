
import { Photo } from "../types/Photo";

// Sample photos - In a real app, these would be loaded from your repo
const samplePhotos: Photo[] = [
  {
    id: "1",
    name: "mountains.jpg",
    src: "/photos/mountains.jpg",
    width: 1200,
    height: 800,
    size: 1024 * 1024 * 2.3, // 2.3 MB
    createdAt: new Date('2023-05-15'),
    altText: "Mountain landscape"
  },
  {
    id: "2",
    name: "beach-sunset.jpg",
    src: "/photos/beach-sunset.jpg",
    width: 1920,
    height: 1080,
    size: 1024 * 1024 * 3.1, // 3.1 MB
    createdAt: new Date('2023-06-22'),
    altText: "Beautiful sunset at the beach"
  },
  {
    id: "3",
    name: "city-skyline.jpg",
    src: "/photos/city-skyline.jpg",
    width: 1600,
    height: 900,
    size: 1024 * 1024 * 2.8, // 2.8 MB
    createdAt: new Date('2023-04-10'),
    altText: "City skyline at night"
  },
  {
    id: "4",
    name: "forest-path.jpg",
    src: "/photos/forest-path.jpg",
    width: 800,
    height: 1200,
    size: 1024 * 1024 * 1.9, // 1.9 MB
    createdAt: new Date('2023-07-05'),
    altText: "Path through a forest"
  },
  {
    id: "5",
    name: "lake-reflection.jpg",
    src: "/photos/lake-reflection.jpg",
    width: 1500,
    height: 1000,
    size: 1024 * 1024 * 2.5, // 2.5 MB
    createdAt: new Date('2023-03-18'),
    altText: "Lake with mountain reflection"
  },
  {
    id: "6",
    name: "autumn-leaves.jpg",
    src: "/photos/autumn-leaves.jpg",
    width: 1400,
    height: 1400,
    size: 1024 * 1024 * 2.2, // 2.2 MB
    createdAt: new Date('2023-10-12'),
    altText: "Colorful autumn leaves"
  }
];

// This would be replaced with actual file loading logic in a real application
export const getPhotos = async (): Promise<Photo[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return samplePhotos;
};

export const getPhotoById = async (id: string): Promise<Photo | undefined> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return samplePhotos.find(photo => photo.id === id);
};
