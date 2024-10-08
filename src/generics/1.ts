import axios from 'axios';
axios.defaults.baseURL = 'https://66f1b550415379191551df53.mockapi.io';

async function fetchData(url: string): Promise<object> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

console.log(fetchData('/contacts'));
