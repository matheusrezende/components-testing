import React from 'react';
import { Text, TouchableOpacity, Image, View, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const BigButton = ({onPress, children, imageSource, color}) => {
    const {
        buttonStyle,
        textStyle,
        imageStyle,
        textContainerStyle,
        imageContainer
    } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={[buttonStyle, {backgroundColor: color}]}>
            <View style={imageContainer}>
                <Image source={imageSource} style={imageStyle} />
            </View>
            <View style={textContainerStyle}>
                <Text style={textStyle}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    textContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        minHeight: Math.floor(window.width / 10),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    imageStyle: {
        flex: 1,
        maxWidth: Math.floor(window.width / 10),
        resizeMode: 'contain'
    },
    textStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: Math.floor(window.width / 24),
        fontWeight: '600'
    },
    buttonStyle: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-around',
        alignSelf: 'stretch',
        borderRadius: 5,
        marginHorizontal: 5
    }
};

export default BigButton;
