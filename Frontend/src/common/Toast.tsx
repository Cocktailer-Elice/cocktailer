import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps {
  message: string;
  isSuccess: boolean;
  duration?: number;
}

export const Toast = ({ message, isSuccess, duration = 1000 }: ToastProps) =>
  isSuccess
    ? toast.success(message, {
        position: 'bottom-center',
        autoClose: duration,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        pauseOnFocusLoss: true,
        closeButton: false,
        className: 'toast-message',
      })
    : toast.error(message, {
        position: 'bottom-center',
        autoClose: duration,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        pauseOnFocusLoss: true,
        closeButton: false,
        className: 'toast-message',
      });
