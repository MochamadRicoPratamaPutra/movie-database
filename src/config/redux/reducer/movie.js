const initialState = {
  movie: {},
  ratings: [],
  loading: false,
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
    default:
      return state;
  }
};
export default movieReducer