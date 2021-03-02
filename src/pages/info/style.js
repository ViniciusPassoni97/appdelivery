import {StyleSheet, Dimensions} from 'react-native';

export const StyleInfo = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:50,
        height: '100%',
    },
    containerHeader:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    containerHeaderMap:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});