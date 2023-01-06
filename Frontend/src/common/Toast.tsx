import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps {
  message: string;
  isSuccess: boolean;
}

export const Toast = ({ message, isSuccess }: ToastProps) =>
  isSuccess
    ? toast.success(message, {
        position: 'bottom-center',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        pauseOnFocusLoss: true,
        closeButton: false,
        className: 'toast-message',
      })
    : toast.error(message, {
        position: 'bottom-center',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        pauseOnFocusLoss: true,
        closeButton: false,
        className: 'toast-message',
      });
