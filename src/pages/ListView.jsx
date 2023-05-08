import Heading from "../components/Heading";
import Switch from "../components/Switch";
import Navigation from "../components/Navigation";
import NowShowing from "../templates/NowShowing";
import Popular from "../templates/Popular";

const ListView = () => {
  return (
    <>
      <header className="gridContainer header">
        <Switch justify="end" align="center" />
        <Heading title="MyMovies" size="16" as="h1" />
      </header>
      <main>
        <NowShowing />
        <Popular />
      </main>
      <footer>
        <Navigation />
      </footer>
    </>
  );
};

export default ListView;
