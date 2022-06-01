import { ToastContainer } from 'react-toastify';

export default function Error () {
  return (
    <ToastContainer
      position='top-right'
      autoClose={6000}
      // hideProgressBar={false}
      closeOnClick
      draggable
    />
  );
}
