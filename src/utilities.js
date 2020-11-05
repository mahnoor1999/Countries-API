export const getCountries = () => {
    return fetch("https://restcountries-v1.p.rapidapi.com/all", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "ff63aadademsh9ca20b716eb5dc8p112f13jsna3ea6fa0a9a3",
    },
  })
    .then((response) => response.json())
    .then((data) => (data))
    .catch((err) => {
      console.log(err);
    });
}