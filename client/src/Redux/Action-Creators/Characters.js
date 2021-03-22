import { WRITE_DOWN_CHARACTERS_IN_STORE, GET_HERO, CLEAR_CURRENT_HERO } from '../Types/Characters';

function writeDownCharactersInStore(characters) {
  return {
    type: WRITE_DOWN_CHARACTERS_IN_STORE,
    payload: characters,
  };
}

function writeDownHero(hero) {
  return {
    type: GET_HERO,
    payload: hero,
  };
}

function clearHero() {
  return {
    type: CLEAR_CURRENT_HERO,
  };
}

const getCharacters = (count = 1) => async (dispatch) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${Math.floor(count)}`);
  if (response.status === 200) {
    const characters = await response.json();
    if (count % 1 !== 0) {
      characters.results.splice(0, 10);
    } else {
      characters.results.splice(10);
    }

    console.log(characters);
    dispatch(writeDownCharactersInStore(characters));
  }
};

const getOneCharacter = (id) => async (dispatch) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (response.status === 200) {
    const hero = await response.json();
    dispatch(writeDownHero(hero));
  }
};

export { getCharacters, getOneCharacter, clearHero };
