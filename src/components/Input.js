import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
    View
} from 'react-native';

/**
 * Creates generic input component for any form or search bar
 */
class Input extends Component {
    /**
     * Renders component
     * @returns {XML}
     */
    render() {
        const { placeholder, secureTextEntry, value, onChangeText } = this.props;
        return (
            <View style={styles.containerStyle}>
                <TextInput
                    style={styles.inputStyle}
                    secureTextEntry={secureTextEntry}
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    autoCorrect={false}
                />
            </View>
        );
    }
}

/**
 * Stylesheet object used to style this component.
 * @type {Object}
 */
const styles = StyleSheet.create({
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        flex: 1,
        backgroundColor: 'white',
        fontSize: 18,
        lineHeight: 23
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

/**
 * Object that sets specs on types of props
 * and which are required for this component.
 * @type {Object}
 */
Input.propTypes = {
    placeholder: React.PropTypes.string,
    secureTextEntry: React.PropTypes.bool,
    value: React.PropTypes.string,
    onChangeText: React.PropTypes.func
};

// optionalArray: React.PropTypes.array,
// optionalBool: React.PropTypes.bool,
// optionalFunc: React.PropTypes.func,
// optionalNumber: React.PropTypes.number,
// optionalObject: React.PropTypes.object,
// optionalString: React.PropTypes.string,
// optionalSymbol: React.PropTypes.symbol,

export { Input };