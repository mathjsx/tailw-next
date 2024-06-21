// components/Card.tsx
import React from 'react';

interface CardProps {
  color: string;
}

const Card: React.FC<CardProps> = ({ color }) => {
  return (
    <div className={`p-4 rounded-lg ${color} h-1/3 flex flex-col items-center justify-center`}>
      <svg width="50" height="50" viewBox="0 0 50 50" className="mb-4">
        <circle cx="25" cy="25" r="25" fill="black" />
      </svg>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Buka</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Tutup</button>
      </div>
    </div>
  );
}

export default Card;