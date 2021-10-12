import axios from "axios";
export const getMovie = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios.get(`${process.env.REACT_APP_API_URL}&i=${id}&plot=full`)
    .then((res) => {
      dispatch({ type: 'REQ_GET_PRODUCT', payload: res.data });
      resolve('Success')
    })
    .catch((err) => {
      dispatch({ type: 'ERROR', payload: err.response.data.error.message });
      reject('Error')
    });
  })
};
