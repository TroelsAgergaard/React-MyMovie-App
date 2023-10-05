import { useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useParams } from "react-router-dom";

const FavoriteIcon = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const [render, setRender] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    if (render) {
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTk2YzBmYjJhNjJmMzU0NWM2OTQ2Y2IwNjg1YmZhMCIsInN1YiI6IjY0NDUxZjkwYWQ4N2Y3MDRmNjcyOTY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUJRev0nHSdeso-a974yCNUnsi756N491nZZ3-nXBGA",
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: id,
          favorite: bookmarked,
        }),
      };
      fetch("https://api.themoviedb.org/3/account/19103084/favorite", options)
    }
    setRender(true);
  }, [bookmarked]);

  return (
    <span
      onClick={() => {
        setBookmarked(!bookmarked);
      }}
    >
      {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
    </span>
  );
};

export default FavoriteIcon;
