import {StyleSheet} from 'react-native';

export const ContainerShoppingItens = StyleSheet.create({
    container:{
        padding:10
    },
    info:{
        display: 'flex',
        flexDirection:'row',
    },
    infoImage:{

    },
    infoTexts: {
        marginLeft:10
    },
    infoTextsLabel: {
        marginTop:5
    },  
    botton: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        alignItems: 'center',
        marginTop:10
    },
    bottonButtonTouchableOpacity:{
        backgroundColor:'#FF0000'
    },
    bottonButton:{
        padding:7,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottonButtonRemove:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:16
    },
    bottonButtonIcon:{
        marginLeft:10
    },
    infoImageImg:{
        height:130,
        width:130
    }
})
