import { connect } from 'react-redux';
import * as actions from '../actions';
import { SearchBar } from '../components';

const mapStateToProps = (state) => {
    return {
        suggestionData: state.tweets.suggestions,
        tweetData: state.tweets.results
    };
};

function mapDispatchToProps(dispatch) {
    return {
        getSuggestions: () => actions.getSuggestions(dispatch),
        getTweets: (query) => actions.getTweets(query, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
