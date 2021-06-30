import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() =>{
    const loadAll = async () => {
      let list = await Tmdb.getHomelist();
      setMovieList(list);
    }

    loadAll();
  }, []);
  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}