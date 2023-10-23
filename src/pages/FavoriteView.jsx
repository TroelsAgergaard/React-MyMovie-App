import React, { Suspense } from "react";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Switch from "../components/Switch";
//import Favorite from "../templates/Favorite";
const Favorite = React.lazy(() => import("../templates/Favorite"));

const FavoriteView = () => {
  return (
    <>
      <header className="gridContainer header dark:bg-black">
        <Switch justify="end" align="center" />
        <Heading title="MyMovies" size="16" as="h1" />
      </header>
      <main>
        <section className="VerticalMovieListContainer">
          <div className="flexContainer movieListContainerLayout">
            <Suspense fallback={<div>Loading favorite...</div>}>
              <Favorite />
            </Suspense>
          </div>
        </section>
      </main>
      <footer>
        <Navigation />
      </footer>
    </>
  );
};

export default FavoriteView;
