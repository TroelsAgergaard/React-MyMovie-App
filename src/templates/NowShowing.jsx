import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Heading from "../components/Heading";
import Image from "../components/Image";
import Rating from "../components/Rating";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NowShowing = () => {
  const MovieData = useLoaderData();
  return (
    <>
      {MovieData.nowShowing.map((data) => (
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

export default NowShowing;
