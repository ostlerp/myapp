import { normalize, schema } from 'normalizr';

const launchSchema = new schema.Entity('launches');
const launchListSchema = new schema.Array(launchSchema);

const NAMESPACE = 'launches';
const FETCH_LAUNCHES =    `${NAMESPACE}/FETCH_LAUNCHES`;
const RECEIVE_LAUNCHES =  `${NAMESPACE}/RECEIVE_LAUNCHES`;
const CLEAR_LAUNCHES =    `${NAMESPACE}/CLEAR_LAUNCHES`;

const initialState = {};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_LAUNCHES:
      return {
        ...state,
        isLoading: true
      };
    case RECEIVE_LAUNCHES:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case CLEAR_LAUNCHES: 
      return initialState;
    default: 
      return state;
  }
}

export default reducer;

// Actions

const fetchLaunches = () => {
  return {
    type: FETCH_LAUNCHES
  };
};

const receiveLaunches = (LAUNCHES) => {
  return {
    type: RECEIVE_LAUNCHES,
    payload: LAUNCHES
  };
};

export function clearLaunches() {
  return {
    type: CLEAR_LAUNCHES
  };
};

export function getLaunches() {
  return (dispatch) => {
    dispatch(fetchLaunches());
    fetch('https://launchlibrary.net/1.3/launch?limit=100')
      .then(res => res.json())
      .then(json => {
        let payload = normalize(json.launches, launchListSchema);
        dispatch(receiveLaunches(payload.entities.launches));
      });
  };
};