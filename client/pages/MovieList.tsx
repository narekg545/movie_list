import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '@/components/common/Button';
import MovieCard from '@/components/common/MovieCard';
import { useGetmoviesQuery } from '@/movie-store/services/moviesApi';

const MovieList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data: movies, isLoading, error } = useGetmoviesQuery({ page });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading movies</div>;

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full p-20">
        <div className="flex justify-between w-full mb-6">
          <h1 className="text-4xl font-semibold text-white">My movies</h1>
          <Button label="Logout" onClick={() => {}}  />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {movies?.map((movie: { title: string; year: string; imageUrl: string; }) => (
            <MovieCard key={movie.title} title={movie.title} year={movie.year} imageUrl={movie.imageUrl} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 space-x-4">
          <Button label="Prev" onClick={handlePrevPage}  />
          <span className="text-white">Page {page}</span>
          <Button label="Next" onClick={handleNextPage} />
        </div>
      </div>
    </Layout>
  );
};

export default MovieList;
