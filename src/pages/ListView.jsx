import NowShowing from "../templates/NowShowing";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Switch from "../components/Switch";
import Popular from "../templates/Popular";
import Navigation from "../components/Navigation";
import axios from "axios";

const ListView = () => {
  return (
    <>
      <header className="gridContainer header">
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
          <div className="flexContainer justify-space-between VerticalMovieListTitleLayout">
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

export const listViewData = async () => {
  return await Promise.allSettled([
    axios(
      "https://api.themoviedb.org/3/movie/now_playing/?api_key=a996c0fb2a62f3545c6946cb0685bfa0"
    ),
    axios(
      "https://api.themoviedb.org/3/movie/popular/?api_key=a996c0fb2a62f3545c6946cb0685bfa0"
    ),
  ]).then((data) => {
    return {
      nowShowing: data[0].value.data.results,
      popular: data[1].value.data.results,
    };
  });
};

export default ListView;
