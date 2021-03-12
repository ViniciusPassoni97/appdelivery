import React,{createContext,useState} from 'react';

export const ChallengeContext = createContext({}); 


export const ChallengesProvieder = props => {
    const [itemShopping,setShoppingItem] = useState([
        {
            description:'',
            value:0,
            quantidade:0,
            valueTotal:0,
            id:0,
            category_id:0,
            image:'https://th.bing.com/th/id/OIP.IUHhrZatqdgEqxT5lsaSIAHaFD?w=230&h=180&c=7&o=5&dpr=1.5&pid=1.7',
        }
    ]);

    function addShoppingItem(itemAddShopping){
        setShoppingItem(itemAddShopping);
    }

    return(
    <ChallengeContext.Provider value={{
        itemShopping,
        setShoppingItem
    }}>
        {props.children}
    </ChallengeContext.Provider>
    );
}