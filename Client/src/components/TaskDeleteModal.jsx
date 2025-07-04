const TaskDeleteModal = ({ setShowDeleteModal, handleDelete, taskToDelete }) => {
  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      c
      className="mt-60 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      style={{ marginLeft: "40%" }}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-zinc-500">
          <button
            onClick={() => setShowDeleteModal(false)}
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-pink-300 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              className="w-3 h-3 text-pink-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <svg
              className="brush mx-auto mb-4 text-pink-300 w-12 h-12 dark:text-pink-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="brush mb-5 text-2xl font-normal text-pink-300 dark:text-pink-300">
              Are you sure you want to delete this task? This action can not be
              undone.
            </h3>
            <button
             onClick={() => handleDelete(taskToDelete)}
              data-modal-hide="popup-modal"
              type="button"
              className="brush text-white bg-pink-600 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-pink-800 font-medium rounded-lg text-xl inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, I'm sure
            </button>
            <button
              onClick={() => setShowDeleteModal(false)}
              data-modal-hide="popup-modal"
              type="button"
              className="brush py-2.5 px-5 ms-3 text-xl font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-zinc-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-zinc-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDeleteModal;