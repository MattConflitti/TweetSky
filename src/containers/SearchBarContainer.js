import { connect } from 'react-redux';
import * as actions from '../actions';
import { SearchBar } from '../components';

const mapStateToProps = (state) => {
    return {
        tweetData: state.tweets
    };
};

function mapDispatchToProps(dispatch) {
    return {
        getTweets: () => actions.getTweets(dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
