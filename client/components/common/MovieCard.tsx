import React from 'react';

interface MovieCardProps {
  title: string;
  year?: string;
  imageUrl?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, year, imageUrl }) => {
  return (
    <div className="bg-dark rounded-lg overflow-hidden shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        {title && <h3 className="text-xl text-white mb-2">{title}</h3> }
        {year && <p className="text-gray-400">{year}</p>}
      </div>
    </div>
  );
};

export default MovieCard;
