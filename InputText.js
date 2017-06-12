import React from 'react';
import { TextInput, View, Text } from 'react-native';

const InputText = ({label, value, onChangeText, placeholder, secureTextEntry, exampleText}) => {
    const {inputStyle, labelStyle, containerStyle, exampleStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                underlineColorAndroid='rgba(0,0,0,0)'
            />
            <View>
                <Text style={exampleStyle}>{exampleText}</Text>
            </View>
        </View>
    );
};

const styles = {
    inputStyle: {
        fontWeight: 'normal',
        color: '#000',
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 16,
        borderColor: '#454545',
        borderWidth: 1,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        height: 45,
        textAlign: 'left'
    },
    exampleStyle: {
        textAlign: 'right',
        fontSize: 10
    },
    labelStyle: {
        fontSize: 14,
        paddingTop: 10,
        textAlign: 'right',
        color: '#454545'
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
};

export { InputText };
