import axios from "axios";
const Np = () => {
  const options = {
    url: "https://api.themoviedb.org/3/movie/now_playing",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_TOKEN,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return <></>;
};

export default Np;
