import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import axios from 'axios';
import Autocomplete from 'react-native-autocomplete-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from './index';

/**
 * SearchBar component serves as entry into
 * the search functionality of the application
 */
class SearchBar extends Component {

    /**
     * Class constructor used to set up state
     */
    constructor() {
        super();

        /**
         * State object stores local state of the component for
         * typing functionality
         * @type {{searchValue: string}}
         */
        this.state = {
            searchValue: '',
            results: [
                {
                    text: 'Test1'
                },
                {
                    text: 'Test2'
                }
            ]
        };
    }

    componentDidMount() {

        //YAY IT WORKS!!!
        axios.get('https://api.twitter.com/1.1/search/tweets.json?q=hello',
            { headers: {
                Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAALPeywAAAAAA%2B7ry%2BdaSbD7EQQbgQKqYCfpRyck%3DDyuoFY5hN4KqTZNIIX6P3L9IBdvhiZdMT6xYvoyHaVxrC6mGoJ' } })
            .then(response => {
                // If request is good...
                console.log(response.data);
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }

    /**
     *
     * @param {string} query
     * @returns {Object[]}
     */
    getResults(query) {
        if (query === '') {
            return [];
        }

        const { results } = this.state;
        const regex = new RegExp(`${query.trim()}`, 'i');
        return results.filter(result => result.text.search(regex) >= 0);
    }

    /**
     * Renders the SearchBar component
     * @returns {XML}
     */
    render() {
        const { searchValue } = this.state;
        const results = this.getResults(searchValue);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        return (
            <View style={styles.containerStyle}>
                <View style={{ flex: 1, backgroundColor: '#F5FCFF' }}>
                    <Autocomplete
                        autoCapitalize="none"
                        autoCorrect={false}
                        containerStyle={styles.autocompleteContainer}
                        data={results.length === 1 &&
                            comp(searchValue, results[0].text) ? [] : results}
                        defaultValue={searchValue}
                        onChangeText={text => this.setState({ searchValue: text })}
                        placeholder="Enter a #hashtag, phrase, or @user..."
                        renderItem={({ text }) => (
                        <TouchableOpacity onPress={() => this.setState({ searchValue: text })}>
                          <Text style={styles.itemText}>
                            {text}
                          </Text>
                        </TouchableOpacity>
                      )}
                    />
                </View>
                <View style={styles.searchButton}>
                    <Button title="Search" onPress={() => {}}>
                        <Icon name="search" size={30} color="#000" />
                    </Button>
                </View>
            </View>
        );
    }
}

//TODO get request for US trending hashtags
//https://api.twitter.com/1.1/trends/place.json?id=23424977

/**
 * Stylesheet contains styles for this component
 * @type {Object}
 */
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        position: 'relative'
    },
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    },
    itemText: {
        fontSize: 15,
        margin: 2
    },
    searchButton: {
        width: 40,
        position: 'absolute',
        zIndex: 10,
        right: 0,
        paddingTop: 5
    }
});

SearchBar.propTypes = {};

export { SearchBar };
