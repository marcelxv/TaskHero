import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

function notify(message, type) {
  toast(message, {
    type,
    position: "top-right",
    autoClose: 700,
    hideProgressBar: false,
    closeButton: true,
    newestOnTop: true,
    progress: undefined,
    className: "toast-container"
  });
}
export default notify;