import styled from "styled-components";
import Actor from "../components/Actor";
import Button from "../components/Button";
import Heading from "../components/Heading";

const NewLine = styled.div`
  flex-basis: 100%;
  height: 1rem;
`;

const MovieCast = ({ data }) => {
  console.log("Cast ", data);
  return (
    <section>
      <div className="flexContainer justify-space-between wrap">
        <Heading title="Cast" size="16" as="h2" />
        <Button title="See More" />
        <NewLine />
        {data.cast.map(
          (actor) => actor.profile_path && <Actor data={actor} key={actor.id} />
        )}
      </div>
    </section>
  );
};

export default MovieCast;
