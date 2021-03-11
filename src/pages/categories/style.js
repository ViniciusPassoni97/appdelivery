import {StyleSheet} from 'react-native';

export const StyleCategories = StyleSheet.create({
    containerCategories:{
        marginTop:50
    },
    containerCategoriesHeader:{
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        padding:20,
        height:'15%',
        
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
        padding:20,
        height:'87%',
    },
    containerCategoriesScrow:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    }
});