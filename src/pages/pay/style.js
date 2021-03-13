import { StyleSheet } from 'react-native';

export const ContainerPay = StyleSheet.create({
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
        marginRight:55,
        marginLeft:20
    },
    containerCard:{
        alignItems: 'center'
    },
    containerFormName:{
        width:'95%',
        marginLeft:'2%'
    },
    containerFormNameText:{
        fontSize:20
    },
    containerFormNameInput:{
        backgroundColor:'#ffffff',
        height:50,
        fontSize:18,
        borderRadius:10,
        marginTop:10
    }
})