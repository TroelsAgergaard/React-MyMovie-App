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

    fetch(`https://api.themoviedb.org/3/movie/${id}/account_states`, options)
      .then((response) => response.json())
      .then((response) => setFavorite(response.favorite))
      .catch((err) => console.error(err));
  }, []);
  return favorite;
}
