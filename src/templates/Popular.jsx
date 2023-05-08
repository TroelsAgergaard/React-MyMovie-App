import Heading from "../components/Heading";
import Button from "../components/Button";
import MovieItem from "./MovieItem";

const Popular = () => {
  return (
    <section className="VerticalMovieListContainer">
      <div className="flexContainer justify-space-between VerticalMovieListTitleLayout">
        <Heading title="Popular" size="16" as="h2" />
        <Button title="See More" />
      </div>
      <div className="flexContainer movieListContainerLayout">
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
      </div>
    </section>
  );
};

export default Popular;
