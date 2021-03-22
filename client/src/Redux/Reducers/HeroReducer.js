import { GET_HERO } from '../Types/Characters';

const heroReducer = (store = [], action) => {
  switch (action.type) {
    case GET_HERO:
      return action.payload;
    default:
      return store;
  }
};

export default heroReducer;
