const ReadMoreOutlineButton = () => {
  return (
    <button className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary bg-transparent text-sm rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
      <span>Seguir Leyendo</span>
      <svg
        className="ml-2 -mr-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

export default ReadMoreOutlineButton;
