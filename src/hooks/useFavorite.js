import { useEffect, useState } from "react";
export function useFavorite(id) {
  const [favorite, setFavorite] = useState(undefined);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_TOKEN,
      },
    };
    fetch(
      "https://api.themoviedb.org/3/account/19103084/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results.length);
        const isFavorite = response.results.some((obj) => obj.id === id);
        setFavorite(isFavorite);
      })
      .catch((err) => console.error(err));
  }, []);
  return favorite;
}
