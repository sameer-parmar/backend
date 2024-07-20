"use client";
import { useEffect, useState } from 'react';
import FeaturedComponent from './components/FeatureComponents'; // Ensure the path is correct
import './globals.css'; // Import the CSS file for loading animation
export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://backend-5-2syu.onrender.com/api/globe-data') // Update with your backend URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div> {/* Loading Spinner */}
      <p className="loading-message">
        The Backend is hosted on Render, so fetching data might take a moment. Please be patient........
      </p>
    </div>
  );

  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">ASSIGNMENT SUBMISSION</h1>
      {data.length === 0 ? (
        <p className="text-center">No data available</p>
      ) : (
        <FeaturedComponent data={data} />
      )}
    </div>
  );
}