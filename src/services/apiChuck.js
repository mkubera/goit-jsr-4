import axios from "axios";

const getJoke = async () => {
  const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
  return data.value;
};

const apiChuck = { getJoke };

export default apiChuck;
