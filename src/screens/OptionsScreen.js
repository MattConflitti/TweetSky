import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


/**
 * Set up colors, number of results, type of results, date, etc
 */
class OptionsScreen extends Component {
    render() {
        return (
            <View>
                <Text>Refine your search:</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

OptionsScreen.propTypes = {};

export { OptionsScreen };
