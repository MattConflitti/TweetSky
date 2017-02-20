export default (state = { results: [], suggestions: [] }, action) => {
    switch (action.type) {
        case 'get_tweets':
            return {
                ...state,
                results: action.data
            };
        case 'get_suggestions':
            return {
                ...state,
                suggestions: action.data
            };
        default:
            return state;
    }
};
