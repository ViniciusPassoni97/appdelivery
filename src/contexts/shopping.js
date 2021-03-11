import {createContext,useState,ReactNode} from 'react';

export const ChallengeContext = createContext({}); 


export function ChallengesProvieder({children}) {
    const [itemShopping,setShoppingItem] = useState([
        {
          description:'',
          image:'',
          id:0,
          value: 0,
          category_id: 0
        }
    ]);
    return(
    <ChallengeContext.Provider value={itemShopping}>
        {children}
    </ChallengeContext.Provider>
    );
}