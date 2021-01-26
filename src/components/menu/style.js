import {StyleSheet} from 'react-native';

export const StyleMenu = StyleSheet.create({
    containerMenu:{
        display:'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    containerMenuItem:{
        height:94,
        padding:25
    },
    containerMenuImage:{
        width:45,
        height:37
    }
});