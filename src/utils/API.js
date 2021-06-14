import axios from 'axios';
const { REACT_APP_MOVIE_DB_API_KEY, REACT_APP_API_DOMAIN, REACT_APP_API_BASE_IMAGE_URL } = process.env;

export default {
    getLatestMovies: function () {
        return axios.get(REACT_APP_API_DOMAIN + '/movie/now_playing?api_key=' + REACT_APP_MOVIE_DB_API_KEY + '&language=en-US&page=1');
    },
    getMovieImage: function (image_url) {
        return (REACT_APP_API_BASE_IMAGE_URL + image_url);
    },
    searchMovies: function (query) {
        return axios.get(REACT_APP_API_DOMAIN + '/search/movie?api_key=' + REACT_APP_MOVIE_DB_API_KEY + '&language=en-US&query=' + query + '&page=1&include_adult=false');
    }
}