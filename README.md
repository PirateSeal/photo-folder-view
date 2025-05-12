
# Photo Gallery Application

A simple React-based photo gallery application that allows users to view and sort photos. Photos are stored directly in the Git repository, no upload functionality required.

## Project info

**URL**: https://lovable.dev/projects/e44ff86d-42aa-4186-864b-35156dc363e1

## Features

- View all photos in a responsive grid layout
- Sort photos by name, date, or file size
- View detailed information about each photo
- Responsive design for both desktop and mobile devices

## Adding Photos

To add new photos to the gallery:

1. Add your image files to the `/public/photos/` directory
2. Commit and push the changes to your Git repository
3. The photos will automatically appear in the gallery

## Technologies Used

This project is built with:

- React
- TypeScript
- React Router
- TailwindCSS
- shadcn/ui components
- Vite

## Getting Started

Follow these steps to run the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Main application pages
- `/src/context` - React context providers
- `/src/services` - Service functions for data handling
- `/src/types` - TypeScript type definitions
- `/src/utils` - Utility functions
- `/public/photos` - Directory for storing photos

## Deployment

Simply open [Lovable](https://lovable.dev/projects/e44ff86d-42aa-4186-864b-35156dc363e1) and click on Share -> Publish.
