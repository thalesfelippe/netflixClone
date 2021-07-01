import React from 'react';
import './styles.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, items}) => {
  const handleLeftArrow = () => {
    
  }

  const handleRightArrow = () => {

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
        <div className="movieRow-list">
          {items.results.length > 0 && items.results.map((item, key)=>(
            <div key={key} className="movieRow-item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_tittle}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}