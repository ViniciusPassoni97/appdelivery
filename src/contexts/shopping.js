import React,{createContext,useState} from 'react';

export const ChallengeContext = createContext({}); 


export const ChallengesProvieder = props => {
    const [itemShopping,setShoppingItem] = useState([{
            description:String,
            value:Number,
            quantidade:Number,
            valueTotal:Number,
            id:Number,
            category_id:Number,
            image:String,
    }]);


    return(
    <ChallengeContext.Provider value={{
        itemShopping,
        setShoppingItem
    }}>
        {props.children}
    </ChallengeContext.Provider>
    );
}