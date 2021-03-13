import React,{createContext,useState} from 'react';

export const ChallengeContext = createContext({}); 


export const ChallengesProvieder = props => {
    const [itemShopping,setShoppingItem] = useState([{
    }]);
    
    let sum = 0;

    function addItemShopping(shoppingItem){
        setShoppingItem([...itemShopping,shoppingItem]);
    }

    function sumValourTotal(){
        itemShopping.map(response=>{
            sum = sum + response.valueTotal;
        })
        console.log(sum);
        return sum;
    }

    return(
    <ChallengeContext.Provider value={{
        itemShopping,
        setShoppingItem,
        addItemShopping,
        sumValourTotal
    }}>
        {props.children}
    </ChallengeContext.Provider>
    );
}