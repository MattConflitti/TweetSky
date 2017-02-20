import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    Navigator
} from 'react-native';
import { connect } from 'react-redux';
import { HomeScreen, OptionsScreen } from '../screens/index';
import * as actions from '../actions';

/**
 * Main entry point to application.
 * Provides the navigation and main view functionality
 */
class AppContainer extends Component {

    /**
     * Constructor of this class
     */
    constructor() {
        super();

        /**
         * TODO create router object to store this info
         * TODO for easier nav push anywhere in app
         * Stores route information for Navigator
         * @type {Object[]}
         * @property {string} routes[*].title
         * @property {number} routes[*].index
         */
        this.routes = [
            {
                title: 'TweetSky',
                index: 0,
                name: 'home'
            },
            {
                title: 'Options',
                index: 1,
                name: 'options'
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
        switch (route.name) {
            case 'home' :
                return (<HomeScreen navigator={navigator} />);
            case 'options' :
                return (<OptionsScreen navigator={navigator} />);
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
                                  <Text style={styles.navTextLeft}>Back</Text>
                                </TouchableHighlight>
                              );
                            }
                          },
                         RightButton: (route, navigator, index, navState) => {
                             //TODO add gear instead
                             if (route.index === 1) {
                                return null;
                             } else {
                                return (
                                    <TouchableHighlight
                                        onPress={() => navigator.push(this.routes[1])}
                                    >
                                        <Text style={styles.navTextRight}>Options</Text>
                                    </TouchableHighlight>
                                );
                            }
                         },
                         Title: (route, navigator, index, navState) => {
                             return (<Text style={styles.navText}>{route.title}</Text>);
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
    navTextRight: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingRight: 5
    },
    navTextLeft: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 5
    },
    navText: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

// const mapStateToProps = (state) => {
//     return {
//         navigationState: state.navigationState
//     };
// };

export default connect(null, actions)(AppContainer);
