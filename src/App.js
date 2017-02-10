import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Navigator
} from 'react-native';
import { HomeScreen, SearchResultsScreen } from './screens/index';

/**
 * Main entry point to application.
 * Provides the navigation and main view functionality
 */
export default class App extends Component {

    /**
     * Constructor of this class
     */
    constructor() {
        super();

        /**
         * Stores route information for Navigator
         * @type {Object[]}
         * @property {string} routes[*].title
         * @property {number} routes[*].index
         * @property {Object} routes[*].scene
         */
        this.routes = [
            {
                title: 'TweetSky',
                index: 0,
                scene: HomeScreen
            },
            {
                title: 'Search Results',
                index: 1,
                scene: SearchResultsScreen
            }
        ];
    }

    /**
     * Renders the scene based on navigation stack; uses switch statement
     * @param {Object} route
     * @param {Object} navigator
     * @returns {XML}
     */
    renderScene(route, navigator) {
        switch (route.index) {
            case 0 :
                return (<HomeScreen navigator={navigator} />);
            case 1 :
                return (<SearchResultsScreen navigator={navigator} />);
            default :
                navigator.replace(this.routes[0]);
        }
    }

    /**
     * Renders the main view of the application. Here is where the
     * Navigator is used to render the view depending on what user
     * is doing.
     * @returns {XML}
     */
    render() {
        return (
            <Navigator
                initialRoute={this.routes[0]}
                initialRouteStack={this.routes}
                renderScene={this.renderScene}
                style={{ paddingTop: 65 }}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
                navigationBar={
                     <Navigator.NavigationBar
                       routeMapper={{
                         LeftButton: (route, navigator, index, navState) => {
                            if (route.index === 0) {
                              return null;
                            } else {
                              return (
                                <TouchableHighlight onPress={() => navigator.pop()}>
                                  <Text>Back</Text>
                                </TouchableHighlight>
                              );
                            }
                          },
                         RightButton: (route, navigator, index, navState) => {
                             return (
                                    <TouchableHighlight onPress={() => navigator.push(this.routes[1])}>
                                        <Text>Search</Text>
                                    </TouchableHighlight>
                                 );
                         },
                         Title: (route, navigator, index, navState) => {
                             return (<Text>{route.title}</Text>);
                         },
                       }}
                       style={styles.navBar}
                       navigationStyles={Navigator.NavigationBar.StylesIOS}
                     />
                }
            />
        );
    }
}

/**
 * StyleSheet object used to style the navbar and main view
 * @type {Object}
 */
const styles = StyleSheet.create({
    navBar: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navText: {
        fontWeight: 'bold',
        fontSize: 20
    }
});
