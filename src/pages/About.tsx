
import React from 'react';
import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gallery">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-6">About Photo Gallery</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">What is Photo Gallery?</h2>
              <p className="text-gray-700">
                Photo Gallery is a simple application that allows you to view and sort your photos.
                It's designed to be a straightforward way to organize and browse photos stored in your git repository.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">How to Add Photos</h2>
              <p className="text-gray-700">
                To add photos to this gallery:
              </p>
              <ol className="list-decimal ml-6 mt-2 space-y-2 text-gray-700">
                <li>Clone the repository to your local machine</li>
                <li>Add your photos to the <code className="bg-gray-100 px-2 py-1 rounded">/public/photos</code> directory</li>
                <li>Commit and push your changes back to the repository</li>
              </ol>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">Features</h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>View all photos in a responsive grid layout</li>
                <li>Sort photos by name, date, or file size</li>
                <li>View detailed information about each photo</li>
                <li>Responsive design that works on desktop and mobile devices</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
