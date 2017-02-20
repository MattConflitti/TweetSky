export default (state = [], action) => {
    switch (action.type) {
        case 'get_tweets':
            return action.data;
        default:
            return state;
    }
};
