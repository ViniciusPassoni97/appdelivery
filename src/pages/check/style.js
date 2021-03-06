import {StyleSheet} from 'react-native';

export const ContainerCheck = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:'2%',
        width:'100%',
        height:'100%',
        flexDirection: 'column'
    },    
    containerHeader:{
        display: 'flex',
        flexDirection: 'row',
        width:'100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:15,
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
        padding:10
    },
    containerHeaderText:{
        fontWeight:'bold',
        fontSize:20,
        marginRight:'15%',
        fontWeight:'bold'
    },
    containerPgMethod:{
        fontWeight:'bold',
        fontSize:16
    },
    containerPg:{
        paddingTop:15,
        paddingLeft:15,
        paddingRight:15
    },
    containerPgText:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:20
    },
    containerMap:{
        width: '100%',
        height: 400
    },
    containerHeaderMap:{
        width: '100%',
        height: '100%'
    },
    containerPgModel:{
        marginTop:20,
        width:'95%',
        marginLeft:'2.5%'
    },
    containerPgModelHeader:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    containerPgModelHeaderText:{
        fontWeight:'bold',
        fontSize:16
    },
    containerPgModelSelected:{
        height: 80, 
        width: 200 
    },
    buttonPag:{
        width:'40%',
        height:130,
        textAlign:'center',
        alignItems: 'center',
        marginTop:15,
        justifyContent: 'center',
        marginBottom:30,
        backgroundColor:'#29D23C',
        borderRadius:15,
        marginLeft:15
    },
    containerButton:{
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonPagText:{
        fontWeight:'bold',
        color:'#ffffff',
        fontSize:23
    },
    containerPgOptionsText:{
        fontSize:18,
        marginTop:15
    },
    containerPgOptions:{
        display: 'flex',
        textAlign:'center',
        alignItems:'center'
    },
    containerPgOptionsTextCity:{
        fontSize:14,
        marginTop:15
    },
    containerPgOptionsCity:{
       flexDirection:'row',
       textAlign:'center',
       alignItems:'center',
       justifyContent: 'center' 
    },
    buttonPagValor:{
        fontWeight:'bold',
        color:'#ffffff',
        fontSize:18
    },
    buttonPagVl:{
        width:'40%',
        height:130,
        textAlign:'center',
        alignItems: 'center',
        marginTop:15,
        justifyContent: 'center',
        marginBottom:30,
        backgroundColor:'#7B68EE',
        borderRadius:15,
        marginLeft:15
    },
    buttonPagValorContainer:{
        flexDirection:'row',
        marginTop:5,
        color: '#ffffff'
    },
    buttonPagValorContainerText:{
        fontWeight:'bold',
        color:'#ffffff',
        fontSize:20,
    }

})