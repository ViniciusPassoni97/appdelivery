import React,{useEffect,useState} from 'react';
import { Text, View,Image,ScrollView,TouchableNativeFeedback } from 'react-native';
import CardCategories from '../../components/cardCategories/index';
import {StyleCategories} from './style';
import Vector from '../../../assets/vector.png';
import { useNavigation } from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import api from '../../api/index';


export default function Categories(){
    const [categories, setCategories]= useState([
        {
          description:'',
          image:'',
          id:0
        }
    ]);

    const [idListCategory,setIdListCategory] = useState(0);

    const navigation = useNavigation();

    function HandleSlash() {
        navigation.navigate('Splash');  
    }

    function HandleIten({id:number}) {
        navigation.navigate('Item',{category_id:id}); 
    }

    async function itemCategories(id){
        
    }

    useEffect(()=>{
        api.get('categories').then(response=>{
            setCategories(response.data);
        }).catch(error => console.log(error));
    },[]);

    return (
       <View style={StyleCategories.containerCategories}>
           <View style={StyleCategories.containerCategoriesHeader}>
                <RectButton onPress={HandleSlash}>
                    <Image source={Vector} style={StyleCategories.containerCategoriesHeaderVector}/>
                </RectButton>
                <Text style={StyleCategories.containerCategoriesHeaderText} >Categories</Text>
           </View>
           <View style={StyleCategories.containerCategoriesCard}>
               <ScrollView style={{ flex: 1 }}>
                    {categories.map((categoria)=>{
                        return (
                            <View style={StyleCategories.containerCategoriesScrow}>
                                <TouchableNativeFeedback onPress={()=>HandleIten(categoria.id)}> 
                                    <RectButton>
                                        <CardCategories urlImage={categoria.image} title={categoria.description} number='12'/>
                                    </RectButton>
                                </TouchableNativeFeedback>
                            </View>
                        );
                    })}
               </ScrollView>
            </View>
       </View>
    )
}