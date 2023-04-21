import HeadingOne from "../components/HeadingOne";
import Image from "../components/Image";
import Heading3 from "../components/HeadingThree";
import MovieRating from "../components/MovieRating";
const MovieCard = () => {
  return (
    <article>
      <figure>
        <Image />
        <Heading3 />
        <MovieRating />
      </figure>
    </article>
  );
};

export default MovieCard;
