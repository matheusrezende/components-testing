import React from 'react';
import { Text, View, Image, Platform, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const BigHeader = ({headerColor, imageSource, children, textColor, horizontal}) => {
    const {
        textStyle,
        horizontalStyle,
        verticalStyle,
        imageStyle,
        imageContainer,
        imageContainerHorizontal
    } = styles;

    let fontSize = Math.floor(window.width / 18);
    let textAlign = 'center';
    let viewStyle;

    if (!textColor) {
        textColor = '#FFF';
    }
    if (horizontal) {
        fontSize = Math.floor(window.width / 22);
        textAlign = 'left';
        viewStyle = horizontalStyle;
    } else {
        viewStyle = verticalStyle;
    }
    if (horizontal) {
        return (
            <View style={[
                viewStyle,
                {backgroundColor: headerColor}
            ]}>
                <View style={imageContainerHorizontal}>
                    <Image source={imageSource} style={imageStyle} />
                </View>
                <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: textColor, fontSize, textAlign}}>{children}</Text>
                </View>
            </View>
        );
    } else {
        return (
            <View style={[
                viewStyle,
                {backgroundColor: headerColor}
            ]}>
                <View style={imageContainer}>
                    <Image source={imageSource} style={imageStyle} />
                </View>
                <Text style={[textStyle, {color: textColor, fontSize, textAlign}]}>{children}</Text>
            </View>
        );
    }

};

const styles = {
    imageContainer: {
        minHeight: Math.floor(window.width / 10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainerHorizontal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        flex: 1,
        resizeMode: 'contain',
    },
    horizontalStyle: {
        flex: 1,
        ...Platform.select({
            ios: {
                maxHeight: Math.floor(window.width / 5)
            },
            android: {
                maxHeight: Math.floor(window.width / 6)
            }
        }),
        ...Platform.select({
            ios: {
                paddingTop: 25
            },
            android: {
                paddingTop: 15
            }
        }),
        flexDirection: 'row',
        display: 'flex',
        width: 'auto',
        padding: 10
    },
    verticalStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingVertical: 10,
        ...Platform.select({
            ios: {
                paddingTop: 30
            },
            android: {
                paddingTop: 15
            }
        }),
        width: 'auto'
    },
    textStyle: {
        color: '#FFF',
        margin: 10
    }
};

export { BigHeader };
