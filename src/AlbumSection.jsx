// AlbumSection.js
import React from 'react';
import AlbumCard from './AlbumCard';

const AlbumSection = () => {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {[...Array(6)].map((_, index) => (
            <AlbumCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumSection;
