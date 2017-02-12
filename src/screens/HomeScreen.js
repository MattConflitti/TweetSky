import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { SearchBar, Input } from '../components/index';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SearchBar />
            </View>
        );
    }
}

const styles = StyleSheet.create({});

HomeScreen.propTypes = {};

export { HomeScreen };
