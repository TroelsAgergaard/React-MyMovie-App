import HeadingOne from "../components/HeadingOne";
import Image from "../components/Image";
import Heading3 from "../components/HeadingThree";
import MovieRating from "../components/MovieRating";

const MovieCard = () => {
  return (
    <article>
      <figure>
        <Image />
      </figure>
      <Heading3 />
      <MovieRating />
    </article>
  );
};

export default MovieCard;
