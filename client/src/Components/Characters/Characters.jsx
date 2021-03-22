import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCharacters, getOneCharacter } from '../../Redux/Action-Creators/Characters';
import leftButton from '../../svg/left-arrow.svg';
import rightButton from '../../svg/next.svg';

import './Characters.css';

const Characters = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const history = useHistory();

  useEffect(() => {
    if (page < 1) {
      setPage(34);
    }
    if (page > 34) {
      setPage(1);
    }
    dispatch(getCharacters(page));
  }, [page]);

  const handlerSingleHero = (id) => {
    dispatch(getOneCharacter(id));
    history.push('/hero');
  };

  return (
    <div className="all-items">
      <a className="arrows-container" onClick={() => { setPage((prev) => prev - 0.5); }}>
        <img className="arrows" alt="" src={leftButton} />
      </a>
      <div className="characters-container">
        {characters.map((el) => {
          return (
            <div key={el.id} className="card" onClick={() => handlerSingleHero(el.id)}>
              <h5 className="name">{el.name.length > 25 ? el.origin.name : el.name}</h5>
              <img src={el.image} alt="скрыто" />
            </div>
          );
        })}
      </div>
      <a className="arrows-container" onClick={() => { setPage((prev) => prev + 0.5); }}>
        <img className="arrows" alt="" src={rightButton} />
      </a>
    </div>
  );
};

export default Characters;
