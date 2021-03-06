import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovies';
import Header from './components/Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() =>{
    const loadAll = async () => {
      let list = await Tmdb.getHomelist();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() =>{
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  return (
    <div className="page">

      <Header black={blackHeader} />

      {featureData &&
        <FeatureMovie item={featureData} />
      }
      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Desenvolvido com base em estudo em <strong>ReactJS</strong><br/>
        Direitos de imagem para <strong>Netflix</strong><br/>
        Dados pegos do site <strong>Themoviedb.org</strong>
      </footer>

      {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="Carregando" />
      </div>
      }
    </div>
  );
}