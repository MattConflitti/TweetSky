import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';

/**
 * Generic button component that can be customizes for any use in application
 */
class Button extends Component {
    /**
     * Renders button component to screen
     * @returns {XML}
     */
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

/**
 * Stylesheet used to style this component.
 * @type {Object}
 */
const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1
    }
});

Button.propTypes = {
    onPress: React.PropTypes.func
};

export { Button };
