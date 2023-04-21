import "./App.css";
import HeadingOne from "./components/HeadingOne";
import MovieCard from "./templates/MovieCard";
import HeadingTwo from "./components/HeadingTwo";
import SeeMoreButton from "./components/SeeMoreButton";

function App() {
  return (
    <div className="App">
      <header>
        <HeadingOne />
      </header>
      <main>
        <section>
          <div className="flexContainer space-between">
            <HeadingTwo />
            <SeeMoreButton />
          </div>
          <div className="flexContainer scroll">
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section></section>
      </main>
      <footer>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
