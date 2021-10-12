const initialState = {
  movie: {},
  ratings: [],
  loading: false,
  error: false,
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQ_GET_PRODUCT':
      return {
        ...state,
        movie: action.payload,
        ratings: action.payload.Ratings,
        loading: true,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
export default movieReducer