import { StyleSheet } from 'react-native';

export const ContainerShopping = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
        marginTop:'8%',
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
        marginLeft:15
    },
    containerHeaderCheck:{
        marginRight:15
    },
    containerItens:{
        marginTop:13,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    }
})