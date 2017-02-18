import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ListView,
    Keyboard
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

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        /**
         * State object stores local state of the component for
         * typing functionality
         * @type {{searchValue: string}}
         */
        this.state = {
            searchValue: '',
            results: []
        };
    }

    /**
     * Set up function to get data when component is mounted to screen
     * @override
     */
    componentDidMount() {
        //YAY IT WORKS!!!
        axios.get('https://api.twitter.com/1.1/trends/place.json?id=23424977',
            { headers:
                {
                    Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAALPeywAAAAAA%2B7ry%2BdaSbD7EQQbgQKqYCfpRyck%3DDyuoFY5hN4KqTZNIIX6P3L9IBdvhiZdMT6xYvoyHaVxrC6mGoJ'
                }
            })
            .then(response => {
                // If request is good...
                console.log(response.data[0].trends);
                this.setState({ results: response.data[0].trends });
            })
            .catch((error) => {
                console.log(error);
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
        return results.filter(result => result.name.search(regex) >= 0);
    }

    /**
     * Renders the SearchBar component
     * @returns {XML}
     * @override
     */
    render() {
        const { searchValue } = this.state;
        const results = this.getResults(searchValue);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        return (
            <View style={{ flex: 1, flexDirection: 'column', position: 'relative' }}>
                <View style={styles.containerStyle}>
                    <View style={{ flex: 1 }}>
                        <Autocomplete
                            autoCapitalize="none"
                            autoCorrect={false}
                            containerStyle={styles.autocompleteContainer}
                            data={results.length === 1 &&
                                comp(searchValue, results[0].name) ? [] : results}
                            defaultValue={searchValue}
                            onChangeText={text => this.setState({ searchValue: text })}
                            placeholder="Enter a #hashtag, phrase, or @user..."
                            renderItem={({ name }) => (
                            <TouchableOpacity
                                onPress={() => {
                                        this.setState({ searchValue: name });
                                        Keyboard.dismiss();
                                        //TODO also search once clicked
                                    }
                                }
                            >
                              <Text style={styles.itemText}>
                                {name}
                              </Text>
                            </TouchableOpacity>
                          )}
                        />
                    </View>
                    <View style={styles.searchButton}>
                        <Button title="Search" onPress={() => { Keyboard.dismiss(); }}>
                            <Icon name="search" size={30} color="#000" />
                        </Button>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {/*place word cloud here*/}
                    <Text>{this.state.searchValue}</Text>
                </View>
                {/*<ListView*/}
                    {/*dataSource={this.ds.cloneWithRows(this.state.results)}*/}
                    {/*renderRow={({ name }) => <Text>{name}</Text>}*/}
                {/*/>*/}

            </View>
        );
    }
}

/**
 * Stylesheet contains styles for this component
 * @type {Object}
 */
const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row'
    },
    autocompleteContainer: {
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 10,
        flex: 1
    },
    itemText: {
        fontSize: 15,
        margin: 2,
        backgroundColor: 'white'
    },
    searchButton: {
        width: 40,
        paddingTop: 5,
        paddingLeft: 5
    }
});

SearchBar.propTypes = {};

export { SearchBar };
