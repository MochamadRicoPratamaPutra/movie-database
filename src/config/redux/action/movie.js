import api from '../../axios/api';
export const getMovie = (id) => (dispatch) => {
  api
    .get(`&i=${id}`)
    .then((res) => {
      dispatch({ type: 'REQ_GET_PRODUCT', payload: res });
    })
    .catch((err) => {
      console.log(err);
    });
};
