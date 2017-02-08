import React, { Component } from 'react';
import {
    TouchableOpacity
} from 'react-native';

class Button extends Component {
    render() {
        return (
            <TouchableOpacity {...this.props}>
                {this.children}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({});

Button.propTypes = {};

export { Button };