
import { Photo } from "../types/Photo";
import { v4 as uuidv4 } from "uuid";

// This function gets the actual photos from the public/photos directory
export const getPhotos = async (): Promise<Photo[]> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // In a real production app, this would be a server-side function
    // For this demo, we'll use a fetch to list the public directory
    const response = await fetch('/photos');
    
    if (!response.ok) {
      throw new Error('Failed to fetch photos directory');
    }
    
    // This requires the server to return directory listing
    // Note: This approach works in development but might not work in all environments
    const html = await response.text();
    
    // Parse HTML to find image files
    // This is a simple parser and may need adjustments based on server response
    const imgRegex = /href="([^"]+\.(jpg|jpeg|png|gif|webp|svg))"/gi;
    let match;
    const photos: Photo[] = [];
    
    while ((match = imgRegex.exec(html)) !== null) {
      const fileName = match[1];
      
      // Skip README.md or other non-image files
      if (fileName.includes('README.md')) continue;
      
      // Create a photo object for each image
      const photo: Photo = {
        id: uuidv4(),
        name: fileName,
        src: `/photos/${fileName}`,
        width: 800, // Default values, will be updated after image loads
        height: 600,
        size: 1024 * 1024, // Default 1MB size
        createdAt: new Date(),
        altText: fileName
      };
      
      photos.push(photo);
    }
    
    // If no photos found in directory, return sample photos for demonstration
    if (photos.length === 0) {
      console.log("No photos found in /photos directory. Using sample photos instead.");
      return samplePhotos;
    }
    
    // Update image dimensions by preloading
    await Promise.all(
      photos.map(photo => 
        new Promise<void>(resolve => {
          const img = new Image();
          img.onload = () => {
            photo.width = img.naturalWidth;
            photo.height = img.naturalHeight;
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${photo.src}`);
            resolve();
          };
          img.src = photo.src;
        })
      )
    );
    
    return photos;
  } catch (error) {
    console.error("Error loading photos:", error);
    // Fallback to sample photos if there's an error
    return samplePhotos;
  }
};

export const getPhotoById = async (id: string): Promise<Photo | undefined> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  const photos = await getPhotos();
  return photos.find(photo => photo.id === id);
};

// Sample photos - Used as fallback if directory reading fails
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
