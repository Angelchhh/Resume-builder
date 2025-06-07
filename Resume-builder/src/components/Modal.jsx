import React, { useEffect } from 'react';

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  hideHeader,
  showActionBtn,
  actionBtnIcon = null,
  actionBtnText,
  onActionClick,
}) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center w-full min-h-screen bg-black/40 p-4'>
        {/* modal content */}
      <div className=' relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md h-full  '>

        {/* Header */}
        {!hideHeader && (
          <div className='flex items-center justify-between p-4 border-b border-gray-200'>
            <h3 className='md:text-lg font-medium text-gray-900'>{title}</h3>
            {showActionBtn && (
              <button
                className='btn-small-light mr-12'
                onClick={() => onActionClick()}
              >
                {actionBtnIcon}
                {actionBtnText}
              </button>
            )}
          </div>
        )}

        {/* Close button */}
        <button
          type="button"
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center absolute top-3.5 right-3.5'
          onClick={onClose}
        >
          <svg
            className='w-3 h-3'
            aria-hidden="true"
            xmlns="http://www.w3g/2000tg"
            fill='none'
            viewBox='0 0 14 14'
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin='round'
              strokeWidth="2"
              d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>

        {/* Modal content */}
        <div className='flex-1 overflow-y-auto custom-scrollbar p-4 '>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
