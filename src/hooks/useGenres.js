import { useEffect, useState } from "react";
export function useGenres() {
  const [genres, setGenres] = useState(undefined);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTk2YzBmYjJhNjJmMzU0NWM2OTQ2Y2IwNjg1YmZhMCIsInN1YiI6IjY0NDUxZjkwYWQ4N2Y3MDRmNjcyOTY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUJRev0nHSdeso-a974yCNUnsi756N491nZZ3-nXBGA",
      },
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((response) => setGenres(response.genres))
      .catch((err) => console.error(err));
  }, []);
  return genres;
}
