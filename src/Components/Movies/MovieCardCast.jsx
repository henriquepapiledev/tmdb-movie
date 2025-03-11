import image from '../../assets/no-image.jpg';

const MovieCardCast = ({ id, name, character, profile_path }) => {
  const imageCast = 'https://image.tmdb.org/t/p/original' + profile_path;

  return (
    <figure
      className="flex flex-col justify-between bg-white h-full w-48 p-2 rounded-md shadow-md"
      id={id}
    >
      <img
        className="w-full h-[220px] object-cover rounded-md"
        src={profile_path ? imageCast : image}
        alt={name}
      />
      <div>
        <figcaption className="font-bold text-lg text-tertiary overflow-hidden text-ellipsis whitespace-nowrap mt-4 mb-1">
          {name}
        </figcaption>
        <span className="block font-normal text-base text-tertiary overflow-hidden text-ellipsis whitespace-nowrap">
          {character}
        </span>
      </div>
    </figure>
  );
};

export default MovieCardCast;
