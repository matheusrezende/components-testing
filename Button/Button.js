import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

const Button = ({onPress, children, color, imageSource}) => {
    const {buttonStyle, textStyle, imageContainer, imageStyle} = styles;

    let justifyContent = 'center';
    let padding = 0;

    if (imageSource !== undefined) {
        justifyContent = 'flex-start';
        padding = 20;
    }

    return (
        <TouchableOpacity onPress={onPress} style={[buttonStyle, {borderColor: color}, {justifyContent}]}>
            <View style={[imageContainer, {padding}]}>
                <Image source={imageSource} style={imageStyle}/>
            </View>
            <Text style={[textStyle, {color: color}]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    imageContainer: {
        minHeight: Math.floor(window.width / 10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        flex: 1,
        resizeMode: 'contain'
    },
    textStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        maxHeight: 60
    }
};

export default Button;
