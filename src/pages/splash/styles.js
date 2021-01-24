import { StyleSheet } from 'react-native';

export const ContainerSplash = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
    },
    containerImgLogo:{
        marginTop:'10%',
    },
    srcImage: {
        flex:1,
        width:'100%',
        height:'100%',
    },
    containerTextTitle: {
        marginTop:'5%',
        alignItems: 'center',
    },
    containerTextInfo: {
        width:'80%',
        margin:'auto',
    },
    containerTextInfoText: {
        textAlign: 'center',
        alignItems:'center',
    },
    textInfo: {
        fontSize:20,
        fontWeight:'bold',
    },
    footer: {
        alignItems:'center',
        textAlign:'center',
        height:'65%',
        marginTop:'40%',
        backgroundColor:'#F6F5F5',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    }
})