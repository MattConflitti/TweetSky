import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { SearchBar } from '../components/SearchBar';

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text>Welcome!!!</Text>
                <SearchBar />
            </View>
        );
    }
}

const styles = StyleSheet.create({});

HomeScreen.propTypes = {};

export { HomeScreen };
