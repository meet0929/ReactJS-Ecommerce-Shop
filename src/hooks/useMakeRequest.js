import { useEffect } from "react";
import { useState } from "react";

const useMakeRequest = (endpoint)=> {

    const [result, setResult] = useState({
        data: null,
        error:null
    });
    
    useEffect(()=>{
        
        const asyncFn= async()=> {
            try {
                const response = await fetch(endpoint);
                const json = await response.json();
                setResult((old) => ({ ...old, data: json }));
              } catch (error) {
                setResult((old) => ({ ...old, error: new Error(error).message }));
              }
        };
        
    asyncFn();
    },[endpoint]);

    return result;


}

export default useMakeRequest;