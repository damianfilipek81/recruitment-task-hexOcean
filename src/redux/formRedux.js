import Axios from "axios";

const reducerName = "sendForm";
const createActionName = (name) => `app/${reducerName}/${name}`;

const FETCH_START = createActionName("FETCH_START");
const FETCH_ERROR = createActionName("FETCH_ERROR");
const SEND_FORM = createActionName("SEND_FORM");

export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const sendForm = (payload) => ({ payload, type: SEND_FORM });

export const fetchSendForm = (data) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    Axios.post(`https://frosty-wood-6558.getsandbox.com:443/dishes`, data)
      .then((res) => {
        console.log(res);
        dispatch(sendForm(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case SEND_FORM: {
      return {
        data: action.payload,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
