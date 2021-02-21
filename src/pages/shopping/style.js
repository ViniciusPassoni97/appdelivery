import { StyleSheet } from 'react-native';

export const ContainerShopping = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
        marginTop:'15%',
    },
    containerHeader:{
        height:'10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#f1f1f1',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },
    containerHeaderText:{
        fontSize:19,
        fontWeight:'bold'
    },
    containerHeaderReturn:{
        padding:10
    }
})