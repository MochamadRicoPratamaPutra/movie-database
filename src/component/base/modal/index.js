import Swal from "sweetalert2";
import NotFound from '../../../asset/notFound.png'

export const ModalPosterDetail = (poster, title, year) => {
  console.log(poster)
  Swal.fire({
    imageUrl: poster,
    imageHeight: 400,
    imageWidth: 250,
    imageAlt: 'Poster image',
    title: `${title} (${year})`,
  });
}

export const ModalCard = (poster, title, year, id, history) => {
  Swal.fire({
    imageUrl: poster !== 'N/A' ? poster : NotFound,
    imageHeight: 400,
    imageWidth: 250,
    imageAlt: 'Poster image',
    title: `${title} (${year})`,
    showCancelButton: true,
    confirmButtonText: 'Go to Movie page',
  }).then((res) => {
    if (res.isConfirmed) {
      history.push(`/${id}`)
    }
  })
}