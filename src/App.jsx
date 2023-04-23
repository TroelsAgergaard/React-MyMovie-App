import "./assets/App.css";
import HeadingOne from "./components/HeadingOne";
import MovieCard from "./templates/Home/MovieCard";
import HeadingTwo from "./components/HeadingTwo";
import SeeMoreButton from "./components/ui/SeeMoreButton";
import Switch from "./components/ui/Switch";

function App() {
  return (
    <div className="App">
      <header className="gridContainer">
        <HeadingOne />
        <Switch />
      </header>
      <main>
        <section>
          <div className="flexContainer justify-space-between">
            <HeadingTwo />
            <SeeMoreButton />
          </div>
          <div className="flexContainer movieCardContainer">
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
