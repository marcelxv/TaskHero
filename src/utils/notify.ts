import { ReactElement, JSXElementConstructor, ReactFragment, ReactNode } from 'react';
import { toast, ToastContentProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

function notify(message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ((props: ToastContentProps<unknown>) => ReactNode) | null | undefined, type: 'success' | 'error' | 'warning' | 'info' = 'success') {
  toast(message, {
    type,
    position: "top-right",
    autoClose: 700,
    hideProgressBar: false,
    closeButton: true,
    progress: undefined,
    className: "toast-container"
  });
}
export default notify;