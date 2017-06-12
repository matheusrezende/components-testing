import React from 'react';
import { View } from 'react-native';

const ButtonRow = (props) => {
    return (
        <View style={styles.list}>
            {props.children}
        </View>
    );
};

const styles = {
    list: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: 'auto',
        paddingHorizontal: 5,
        paddingBottom: 10
    }
};

export default ButtonRow;
