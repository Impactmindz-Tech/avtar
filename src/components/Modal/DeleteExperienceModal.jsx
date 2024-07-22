import { useEffect, useRef } from "react";

import Images from "@/constant/Images";

const DeleteExperienceModal = ({ deleteModalState, setDeleteModalState }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setDeleteModalState();
    }
  };

  useEffect(() => {
    if (deleteModalState) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [deleteModalState]);

  if (!deleteModalState) return null;

  return (
    <div className="fixed  flex items-end justify-center inset-0 bg-black bg-opacity-50 z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-t-2xl px-7 shadow-lg w-full max-w-4xl xl:max-w-2xl lg:max-w-full p-3"
      >
        {/*  */}
        <div className="flex justify-center mt-7">
          <div className="rounded-full p-6 bg-[#ffebec] md:p-4">
            <img
              src={Images.redtrash}
              alt="redtrash"
              className="md:w-10 md:h-10 w-[60px] h-[60px]"
            />
          </div>
        </div>
        <div className="flex justify-center py-5">
          <p className="text-grey-800">
            Are you sure want to delete your experience for{" "}
            <b className="text-grey-900">Shikara hotel, India?</b>
          </p>
        </div>

        <div className="flex mt-4 gap-2">
          <button
            onClick={setDeleteModalState}
            className="bg-grey-900 text-white py-3 font-bold rounded md:text-sm w-[49%]"
          >
            Cancel
          </button>
          <button
            onClick={setDeleteModalState}
            className="border border-grey-900 text-grey-900 py-3 font-bold rounded md:text-sm w-[49%]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteExperienceModal;
