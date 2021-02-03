import {StyleSheet} from 'react-native';

export const StyleCategories = StyleSheet.create({
    container:{
        marginTop:50,
        height: '100%',
    },
    containerItensHeader:{
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        padding:20,
        height:'25%',
    },
    containerItensHeaderImg:{
        width:40,
        height:40
    },
    containerItensHeaderText:{
        marginTop:20,
        fontSize:30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    containerItemHeaderInput:{
        height: 55, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop:15,
        fontSize:20,
        borderRadius:20,
        padding:15
    },
});