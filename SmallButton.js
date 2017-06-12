import React from 'react';
import { TouchableOpacity } from 'react-native';

const SmallButton = ({onPress, color, children}) => {

    const {
        buttonStyle
    } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={[buttonStyle, {backgroundColor: color}]}>
            {children}
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        alignSelf: 'stretch',
        marginLeft: 5,
        marginRight: 5,
        minHeight: 45
    }
};

export { SmallButton };
