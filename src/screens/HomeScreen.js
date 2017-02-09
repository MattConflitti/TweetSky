import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text>Welcome!!!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

HomeScreen.propTypes = {};

export { HomeScreen };
