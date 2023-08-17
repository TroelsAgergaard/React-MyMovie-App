import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Heading from "../components/Heading";
import Label from "../components/Label";
import Rating from "../components/Rating";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const StyledFaRegBookmark = styled(FaRegBookmark)`
  align-self: top;
  padding-left: 25px;
`;
const StyledFaBookmark = styled(FaBookmark)`
  align-self: top;
  padding-left: 25px;
`;
const StyledGridSection = styled.section`
  display: grid;
  grid-template-columns: 25vw 25vw 25vw;
`;
const StyledFlexSection = styled.section`
  display: flex;
  gap: 8px;
`;
const StyledP = styled.p`
  margin-top: 5px;
  font-weight: 500;
  font-size: 12px;
`;

const MovieInfo = ({ data }) => {
  const { id } = useParams("id");
  const [bookmarked, setBookmarked] = useState(
    JSON.parse(localStorage.getItem(id))
  );
  return (
    <StyledSection>
      <div className="flexContainer justify-space-between">
        <Heading title={data.title} size="20" as="h1" />
        <span
          onClick={() => {
            setBookmarked(!bookmarked);
            bookmarked
              ? localStorage.removeItem(id)
              : localStorage.setItem(id, JSON.stringify(data.title));
          }}
        >
          {!bookmarked ? <StyledFaRegBookmark /> : <StyledFaBookmark />}
        </span>
      </div>
      <Rating voteAverage={data.vote_average} />
      <StyledFlexSection>
        <Label title="action" />
        <Label title="action" />
        <Label title="action" />
      </StyledFlexSection>
      <StyledGridSection>
        <Heading title="Length" size="12" as="h4" />
        <Heading title="Langauge" size="12" as="h4" />
        <Heading title="Vote counts" size="12" as="h4" />
        <StyledP>{data.runtime} min.</StyledP>
        <StyledP>{data.original_language}</StyledP>
        <StyledP>{data.vote_count}</StyledP>
      </StyledGridSection>
    </StyledSection>
  );
};

export default MovieInfo;
