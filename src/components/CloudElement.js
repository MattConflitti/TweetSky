import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

class CloudElement extends Component {
    render() {
        return (
            <View>
                <Text>{this.children}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

CloudElement.propTypes = {};

export { CloudElement };