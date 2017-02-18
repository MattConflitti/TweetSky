import axios from 'axios';

export const getTweets = (dispatch) => {
    axios.get('https://api.twitter.com/1.1/trends/place.json?id=23424977',
        { headers:
            {
                Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAALPeywAAAAAA%2B7ry%2BdaSbD7EQQbgQKqYCfpRyck%3DDyuoFY5hN4KqTZNIIX6P3L9IBdvhiZdMT6xYvoyHaVxrC6mGoJ'
            }
        })
        .then(response => {
            // If request is good...
            console.log();
            dispatch({
                type: 'get_tweets',
                data: response.data[0].trends
            });
        })
        .catch((error) => {
            console.log(error);
        });
};