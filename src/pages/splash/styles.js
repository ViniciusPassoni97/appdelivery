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
        marginTop:'5%',
        width:'80%',
        margin:'auto',
    },
    containerTextInfoText: {
        color:'#4F4F4F',
        textAlign: 'center',
        alignItems:'center',
    },
    containerButton: {
        marginTop:'7%',
        width:'90%',
        margin:'auto',
    },
    containerButtonViewBtn: {
        marginTop:'5%',
    },
    containerButtonBtn: {
        
    },
    textInfo: {
        fontSize:20,
        fontWeight:'bold',
    },
    footer: {
        alignItems:'center',
        textAlign:'center',
        height:'80%',
        marginTop:'30%',
        backgroundColor:'#F6F5F5',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    }
})