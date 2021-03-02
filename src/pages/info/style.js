import {StyleSheet, Dimensions} from 'react-native';

export const StyleInfo = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:50,
        height: '100%',
        alignItems: 'center',
        textAlign: 'center',
    },
    containerHeader:{
        height:50,
    },
    containerHeaderTitle:{
        fontWeight:'bold',
        fontSize:25
    },
    containerMap:{
        width: '90%',
        height: 400
    },
    containerHeaderMap:{
        width: '100%',
        height: '100%'
    },
});