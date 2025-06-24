import axios from 'axios';

export const fetchApiResource = async <T = any>(path: string): Promise<T> => {
  const apiUrl = process.env.API_URL;

  const resData = await axios
    .get(`${apiUrl}/${path}`)
    .then((res) => res.data.data);

  return resData;
};
