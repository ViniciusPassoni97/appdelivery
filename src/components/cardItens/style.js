import {StyleSheet} from 'react-native';

export const containerCardItem = StyleSheet.create({
    containerItem:{
        margin:15,
        display: 'flex',
        flexDirection: 'row'
    },
    containerItemInfo:{
        marginLeft:15
    },
    containerItemInfoText:{
        fontSize:15
    },
    containerItemInfoButons:{
        marginTop:20,
        marginLeft:15,
        display: 'flex',
        flexDirection: 'row'
    },
    containerItemButtonShopping:{
        padding:13,
        marginLeft:10,
        width:'35%',
        backgroundColor:'#0BCE83',
        borderRadius:13,
        display: 'flex',
        alignItems: 'center'
    },
    containerItemInfoTextValuor:{
        fontSize:20,
        fontWeight:'bold'
    },
    containerItemInfoValuor:{
        marginTop:10,
        marginLeft:15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerItemInfoTitle:{
        fontWeight:'bold',
        fontSize:18
    },
    categoryImage:{
        width: 160,
        height: 160,
    }
});