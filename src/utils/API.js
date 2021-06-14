import axios from 'axios';
const { REACT_APP_MOVIE_DB_API_KEY, REACT_APP_API_DOMAIN, REACT_APP_API_BASE_IMAGE_URL } = process.env;

export default {
    getLatestMovies: function () {
        return axios.get(REACT_APP_API_DOMAIN + '/movie/now_playing?api_key=' + REACT_APP_MOVIE_DB_API_KEY + '&language=en-US&page=1');
    },
    getMovieImage: function () {
        return axios.get(REACT_APP_API_DOMAIN);
    },
    searchMovies: function () {
        return axios.get(REACT_APP_API_DOMAIN);
    }
}