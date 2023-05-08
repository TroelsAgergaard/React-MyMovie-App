import styled from "styled-components";
import Image from "../components/Image";
import Rating from "../components/Rating";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { Link, useLoaderData } from "react-router-dom";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NowShowing = () => {
  const movieCardData = useLoaderData();
  return (
    <section className="HorizontalMovieListContainer">
      <div className="flexContainer justify-space-between">
        <Heading title="Now Showing" size="16" as="h2" />
        <Button title="See More" />
      </div>
      <div className="flexContainer movieCardContainerLayout">
        {movieCardData.results.map((data) => (
          <Link to={`details/${data.id}`} key={data.id}>
            <StyledArticle>
              <figure>
                <Image
                  width="143"
                  shadow={true}
                  src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                  alt="Cover Image"
                />
              </figure>
              <Heading
                title={
                  data.title.length > 25
                    ? data.title.substring(0, 25) + "..."
                    : data.title
                }
                size="14"
                as="h3"
              />
              <Rating voteAverage={data.vote_average} />
            </StyledArticle>
          </Link>
        ))}
      </div>
    </section>
  );
};

export async function loader() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing/?api_key=a996c0fb2a62f3545c6946cb0685bfa0"
  );
  const data = await res.json();
  return data;
}

export default NowShowing;
