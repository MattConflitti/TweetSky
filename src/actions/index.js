import axios from 'axios';

export const getSuggestions = (dispatch) => {
    axios.get('https://api.twitter.com/1.1/trends/place.json?id=23424977',
        { headers:
            {
                Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAALPeywAAAAAA%2B7ry%2BdaSbD7EQQbgQKqYCfpRyck%3DDyuoFY5hN4KqTZNIIX6P3L9IBdvhiZdMT6xYvoyHaVxrC6mGoJ'
            }
        })
        .then(response => {
            console.log();
            dispatch({
                type: 'get_suggestions',
                data: response.data[0].trends
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getTweets = (query, dispatch) => {
    let q = '';
    let type = 'string';
    switch (query.charAt(0)) {
        case '#':
            q = encodeURIComponent(query);
            type = 'hashtag';
            break;
        case '@':
            q = query.substr(1);
            type = 'handle';
            break;
        default:
            q = query;
    }

    let endpoint = '';
    q = q.toLowerCase();
    if (type === 'string' || type === 'hashtag') {
        endpoint = `https://api.twitter.com/1.1/search/tweets.json?q=${q}&result_type=mixed&count=25`;
    } else {
        endpoint = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${q}&count=25`;
    }

    axios.get(endpoint,
        {
            headers:
                {
                    Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAALPeywAAAAAA%2B7ry%2BdaSbD7EQQbgQKqYCfpRyck%3DDyuoFY5hN4KqTZNIIX6P3L9IBdvhiZdMT6xYvoyHaVxrC6mGoJ'
                }
        })
        .then(response => {
            console.log(response.data);
            dispatch({
                type: 'get_tweets',
                data: (type === 'handle') ? response.data : response.data.statuses
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
