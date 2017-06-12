import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ContentBox extends Component {
    render () {
        const { contentBoxWrapper, contentBoxHeaderText, contentBox } = styles;
        return (
            <View style={contentBoxWrapper}>
                <Text style={contentBoxHeaderText}>{this.props.contentBoxHeaderText}</Text>
                <View style={contentBox}>{this.props.children}</View>
            </View>
        );
    };
};
const styles = {
    contentBoxWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    contentBoxHeaderText: {
        textAlign: 'left',
        color: '#FFF',
        fontSize: 20
    },
    contentBox: {
        backgroundColor: '#fff',
        flex: 1,
        marginBottom: 10,
        padding: 10
    }
};

export { ContentBox };
