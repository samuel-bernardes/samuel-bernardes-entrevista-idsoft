import axios from "axios";

export const getRandomUser = async () => {
  const data = await axios.get('https://randomuser.me/api')

  return data;
};