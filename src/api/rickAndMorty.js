import axios from 'axios';

const characterBaseURL = 'https://rickandmortyapi.com/api/character';
const locationBaseURL = 'https://rickandmortyapi.com/api/location';
const episodeBaseURL = 'https://rickandmortyapi.com/api/episode';

export default {
  character: {
    async getAll(url = characterBaseURL, acumulator = []) {
      const response = await axios.get(url);
      const characters = response.result;
      if (response.info.next) {
        return this.getAll(response.info.next, acumulator.concat(characters));
      }
      return acumulator.concat(characters);
    },
    async getById(id) {
      const response = await axios.get(`${characterBaseURL}/${id}`);
      return response;
    },
  },
  location: {
    async getAll(url = locationBaseURL, acumulator = []) {
      const response = await axios.get(url);
      const locations = response.result;
      if (response.info.next) {
        return this.getAll(response.info.next, acumulator.concat(locations));
      }
      return acumulator.concat(locations);
    },
    async getById(id) {
      const response = await axios.get(`${locationBaseURL}/${id}`);
      return response;
    },
  },
  episode: {
    async getAll(url = episodeBaseURL, acumulator = []) {
      const response = await axios.get(url);
      const episodes = response.result;
      if (response.info.next) {
        return this.getAll(response.info.next, acumulator.concat(episodes));
      }
      return acumulator.concat(episodes);
    },
    async getById(id) {
      const response = await axios.get(`${episodeBaseURL}/${id}`);
      return response;
    },
  },
};
