// Import libraries for making a component
import React from 'react';
import { Text, View, Platform } from 'react-native';

// Make a component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.children}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#0098da',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        ...Platform.select({
            ios: {
                paddingTop: 30
            },
            android: {
                paddingTop: 15
            }
        }),
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        color: '#FFF',
        fontSize: 20
    }
};

// Make the component available to other parts of the app
export { Header };
