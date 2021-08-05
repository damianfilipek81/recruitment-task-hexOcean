export const getDarkMode = ({darkMode}) => darkMode;

const reducerName = 'darkMode';
const createActionName = name => `app/${reducerName}/${name}`;

const CHANGE_DARKMODE = createActionName('CHANGE_DARKMODE');

export const changeDarkMode = payload => ({ payload, type: CHANGE_DARKMODE });

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case CHANGE_DARKMODE: {
      return action.payload;
    }

    default:
      return statePart;
  }
};