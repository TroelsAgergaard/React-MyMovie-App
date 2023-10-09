import { useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useFavorite } from "../hooks/useFavorite";

const FavoriteIcon = () => {
  const { id } = useParams();
  const favorite = useFavorite(parseInt(id));
  const [bookmarked, setBookmarked] = useState(undefined);

  useEffect(() => {
    favorite && setBookmarked(favorite);
  }, [favorite]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (render) {
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_TOKEN,
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: id,
          favorite: bookmarked,
        }),
      };
      fetch("https://api.themoviedb.org/3/account/19103084/favorite", options);
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
