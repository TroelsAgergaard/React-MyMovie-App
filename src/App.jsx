import "./App.css";
import MovieCard from "./templates/MovieCard";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Switch from "./components/Switch";
import MovieItem from "./templates/MovieItem";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header className="gridContainer">
        <Heading title="MyMovies" size="16" as="h1" />
        <Switch />
      </header>
      <main>
        <section className="HorizontalMovieListContainer">
          <div className="flexContainer justify-space-between">
            <Heading title="Now Showing" size="16" as="h2" />
            <Button title="See More" />
          </div>
          <div className="flexContainer movieCardContainerLayout">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
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
      </main>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
}

export default App;
