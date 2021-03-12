import React,{createContext,useState} from 'react';

export const ChallengeContext = createContext({}); 


export const ChallengesProvieder = props => {
    const [itemShopping,setShoppingItem] = useState([{
    }]);

    function addItemShopping(shoppingItem){
        setShoppingItem([...itemShopping,shoppingItem]);
    }

    return(
    <ChallengeContext.Provider value={{
        itemShopping,
        setShoppingItem,
        addItemShopping
    }}>
        {props.children}
    </ChallengeContext.Provider>
    );
}