import { useState } from 'react';

export const useToggle = (initial?: boolean) => {
  const [isOpen, setIsOpen] = useState(initial ?? false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    handleClose,
    handleOpen,
    handleToggle,
  };
};
