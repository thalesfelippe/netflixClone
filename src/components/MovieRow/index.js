import React, { useState }from 'react';
import './styles.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ModalMovies from '../ModalMovies';
import { Gradient } from '@material-ui/icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, item, items}) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
  }
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow-left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRow-right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRow-list-area">
        <div className="movieRow-list" style={{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}>
          {items.results.length > 0 && items.results.map((item, key)=>(
            <div key={key} className="movieRow-item">
              <ModalMovies image={`https://image.tmdb.org/t/p/w300${item.poster_path}`}>
                <div className='movie-banner' style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage: `url(https://image.tmdb.org/t/p/w300${item.poster_path})`
                }}>
                </div>
                <div className='movie-fade'></div>
                <div className="movie-buttons">
                  <a href="{`/watch/${item.id}`}" className="movie-watchbutton">▶ Assistir</a>
                  <a href="{`/list/add/${item.id}`}" className="movie-mylistbutton">+ Minha Lista</a>
                </div>
                <div className='movie-info'>
                  <h2>{item.original_name}</h2>
                  <p className='movie-points'>{item.vote_average} pontos</p>
                  <div className='movie-description'>{item.overview}</div>
                </div>
              </ModalMovies>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}