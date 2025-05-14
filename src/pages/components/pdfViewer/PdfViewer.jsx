import React, { useEffect, useRef } from "react";

const PdfViewer = ({ closeModal, iframeUrl }) => {
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        modalRef.current &&
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeModal]);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        ref={modalContentRef}
        className="bg-white dark:bg-[#1c1c1c] w-[90%] md:w-[80%] h-[80%] p-4 rounded-3xl shadow overflow-hidden relative"
      >
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={closeModal}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <iframe
          src={iframeUrl}
          width="100%"
          height="100%"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default PdfViewer;
