import { useEffect, useState } from "react";


function useLocalStorage (itemName, initialValue ) {

        const [item, setItem] = useState(initialValue);
        const [Loading, setLoading] = useState(true);
        const [Error, setError] = useState(false);
    


        useEffect(() =>{
            setTimeout(()=> {
                try {

                    const localStorageItem = localStorage.getItem(itemName);
                    let parsedItem;
        
                    if(!localStorageItem) {
                        localStorage.setItem(itemName, JSON.stringify(initialValue));
                        parsedItem = initialValue;
                        } 
                    else {
                        parsedItem = JSON.parse(localStorageItem);
                        setItem(parsedItem)
                        }
                        setLoading(false);
        
                } catch(error) {
                    setLoading(false);
                    setError(true)
        
                }
            },2000);

        });
    


        

        const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
            setItem(newItem)
        }; 

        return {item, saveItem, Loading, Error}
    
}

export { useLocalStorage } 





// const defaultTodos = [
//   {text:'Coca', completed: false},
//   {text:'cerveza', completed: false},
//   {text:'tequila', completed: false},
//   {text:'agua', completed: false},
//   {text:'RonaLLdo', completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

// localStorage.removeItem('TODOS_V1', defaultTodos)