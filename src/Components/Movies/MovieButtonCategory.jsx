const MovieButtonCategory = ({ name }) => {
  return (
    <button className="bg-white font-bold text-base text-center text-tertiary p-2 pl-4 pr-4 rounded-md cursor-pointer">
      {name}
    </button>
  );
};

export default MovieButtonCategory;
