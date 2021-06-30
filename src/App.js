import React, { useEffect, useState } from 'react';
import Tmdb from './tmdb';

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
          <div>
            {item.title}
          </div>
        ))}
      </section>
    </div>
  );
}