import { combineReducers } from 'redux';
import characterReducer from './CharacterReducer';
import heroReducer from './HeroReducer';

const rootReducer = combineReducers({
  characters: characterReducer,
  currentHero: heroReducer,
});

export default rootReducer;
