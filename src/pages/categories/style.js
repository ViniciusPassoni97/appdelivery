import {StyleSheet} from 'react-native';

export const StyleCategories = StyleSheet.create({
    containerCategories:{
        marginTop:50,
        height: '100%',
    },
    containerCategoriesHeader:{
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        padding:20,
        height:'25%',
        
    },
    containerCategoriesHeaderVector:{
        width:40,
        height:40
    },
    containerCategoriesHeaderText:{
        marginTop:20,
        fontSize:30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    containerCategoriesHeaderInput:{
        height: 55, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop:15,
        fontSize:20,
        borderRadius:20,
        padding:15
    },
    containerCategoriesCard: {
        display: 'flex',
        flexDirection: 'row',
        padding:20,
        height:'60%',
    },
    containerCategoriesScrow:{
        display: 'flex',
        flexDirection: 'row',
    },
    containerCategoriesMenu: {
    }
});