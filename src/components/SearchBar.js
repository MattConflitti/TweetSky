import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { Input, Button } from './index';

class SearchBar extends Component {
    render() {
        return (
            <View>
                <Input /><Button>Go</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

SearchBar.propTypes = {};

export { SearchBar };