import axios from "axios";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Switch from "../components/Switch";
import NowShowing from "../templates/NowShowing";
import Popular from "../templates/Popular";

const ListView = () => {
  return (
    <>
      <header className="gridContainer header dark:bg-black">
        <Switch justify="end" align="center" />
        <Heading title="MyMovies" size="16" as="h1" />
      </header>
      <main>
        <section className="HorizontalMovieListContainer">
          <div className="flexContainer justify-space-between">
            <Heading title="Now Showing" size="16" as="h2" />
            <Button title="See More" />
          </div>
          <div className="flexContainer movieCardContainerLayout">
            <NowShowing />
          </div>
        </section>
        <section className="VerticalMovieListContainer">
          <div className="flexContainer justify-space-between VerticalMovieListTitleLayout dark:bg-black">
            <Heading title="Popular" size="16" as="h2" />
            <Button title="See More" />
          </div>
          <div className="flexContainer movieListContainerLayout">
            <Popular />
          </div>
        </section>
      </main>
      <footer>
        <Navigation />
      </footer>
    </>
  );
};

export const ListViewData = async () => {
  return await Promise.allSettled([
    axios(`https://api.themoviedb.org/3/movie/now_playing`, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_TOKEN,
      },
    }),
    axios(`https://api.themoviedb.org/3/movie/popular`, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_TOKEN,
      },
    }),
  ]).then((data) => {
    return {
      nowShowing: data[0].value.data.results,
      popular: data[1].value.data.results,
    };
  });
};

export default ListView;
