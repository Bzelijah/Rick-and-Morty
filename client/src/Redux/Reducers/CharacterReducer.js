import { WRITE_DOWN_CHARACTERS_IN_STORE } from '../Types/Characters';

const characterReducer = (store = [], action) => {
  switch (action.type) {
    case WRITE_DOWN_CHARACTERS_IN_STORE:
      return action.payload.results;
    default:
      return store;
  }
};

export default characterReducer;
