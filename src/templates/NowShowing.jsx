import styled from "styled-components";
import Image from "../components/Image";
import Rating from "../components/Rating";
import Heading from "../components/Heading";
import { Link, useLoaderData } from "react-router-dom";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NowShowing = () => {
  const MovieCardData = useLoaderData();
  console.log(MovieCardData);
  return (
    <>
      {MovieCardData.results.map((data) => (
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
                  ? data.title.split(" ").slice(0, 3).join(" ") + "..."
                  : data.title
              }
              size="14"
              as="h3"
            />
            <Rating voteAverage={data.vote_average} />
          </StyledArticle>
        </Link>
      ))}
    </>
  );
};

export async function loader() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing/?api_key="
  );
  const data = await res.json();
  return data;
}

export default NowShowing;
