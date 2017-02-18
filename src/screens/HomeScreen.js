import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import SearchBarContainer from '../containers/SearchBarContainer';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SearchBarContainer />
            </View>
        );
    }
}

const styles = StyleSheet.create({});

HomeScreen.propTypes = {};

export { HomeScreen };
