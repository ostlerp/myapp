const PRE = 'dogs';
const FETCH_DOGS =    `${PRE}/FETCH_DOGS`;
const RECEIVE_DOGS =  `${PRE}/RECEIVE_DOGS`;

const reducer = (state = null, action) => {
  switch(action.type) {
    case FETCH_DOGS:
      return true;
    case RECEIVE_DOGS:
      return false;
    default: 
      return state;
  }
}

export default reducer;

// Actions

const fetchDogs = () => {
  return {
    type: FETCH_DOGS
  };
};

const receiveDogs = (dogs) => {
  return {
    type: RECEIVE_DOGS,
    payload: dogs
  };
};

export function getDogs() {
  return dispatch => {
    dispatch(fetchDogs());
    fetch('https://api.thedogapi.co.uk/v2/dog.php?limit=5', { mode: 'no-cors' })
      .then(response => response.json())
      .then(json => dispatch(receiveDogs(json)));
  };
};